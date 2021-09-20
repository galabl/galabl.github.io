let mapData;
$.getJSON("https://raw.githubusercontent.com/pubg/api-assets/master/dictionaries/telemetry/mapName.json")
    .then(function (data) {
        mapData = data;
    })

function getPlayerData(player_id, nickname) {
    $("#results").empty();
    $("#reports").empty();
    $("#search-player").val(nickname);
    $.get(`https://api.pubg.report/v1/players/${player_id}/streams`)
        .then(function (response) {
            let reports_parsed = parseShittyTdm(response);
            Object.keys(reports_parsed).forEach(function (key) {
                reports_parsed[key].forEach(function (value) {
                    $("#reports").append(`
                        <a href="https://www.twitch.tv/videos/${value.VideoID.replace('v', '')}?t=${parseTimeForTwitchVod(value.TimeDiff)}" class="video-link" target="_blank">
                            <div class="report ${parseEvent(value.Event)["class"]}" id="${value.ID}">
                                <p class="date">${value.Date}</p>
                                <h3>${value.Killer}</h3>
                                <p><span class="${parseEvent(value.Event)["class"]}">${parseEvent(value.Event)["msg"]}</span> <strong>${value.Victim}</strong></p>
                                <div class="inline-info">
                                    ${parseEvent(value.Event)["teammate"] ? "<span class=\"tag\">Teammate's POV</span>" : ''}
                                    <span class="tag">${parseMode(value.Mode)[0]}</span>
                                    <span class="tag">${parseMode(value.Mode)[1] ? parseMode(value.Mode)[1] : "TPP"}</span>
                                    <span class="tag">${mapData[value.Map]}</span>
                                </div>
                            </div>
                        </a>
                    `)
                })
            })
        })
}

function parseShittyTdm(resp) {
    Object.keys(resp).forEach(function (key) {
        Object.keys(resp[key]).forEach(function (key2) {
            if (resp[key][key2].Mode === "tdm") {
                delete resp[key][key2];
            }
        })
        if ($.isEmptyObject(resp[key])) {
            delete resp[key];
        }
    })
    return resp;
}

function parseTimeForTwitchVod(time) {
    time = time.split(":")
    switch (time.length) {
        case 2:
            return `${time[0]}m${time[1]}s`;
        case 3:
            return `${time[0]}h${time[1]}m${time[2]}s`;
    }
}

function parseEvent(event) {
    switch (event) {
        case "LogPlayerKill":
            return {
                "msg": "killed",
                "class": "killed"
            };
        case "LogPlayerMakeGroggy":
            return {
                "msg": "knocked",
                "class": "knocked"
            };
        case "LogPlayerDeath":
            return {
                "msg": "killed",
                "class": "killed-by"
            };
        case "LogPlayerMadeGroggy":
            return {
                "msg": "knocked",
                "class": "knocked-by"
            };
        case "LogTeammateKill":
            return {
                "msg": "killed",
                "class": "killed teammate-pov",
                "teammate": true
            };
        case "LogTeammateMakeGroggy":
            return {
                "msg": "knocked",
                "class": "knocked teammate-pov",
                "teammate": true
            }
        default:
            return {
                "msg": "unknown, this is probably a bug",
                "class": "killed-by"
            }
    }
}

function parseMode(mode) {
    return mode.split("-");
}

$("#search-player").on("keyup", function (el) {
    let input = el.target.value;
    if (input.length >= 3) {
        $.get(`https://api.pubg.report/search/${input}`)
            .then(function (response) {
                $("#results").empty();
                Object.keys(response).forEach(function (key) {
                    let value = response[key];
                    $("#results").append(`
                            <div class="result">
                                <div class="player" onclick="getPlayerData('${value.id}', '${value.nickname}')">
                                    <img src="assets/images/${value.shard}.svg" alt="${value.shard}" class="platform">
                                    <span class="nickname">${value.nickname}</span>
                                </div>
                            </div>
                        `)
                })
            })
    } else {
        $("#results").empty();
    }
})
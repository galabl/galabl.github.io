<template>
  <v-app>
    <v-img
        lazy-src="@/assets/pubg.jpg"
        src="@/assets/pubg.jpg"
        gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.7)"
        style="position: fixed; width: auto; height: 100%;"
    >
    </v-img>
    <div
        v-if="player && tdmExcluded"
        class="d-flex flex-column justify-center align-center pa-2">
      <v-card
          v-for="streams in tdmExcluded"
          :class="EventLogs[streams.Event].class"
          :key="streams.ID"
          color="#282528"
          class="ma-5 pa-3 report"
          @click="openStream(streams)"
          dark
      >
        <v-card-title class="text-h5">
          {{ streams.Killer }}
        </v-card-title>

        <v-card-subtitle>
          <span class="event" :class="EventLogs[streams.Event].class">{{ EventLogs[streams.Event].state }}</span>
          {{ streams.Victim }}
        </v-card-subtitle>

        <v-card-actions>
          <v-chip
              small
              v-if="EventLogs[streams.Event].teammatePov"
              label
              outlined
              class="mr-3"
          >Teammate's POV
          </v-chip>
          <v-chip
              small
              label
              outlined
              class="mr-3"
          >{{ modes[streams.Mode] }}
          </v-chip>
          <v-chip
              small
              label
              outlined
          >{{ maps[streams.Map] }}
          </v-chip>
        </v-card-actions>
      </v-card>
    </div>
    <v-dialog
        v-model="streamOpen"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition">
      <Stream/>
    </v-dialog>
  </v-app>
</template>
<script>
import {mapGetters} from 'vuex';
import axios from "axios";
import Stream from "@/components/Stream";

export default {
  name: 'Home',
  components: {
    Stream
  },
  mounted() {
    this.getMaps();
    this.getModes();
  },
  data() {
    return {
      modes: "",
      maps: "",
      EventLogs: {
        "LogPlayerKill": {
          "state": "killed",
          "class": "player-kill",
          "teammatePov": false
        },
        "LogPlayerMakeGroggy": {
          "state": "knocked",
          "class": "knocked-player",
          "teammatePov": false
        },
        "LogPlayerDeath": {
          "state": "killed",
          "class": "player-death",
          "teammatePov": false
        },
        "LogPlayerMadeGroggy": {
          "state": "knocked",
          "class": "player-knocked",
          "teammatePov": false
        },
        "LogTeammateKill": {
          "state": "killed",
          "class": "player-kill teammate-pov",
          "teammatePov": true
        },
        "LogTeammateMakeGroggy": {
          "state": "knocked",
          "class": "knocked-player teammate-pov",
          "teammatePov": true
        },
      },
    }
  },
  methods: {
    getMaps() {
      axios.get('https://raw.githubusercontent.com/pubg/api-assets/master/dictionaries/telemetry/mapName.json')
          .then(response => {
            this.maps = response.data
          })
    },
    getModes() {
      axios.get('https://raw.githubusercontent.com/pubg/api-assets/master/dictionaries/gameMode.json')
          .then(response => {
            this.modes = response.data
          })
    },
    openStream(stream) {
      this.$store.dispatch("openReport", stream)
    }
  },
  computed: {
    ...mapGetters([
      "player",
      "tdmExcluded",
      "streamOpen"
    ]),
  }
};
</script>
<style lang="scss">
.report {
  width: 100%;
  border-radius: 1rem !important;
}

.report.player-kill, .report.knocked-player {
  box-shadow: inset 0 .2rem 0 #69f0ae !important;

  span.event {
    color: #69f0ae;
  }
}

.report.player-kill.teammate-pov, .report.knocked-player.teammate-pov {
  box-shadow: inset 0 .25rem 0 #b4df77 !important;

  span.event {
    color: #b4df77;
  }
}

.report.player-death, .report.player-knocked {
  box-shadow: inset 0 .2rem 0 #f44336 !important;

  span.event {
    color: #f44336;
  }
}

@media screen and (min-width: 1028px) {
  .report {
    width: 70%;
  }
}

.container {
  padding: 0 !important;
}
</style>
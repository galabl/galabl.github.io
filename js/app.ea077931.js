(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pubg.report/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4251:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0481"),a("07ac"),a("4de4");var r=a("2b0e"),s=a("2f62"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v(" Pubg.report ")]),a("v-list-item-subtitle",[t._v(" TDM excluded* ")])],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-text-field",{attrs:{label:"Player Name",outlined:"",loading:t.loading,clearable:""},on:{"click:clear":t.onClearClicked},model:{value:t.searchPlayer,callback:function(e){t.searchPlayer=e},expression:"searchPlayer"}})],1)],1),t.searchPlayer?a("v-list",{attrs:{dense:"",nav:""}},t._l(t.searchResult,(function(e){return a("v-list-item",{key:e.ID,on:{click:function(a){return t.openStreams(e)}}},[a("v-list-item-icon",[a("v-icon",[t._v("$"+t._s(e.shard))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.nickname))])],1)],1)})),1):t._e(),a("v-divider"),a("v-subheader",[t._v("History")]),t.stream_history?a("v-list",{attrs:{dense:"",nav:""}},t._l(t.stream_history,(function(e){return a("v-list-item",{key:e.ID,on:{click:function(a){return t.openStreams(e)}}},[a("v-list-item-icon",[a("v-icon",[t._v("$"+t._s(e.shard))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.nickname))])],1)],1)})),1):t._e()],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("Home")],1)],1),a("v-footer",{attrs:{app:""}},[t._v(" Originally Made by Vlad and Mark from "),a("a",{staticClass:"ml-lg-1",attrs:{target:"_blank",href:"https://pubg.report"}},[t._v(" pubg.report")])])],1)},o=[],i=(a("b0c0"),a("caad"),a("2532"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-img",{staticStyle:{position:"fixed",width:"auto",height:"100%"},attrs:{"lazy-src":a("f7d3"),src:a("f7d3"),gradient:"to top right, rgba(0,0,0,.5), rgba(0,0,0,.7)"}}),t.player&&t.tdmExcluded?r("div",{staticClass:"d-flex flex-column justify-center align-center pa-2"},t._l(t.tdmExcluded,(function(e){return r("v-card",{key:e.ID,staticClass:"ma-5 pa-3 report",class:t.EventLogs[e.Event].class,attrs:{color:"#282528",dark:""},on:{click:function(a){return t.openStream(e)}}},[r("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.Killer)+" ")]),r("v-card-subtitle",[r("span",{staticClass:"event",class:t.EventLogs[e.Event].class},[t._v(t._s(t.EventLogs[e.Event].state))]),t._v(" "+t._s(e.Victim)+" ")]),r("v-card-actions",[t.EventLogs[e.Event].teammatePov?r("v-chip",{staticClass:"mr-3",attrs:{small:"",label:"",outlined:""}},[t._v("Teammate's POV ")]):t._e(),r("v-chip",{staticClass:"mr-3",attrs:{small:"",label:"",outlined:""}},[t._v(t._s(t.modes[e.Mode])+" ")]),r("v-chip",{attrs:{small:"",label:"",outlined:""}},[t._v(t._s(t.maps[e.Map])+" ")])],1)],1)})),1):t._e(),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.streamOpen,callback:function(e){t.streamOpen=e},expression:"streamOpen"}},[r("Stream")],1)],1)}),l=[],c=a("5530"),p=a("bc3a"),u=a.n(p),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{dark:""}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeStream}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v(t._s(t.report.Killer)+" killing "+t._s(t.report.Victim))]),a("v-spacer")],1),a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"d-flex justify-center align-center mt-10"},[a("div",{staticClass:"killer-stats"}),a("iframe",{staticClass:"stream-iframe",attrs:{src:"https://player.twitch.tv?autoplay=true&height=100%25&parent=galabl.github.io&time="+t.twitchTime(t.report.TimeDiff)+"&video="+t.report.VideoID+"&width=100%25",height:"500",width:"890",allowfullscreen:"",allow:"autoplay; fullscreen",sandbox:"allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"}}),a("div",{staticClass:"victim-stats"})])])],1)},m=[],v=(a("ac1f"),a("1276"),a("99af"),{name:"Stream",methods:{twitchTime:function(t){switch(t=t.split(":"),t.length){case 2:return"".concat(t[0],"m").concat(t[1],"s");case 3:return"".concat(t[0],"h").concat(t[1],"m").concat(t[2],"s")}},closeStream:function(){this.$store.dispatch("openReport",void 0)}},computed:Object(c["a"])({},Object(s["c"])(["report"]))}),h=v,f=a("2877"),g=a("6544"),b=a.n(g),y=a("8336"),w=a("b0af"),_=a("a523"),k=a("132d"),x=a("2fa4"),V=a("71d9"),C=a("2a7f"),S=Object(f["a"])(h,d,m,!1,null,null,null),P=S.exports;b()(S,{VBtn:y["a"],VCard:w["a"],VContainer:_["a"],VIcon:k["a"],VSpacer:x["a"],VToolbar:V["a"],VToolbarTitle:C["a"]});var O={name:"Home",components:{Stream:P},mounted:function(){this.getMaps(),this.getModes()},data:function(){return{modes:"",maps:"",EventLogs:{LogPlayerKill:{state:"killed",class:"player-kill",teammatePov:!1},LogPlayerMakeGroggy:{state:"knocked",class:"knocked-player",teammatePov:!1},LogPlayerDeath:{state:"killed",class:"player-death",teammatePov:!1},LogPlayerMadeGroggy:{state:"knocked",class:"player-knocked",teammatePov:!1},LogTeammateKill:{state:"killed",class:"player-kill teammate-pov",teammatePov:!0},LogTeammateMakeGroggy:{state:"knocked",class:"knocked-player teammate-pov",teammatePov:!0}}}},methods:{getMaps:function(){var t=this;u.a.get("https://raw.githubusercontent.com/pubg/api-assets/master/dictionaries/telemetry/mapName.json").then((function(e){t.maps=e.data}))},getModes:function(){var t=this;u.a.get("https://raw.githubusercontent.com/pubg/api-assets/master/dictionaries/gameMode.json").then((function(e){t.modes=e.data}))},openStream:function(t){this.$store.dispatch("openReport",t)}},computed:Object(c["a"])({},Object(s["b"])(["player","tdmExcluded","streamOpen"]))},M=O,j=(a("dbc2"),a("7496")),E=a("99d9"),L=a("cc20"),I=a("169a"),T=a("adda"),$=Object(f["a"])(M,i,l,!1,null,null,null),z=$.exports;b()($,{VApp:j["a"],VCard:w["a"],VCardActions:E["a"],VCardSubtitle:E["b"],VCardTitle:E["c"],VChip:L["a"],VDialog:I["a"],VImg:T["a"]});var D={name:"App",components:{Home:z},mounted:function(){JSON.parse(localStorage.getItem("streams_history"))&&(this.stream_history=JSON.parse(localStorage.getItem("streams_history")))},data:function(){return{drawer:!0,loading:!1,searchPlayer:"",searchResult:[],stream_history:[]}},methods:{openStreams:function(t){"xs"===this.$vuetify.breakpoint.name&&(this.drawer=!1),this.$store.dispatch("getPlayerStreams",t),this.stream_history.includes(t)?console.log("uslo"):this.stream_history.push(t),localStorage.setItem("streams_history",JSON.stringify(this.stream_history))},onClearClicked:function(){this.$store.state.streams="",this.$store.state.player=""}},watch:{searchPlayer:function(t){var e=this;this.loading=!0,(!t||t.length>=3)&&u.a.get("https://api.pubg.report/search/".concat(t)).then((function(t){e.searchResult=t.data,e.loading=!1})).catch((function(t){console.log(t)}))}}},R=D,N=a("40dc"),A=a("5bc1"),B=a("ce7e"),J=a("553a"),H=a("8860"),K=a("da13"),G=a("5d23"),F=a("34c3"),q=a("f6c4"),Q=a("f774"),U=a("e0c7"),W=a("8654"),X=Object(f["a"])(R,n,o,!1,null,null,null),Y=X.exports;b()(X,{VApp:j["a"],VAppBar:N["a"],VAppBarNavIcon:A["a"],VContainer:_["a"],VDivider:B["a"],VFooter:J["a"],VIcon:k["a"],VList:H["a"],VListItem:K["a"],VListItemContent:G["a"],VListItemIcon:F["a"],VListItemSubtitle:G["b"],VListItemTitle:G["c"],VMain:q["a"],VNavigationDrawer:Q["a"],VSubheader:U["a"],VTextField:W["a"]});var Z=a("f309"),tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-label":"Steam",role:"img",viewBox:"0 0 512 512",fill:"#ebebeb"}},[a("rect",{attrs:{width:"512",height:"512",rx:"15%",fill:"#231f20"}}),a("path",{attrs:{d:"m183 280 41 28 27 41 87-62-94-96"}}),a("circle",{attrs:{cx:"340",cy:"190",r:"49"}}),a("g",{attrs:{fill:"none",stroke:"#ebebeb"}},[a("circle",{attrs:{cx:"179",cy:"352",r:"63","stroke-width":"19"}}),a("path",{attrs:{d:"m-18 271 195 81","stroke-width":"80","stroke-linecap":"round"}}),a("circle",{attrs:{cx:"340",cy:"190",r:"81","stroke-width":"32"}})])])])},et=[],at={},rt=Object(f["a"])(at,tt,et,!1,null,null,null),st=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",[a("svg",{attrs:{width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg"}},[a("title",[t._v("PlayStation icon")]),a("path",{attrs:{d:"M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.193 4.362-.002 4.362-3.153 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.391-1.502h-.002zm4.656 16.242l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.499v-2.385l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.029 5.437.661 1.848.601 2.041 1.472 1.576 2.072s-1.622 1.036-1.622 1.036l-8.544 3.107v-2.297l.02-.023zM1.808 18.6c-1.9-.545-2.214-1.668-1.352-2.321.801-.585 2.159-1.051 2.159-1.051l5.616-2.013v2.313L4.206 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.248 17v2.074c-.121.029-.256.044-.391.073-1.938.331-3.995.196-6.037-.479l-.012-.068z"}})])])},ot=[],it={},lt=Object(f["a"])(it,nt,ot,!1,null,null,null),ct=lt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{"enable-background":"new 0 0 575.568 575.568"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"575.568px",height:"575.568px",viewBox:"0 0 575.568 575.568","xml:space":"preserve"}},[a("g",[a("g",[a("path",{attrs:{d:"M285.994,141.629c9.553-6.861,59.149-38.887,132.088-23.397c-36.084-27.772-81.25-44.327-130.307-44.327\n\t\t\tc-48.562,0-93.324,16.212-129.224,43.482C228.925,104.211,276.648,134.921,285.994,141.629z"}}),a("path",{attrs:{d:"M285.994,242.793C153.851,344.818,141.904,425.016,140.968,443.234c38.311,36.193,89.952,58.428,146.812,58.428\n\t\t\tc55.129,0,105.379-20.869,143.305-55.129C431.258,438.994,429.832,353.852,285.994,242.793z"}}),a("path",{attrs:{d:"M339.697,194.334c0,0,148.74,144.462,91.848,251.794c43.066-39.125,70.111-95.576,70.111-158.348\n\t\t\tc0-63.011-27.264-119.652-70.619-158.79C429.574,134.597,345.51,162.394,339.697,194.334z"}}),a("path",{attrs:{d:"M232.291,194.334c-5.361-29.492-77.412-55.447-89.578-63.66c-42.295,39.076-68.807,94.988-68.807,157.112\n\t\t\tc0,59.504,24.321,113.313,63.532,152.083C89.303,333.266,232.291,194.334,232.291,194.334z"}}),a("path",{attrs:{d:"M287.787,575.568c158.686,0,287.782-129.102,287.782-287.788C575.568,129.095,446.467,0,287.787,0\n\t\t\tC129.095,0,0,129.102,0,287.787C0,446.473,129.095,575.568,287.787,575.568z M287.787,30.6\n\t\t\tc141.813,0,257.18,115.374,257.18,257.187c0,141.813-115.373,257.18-257.18,257.18c-141.806,0-257.193-115.373-257.193-257.18\n\t\t\tC30.594,145.98,145.974,30.6,287.787,30.6z"}})])])])},ut=[],dt={},mt=Object(f["a"])(dt,pt,ut,!1,null,null,null),vt=mt.exports;r["a"].use(Z["a"]);var ht=new Z["a"]({theme:{dark:!0},icons:{values:{steam:{component:st},psn:{component:ct},xbox:{component:vt}}}});a("54ba");r["a"].config.productionTip=!1,r["a"].use(s["a"]);var ft=new s["a"].Store({state:{player:"",streams:"",report:""},mutations:{savePlayer:function(t,e){t.player=e},saveStreams:function(t,e){t.streams=Object.values(e).flat()},saveReport:function(t,e){t.report=e}},actions:{getPlayerStreams:function(t,e){var a=t.commit;a("savePlayer",e),u.a.get("https://api.pubg.report/v1/players/".concat(e.id,"/streams")).then((function(t){a("saveStreams",t.data)})).catch((function(t){console.log(t)}))},openReport:function(t,e){var a=t.commit;a("saveReport",e)}},getters:{player:function(t){return t.player},tdmExcluded:function(t){return t.streams?t.streams.filter((function(t){return"tdm"!==t.Mode})):""},streamOpen:function(t){return!!t.report}}});new r["a"]({vuetify:ht,store:ft,render:function(t){return t(Y)}}).$mount("#app")},dbc2:function(t,e,a){"use strict";a("4251")},f7d3:function(t,e,a){t.exports=a.p+"img/pubg.9c71ace0.jpg"}});
//# sourceMappingURL=app.ea077931.js.map
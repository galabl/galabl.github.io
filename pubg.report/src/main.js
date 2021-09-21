import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from "axios";
import 'es6-promise/auto';

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    player: "",
    streams: "",
    report: ""
  },
  mutations: {
    savePlayer(state, payload) {
      state.player = payload;
    },
    saveStreams(state, payload) {
      state.streams = Object.values(payload).flat();
    },
    saveReport(state, payload) {
      state.report = payload
    }
  },
  actions: {
    getPlayerStreams({commit}, payload) {
      commit("savePlayer", payload)
      axios.get(`https://api.pubg.report/v1/players/${payload.id}/streams`)
          .then(response => {
            commit("saveStreams", response.data)
          })
          .catch(err => {
            console.log(err)
          })
    },
    openReport({commit}, payload) {
      commit("saveReport", payload)
    }
  },
  getters: {
    player: state => state.player,
    tdmExcluded: state => {
      if (state.streams) {
        return state.streams.filter(stream => stream.Mode !== "tdm")
      }

      else
        return ""
    },
    streamOpen: state => {
      return !!state.report;
    }
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

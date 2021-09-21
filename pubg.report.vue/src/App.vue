<template>
  <v-app>
    <v-app-bar
        app
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
        app
        v-model="drawer"
        :width="nav_width"
        >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Pubg.report
          </v-list-item-title>
          <v-list-item-subtitle>
            TDM excluded*
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-text-field
              label="Player Name"
              v-model="searchPlayer"
              outlined
              :loading="loading"
              @click:clear="onClearClicked"
              clearable
          ></v-text-field>
        </v-list-item>
      </v-list>

      <v-list
          v-if="searchPlayer"
          dense
          nav
      >
        <v-list-item
            v-for="player in searchResult"
            :key="player.ID"
            @click="openStreams(player)"
        >
          <v-list-item-icon>
            <v-icon>${{ player.shard }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ player.nickname }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-subheader>History</v-subheader>
        <v-list
            v-if="stream_history"
            dense
            nav
        >
          <v-list-item
              v-for="player in stream_history"
              :key="player.ID"
              @click="openStreams(player)"
          >
            <v-list-item-icon>
              <v-icon>${{ player.shard }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ player.nickname }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <Home/>
      </v-container>
    </v-main>

    <v-footer app>
      Originally Made by Vlad and Mark from  <a class="ml-lg-1" target="_blank" href="https://pubg.report"> pubg.report</a>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home';
import axios from 'axios';

export default {
  name: 'App',

  components: {
    Home,
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("streams_history")))
      this.stream_history = JSON.parse(localStorage.getItem("streams_history"))
  },
  data() {
    return {
      drawer: true,
      loading: false,
      searchPlayer: "",
      searchResult: [],
      stream_history: []
    }
  },
  methods: {
    openStreams(player) {
      if (this.$vuetify.breakpoint.name === 'xs')
        this.drawer = false
      this.$store.dispatch('getPlayerStreams', player)
      if (!this.stream_history.includes(player)) {
        this.stream_history.push(player)
      } else {
        console.log('uslo')
      }
      localStorage.setItem('streams_history', JSON.stringify(this.stream_history));
    },
    onClearClicked() {
      this.$store.state.streams = ""
      this.$store.state.player = ""
    }
  },
  watch: {
    searchPlayer: function (player_name) {
      this.loading = true
      if (!player_name || player_name.length >= 3) {
        axios.get(`https://api.pubg.report/search/${player_name}`)
            .then(response => {
              this.searchResult = response.data
              this.loading = false
            })
            .catch(err => {
              console.log(err)
            })
      }
    }
  },
  computed: {
    nav_width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%';
        default: return '256';
      }
    }
  }
};
</script>

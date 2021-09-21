<template>
  <v-card>
    <v-toolbar
        dark
    >
      <v-btn
          icon
          dark
          @click="closeStream"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ report.Killer }} killing {{ report.Victim }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <div class="d-flex justify-center align-center mt-10">
        <div class="killer-stats"></div>
        <iframe
            class="stream-iframe"
            :src="'https://player.twitch.tv?autoplay=true&amp;height=100%25&amp;parent=galabl.github.io&amp;time='+ twitchTime(report.TimeDiff) + '&amp;video='+ report.VideoID +'&amp;width=100%25'"
            height="500"
            width="890"
            allowfullscreen=""
            allow="autoplay; fullscreen"
            sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation">
        </iframe>
        <div class="victim-stats"></div>
      </div>
    </v-container>
  </v-card>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: 'Stream',
  methods: {
    twitchTime(time) {
      time = time.split(":")
      switch (time.length) {
        case 2:
          return `${time[0]}m${time[1]}s`;
        case 3:
          return `${time[0]}h${time[1]}m${time[2]}s`;
      }
    },
    closeStream() {
      this.$store.dispatch('openReport', undefined)
    }
  },
  computed: {
    ...mapState([
        'report'
    ])
  }
};
</script>
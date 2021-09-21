import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Steam from '@/icons/Steam.vue';
import Psn from '@/icons/Psn.vue';
import Xbox from '@/icons/Xbox.vue';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {dark: true},
    icons: {
        values: {
            steam: {
                component: Steam
            },
            psn: {
                component: Psn
            },
            xbox: {
                component: Xbox
            }
        }
    }
});

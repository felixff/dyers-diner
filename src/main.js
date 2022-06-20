import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);
import {dom} from "@fortawesome/fontawesome-svg-core";

dom.watch();
import axios from 'axios';
import VueAxios from 'vue-axios';
import _ from 'lodash';

import {VueReCaptcha} from 'vue-recaptcha-v3';
import 'animate.css';
import {AOS} from 'aos';
import 'aos/dist/aos.css';

let options = {
  siteKey: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_KEY_DEV : process.env.VUE_APP_KEY_PROD,
  loaderOptions: {
    autoHideBadge: true
  }
}

createApp(App)
  .use(store)
  .use(router)
  .use(_)
  .use(VueAxios, axios)
  .use(AOS)
  .use(VueReCaptcha, options)
  .mount('#app')

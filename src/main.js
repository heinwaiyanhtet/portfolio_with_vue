import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueWaypoint from 'vue-waypoint'


import 'wowjs/css/libs/animate.css';
import "venobox/dist/venobox.min.css";
import "slick-carousel/slick/slick.css";
import "imagehover.css/scss/imagehover.scss"


createApp(App)
    .use(store)
    .use(router)
    .use(VueWaypoint)
    .mount("#app");

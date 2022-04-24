import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


 


Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import Carousel3d from "vue-carousel-3d";
import VueRouter from 'vue-router';
import {routes} from './routes'

Vue.use(VueRouter);
Vue.use(Carousel3d);

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  render: (h) => h(App),
  router
  
}).$mount("#app");

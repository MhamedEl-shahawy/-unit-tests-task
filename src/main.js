import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import router from './router';
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(VueRouter)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

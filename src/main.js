import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueResourse)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

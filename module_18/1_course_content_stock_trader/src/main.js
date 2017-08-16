import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Numeral from 'numeral';
import App from './App.vue';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'your-url-goes-here';

Numeral.register('locale', 'de', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  currency: {
    symbol: '€'
  }
});

Numeral.locale('de');

Vue.filter('formatDeEuro', function(value) {
  return Numeral(value).format('0,0 $');
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

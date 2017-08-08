import Vue from 'vue'
import App from './App.vue'
import Header from './components/Shared/Header.vue'
import Content from './components/Shared/Content.vue'
import Footer from './components/Shared/Footer.vue'

export const eventBus = new Vue({
  methods: {
    serverSelected(server) {
      this.$emit('serverSelected', server);
    }
  }
});

Vue.component('app-header', Header);
Vue.component('app-content', Content);
Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})

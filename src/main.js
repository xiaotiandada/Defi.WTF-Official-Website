import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
Vue.use(BootstrapVue);

const vm = new Vue({
  render: h => h(App)
});

vm.$mount('#app');

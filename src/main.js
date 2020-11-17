import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';

Vue.use(vuetify);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')









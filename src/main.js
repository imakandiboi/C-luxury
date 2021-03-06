import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//  javascript import for when you're importing the css directly in your javascript  
import 'vue-video-section/dist/vue-video-section.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Scratch from "./lib/index";

Vue.config.productionTip = false
Vue.use(Scratch)
new Vue({
  render: h => h(App),
}).$mount('#app')

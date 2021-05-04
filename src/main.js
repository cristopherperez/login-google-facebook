import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { auth } from "@/firebase";

Vue.config.productionTip = false
Vue.use(Vuetify)

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('setUsuario', user)
  }
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

});


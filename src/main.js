import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from "vue-axios"
import { apolloClient } from './graphql/apollo'
import VueApollo from 'vue-apollo'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.use(vueAxios,axios)
Vue.use(VueApollo)

Vue.config.productionTip = false

axios.defaults.baseURL = "https://tec-accesscontrol.herokuapp.com/graphql"

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem('token')}`

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  vuetify,
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')
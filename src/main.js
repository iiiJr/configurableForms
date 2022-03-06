import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Modal, FormModel, Switch, Button, Input, Checkbox, Radio, Select, DatePicker } from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(FormModel)
Vue.use(Modal)
Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Switch)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

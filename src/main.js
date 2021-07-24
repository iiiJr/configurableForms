import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  FormModel,
  Input,
  Radio,
  Checkbox,
  Button,
  Select,
  DatePicker,
  Switch,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Select);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

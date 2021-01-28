import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "@/axios";
import store from "./scripts/store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "@/styles/index.scss";
// import '@/icons'
// import '@/element-ui/trsTheme/index.css'
import '@/assets/scss/aui.scss'
import url from "scripts/api/index";
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);
Vue.prototype.$axios = axios;
Vue.prototype.$url = url;
Vue.prototype.$Store = store;
Vue.use(ElementUI);
Vue.config.productionTip = false;
let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount("#app");
export default vm;

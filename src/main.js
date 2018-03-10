// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    this.checkLogin();
  },
  watch:{
    "$route" : 'checkLogin'
  },
  methods:{
    checkLogin(){
      let user = VueCookie.get('username');
      console.log(user)
      if(!user) {
        this.$router.push({path: '/login'});
      }else{
        this.$router.push({path: '/user_info'});
      }
    }
  }
})

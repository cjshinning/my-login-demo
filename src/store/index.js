import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: { //保存用户信息
          nick: null
        }
      },
      mutations: {
        //更新用户信息
        updateUserInfo(state, newUserInfo) {
          state.userInfo = newUserInfo;
        }
      }
})

export default store
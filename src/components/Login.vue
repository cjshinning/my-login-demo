<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="login-form">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getUserInfo()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUser }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      }
    }
  },
  mounted() {
    // this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      let userInfo = {
        nick: '222'
      }
      
      setTimeout(() =>{
        this.$cookie.set('username', userInfo.nick,30);
        this.$store.commit('updateUserInfo', userInfo);
        this.$router.push({ path: '/user_info' })
      },3000)
      
    },
    handleLogin(formName) {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let userInfo = {
            nick: '222'
          }
          // login(userInfo).then(res => {
          //   console.log(res)
          //   if(res.data.status === 200) {
          //     this.$cookie.set('username', res.data.data.username,30);
          //     this.$store.commit('getUser', res.data.data.username);
          //     alert(this.$store.state.user);
          //     this.$router.push({path: '/card'});
          //   }else{
          //     alert(res.data.msg);
          //   }
          // }).catch(function (error) {
          //   console.log(error);
          // });
          this.$store.commit('updateUserInfo', userInfo)
          this.$router.push({ path: '/user_info' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

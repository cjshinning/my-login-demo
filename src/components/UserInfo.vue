<template>
  <div class="user-info">
    <h2>Hello, {{this.$store.state.userInfo.nick}}</h2>
    <h3>
      <span @click="handleLogout()">退出</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data() {
    return {
      handleLogout() {
        // logout().then(res=>{
        //     console.log(res);
        //     if(res.data.status === 200){
        //         this.$cookie.delete('username');
        //         this.$router.push({path: '/login'});
        //     }else{
        //         alert(res.msg);
        //     }
        // })
        this.$cookie.delete('username')
        setTimeout(() => {
          this.$router.push({ path: '/login' })
        }, 3000)
        
        // this.$store.dispatch('Logout')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

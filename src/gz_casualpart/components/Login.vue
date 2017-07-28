<template>
  <div id="app"
        style="font-family: 'Arial', 'Microsoft YaHei';">
    <el-row>
     <el-col :span="8"><h1 style="color:rgb(170,34,250)"></h1></el-col>
     <el-col :span="8">
       <div style="color:rgb(0,0,0)">
        <h1><span class="demonstration">Welcome to Bashu OnlineJudge!</span></h1>
        <br/>
        <span class="demonstration">Username</span>
        <el-input v-model="input" placeholder="Please input your username" style="width: 80%"></el-input>
        <br/>
        <br/>
        <span class="demonstration">Password</span>
        <el-input v-model="input" placeholder="Please input your password" style="width: 80%"></el-input>
       </div>
     </el-col>
     <el-col :span="8"><h1 style="color:rgb(170,34,250)"></h1></el-col>
    </el-row>
    <br/>
    <el-row style="text-align: center;">
      <el-button type="success" @click="handleLogin">Login</el-button>
      <el-button type="info" @click="handleRegister">Register</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Bashu OnlineJudge!'
    }
  },
  methods: {
    handleLogin() {
      /////////////////////验证！！！！！！！
      this.$router.push('/');
    },
    handleRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

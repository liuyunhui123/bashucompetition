<template>
  <div id="app">
    <el-row>
     <el-col :span="8"><h1 style="color:rgb(170,34,250)"></h1></el-col>
     <el-col :span="8">
       <div style="color:rgb(0,0,0)">
        <h1><span class="demonstration">Welcome to Admin Page!</span></h1>
        <br/>
        <span class="demonstration">Password</span>
        <el-input v-model="input" placeholder="For safety, Please input your password again" style="width: 80%"></el-input>
       </div>
     </el-col>
     <el-col :span="8"><h1 style="color:rgb(170,34,250)"></h1></el-col>
    </el-row>
    <br/>
    <el-row style="text-align: center;">
      <el-button type="success" @click="handleLogin">Login</el-button>
      <el-button type="info" @click="handleBack">Back</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Admin Page'
    }
  },
  methods: {
    handleLogin() {
      this.$router.push('adminManage');
    },
    handleBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

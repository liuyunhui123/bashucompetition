<template>
  <div id="profile"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
    
  
    <article id="page_content" 
              style="margin-left: 80px; margin-right:80px;">
      <section id="heading" style="text-align: left">
        <h1 style="margin-bottom: 0; font-size:40px">Profile</h1>
        <h1 style="margin-bottom: 0; font-size:20px">Please enter your password for authorization</h1></br>
        <h1 style="margin-bottom: 0; font-size:10px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PASSWORD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="Enter your password" style="width: 30%"></el-input></h1>
        <h1 style="margin-bottom: 0; font-size:20px">Please enter your new profile</h1></br>
        <h1 style="margin-bottom: 0; font-size:10px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW PASSWORD:<el-input v-model="input" placeholder="Enter your new password"style="width: 30%"></el-input></h1>
        <h1 style="margin-bottom: 0; font-size:10px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="Re-enter your new password"style="width: 30%"></el-input></h1>
        <h1 style="margin-bottom: 0; font-size:10px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MOTTO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="Enter your motto"style="width: 50%"></el-input></h1>
        <h1 style="margin-bottom: 0; font-size:10px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCHOOL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="Enter your school"style="width: 30%"></el-input></h1>
        <h1 style="margin-bottom: 0; font-size:10px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="input" placeholder="Enter your email address"style="width: 30%"></el-input></h1>
        <br/><br/><br/>
        <el-button type="primary">Submit</el-button>
        </br>
      </section>
  </article>
</div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navCenter {
  margin-top: 10px;
  margin-bottom: 10px;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
</style>
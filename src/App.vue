<template>
  <div id="app">
    <el-col :span="24">
    <header>
      <nav class="Navbar">
        <el-menu router mode="horizontal">
          <el-menu-item index="/manageProblem">题目管理</el-menu-item>
          <el-menu-item>权限管理</el-menu-item>
          <el-menu-item index="/addContest">添加比赛</el-menu-item>
          <el-menu-item index="/manageContest">管理比赛</el-menu-item>
        </el-menu>
      </nav>
    </header>
    <article style="margin-left: 80px; margin-right:80px;">
      <router-view></router-view>
    </article>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

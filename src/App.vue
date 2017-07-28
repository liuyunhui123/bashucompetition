<template>
  <div id="app">
    
    <header>
      <nav style="text-align: center;">
        <el-menu class="header" router theme="light" mode="horizontal" @select="handleSelect">
          <el-col :span="6" class="navCenter"><h1 style="font-size: 20px;">{{contest_name}}</h1></el-col>
          <el-col :span="2"><el-menu-item index="/">主页</el-menu-item></el-col>
          <el-col :span="2"><el-menu-item index="/qa">提问</el-menu-item></el-col>
          <el-col :span="2">
            <el-submenu index="3">
              <template slot="title">题目</template>
                <template v-for="prob in probs">
                  <el-menu-item :key="prob.value" index="/probs/$prob.value">{{prob.label}}</el-menu-item>
                </template>
              </el-submenu></el-col>
          <el-col :span="2"><el-menu-item index="/results">结果</el-menu-item></el-col>
          <el-col :span="2"><el-menu-item index="/rank">排名</el-menu-item></el-col>
          <el-col :span="4" class="navCenter"><p>{{username}}</p></el-col>
          <el-col :span="2" class="navCenter"><p>{{user_rank}}</p></el-col>
        </el-menu>
      </nav>
    </header>

    <article style="margin-top: 20px; margin-left: 80px; margin-right: 80px;">
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      contest_name: 'Hello WC 2017!',
      username: 'liuyunhui123',
      user_rank: '999',
      probs: [
         {value: '1', label: '挑战NPC'},
         {value: '2', label: '论战捆竹竿'},
         {value: '3', label: '鏖战表达式'}
       ]
    }
  }
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
  margin-top: 3px;
  margin-bottom: 3px;
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

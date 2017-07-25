<template>
  <div id="app">
    <header>
      <nav class="Navbar">
        <el-menu theme="dark" :default-active="da" router mode="horizontal">
          <el-row>
            <el-col :span="16">
              <el-menu-item index="/mainpage"><img src="./assets/logo_3.png"></el-menu-item>
              <el-menu-item index="/problemSet">PROBLEM</el-menu-item>
              <el-menu-item index="/results">RESULTS</el-menu-item>
              <el-menu-item index="/rank">RANKS</el-menu-item>
              <el-menu-item index="/contest_view">CONTESTS</el-menu-item>
            </el-col>
            <el-col :span="4">
              <el-input class="navCenter" 
                v-model="search_bar" 
                placeholder="Enter Whatever you want" 
                icon="search" :on-icon-click="handleIconClick">
              </el-input>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="click" class="navCenter">
                <span class="el-dropdown-link">
                <el-button>
                  liuyunhui123<i class="el-icon-caret-buttom el-icon--right"></i>
                </el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>My Profile</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-menu>
      </nav>
    </header>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      da: '/mainpage'
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

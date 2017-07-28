<template>
  <div id="app">
    <header>
      <nav class="Navbar">
        <el-menu theme="dark" router>
          <el-col :span="3"><el-menu-item index="/"><img src="./assets/logo_3.png"></el-menu-item></el-col>
          <el-col :span="3"><el-menu-item index="/problemSet" style="color: white;">PROBLEM</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item index="/results" style="color: white;">RESULTS</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item index="/ranks" style="color: white;">RANKS</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item index="/contest" style="color: white;">CONTESTS</el-menu-item></el-col>
          <el-col :offset="2" :span="4"> 
            <el-input class="navCenter"
              v-model="search_bar" 
              placeholder="Enter Whatever you want" 
              icon="search" :on-icon-click="handleIconClick">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-dropdown trigger="click" class="navCenter">
              <span class="el-dropdown-link">
              <el-button>
                liuyunhui123<i class="el-icon-caret-buttom el-icon--right"></i>
              </el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link to="/Profile">My Profile</router-link></el-dropdown-item>
                <el-dropdown-item><router-link to="/Adminlogin">admin</router-link></el-dropdown-item>
                <el-dropdown-item><router-link to="/Login">Logout</router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-menu>
      </nav>
    </header>
    <article style="margin-left: 80px; margin-right: 80px;">
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
export default {
  name: 'app'
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

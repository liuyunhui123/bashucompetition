<template>
  <div id="mainpage"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
    <section id="Announcement">
      <h3 style="font-weight: bold;">公告</h3>
      <el-table :data="announceData" show-header="false">
        <el-table-column prop="title" label="事件名" width="540"></el-table-column>
        <el-table-column prop="author" label="作者" width="180"></el-table-column>
        <el-table-column prop="time" width="180" label="发布时间"></el-table-column>
      </el-table>
      <section style="text-align: right;">
        <a href="./announcement_page">查看所有</a>
      </section>
    </section>

    <section id="RankList">
      <h2 style="font-weight: bold;">你萌的排名</h2>
      <el-table :data="rankData" show-header="false">
        <el-table-column prop="Rank" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="Username" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="Motto" label="格言" width="540" align="center"></el-table-column>
        <el-table-column prop="Rating" label="Rating" width="120" align="center"></el-table-column>
      </el-table>
      <section style="text-align: center;">
        <a href="./rank">查看所有</a>
      </section>
    </section>
  
  </div>
</template>

<script>
 export default{
   data() {
     return {
       announceData: [{
         title: 'NOIP模拟赛1',
         author: '开开开',
         time: '????-??-??'
       }, {
         title: 'NOIP模拟赛2',
         author: '哲哲哲',
         time: '????-??-??'
       }, {
         title: 'NOIP模拟赛3',
         author: '辉辉辉',
         time: '????-??-??'
       }
       ]
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   }
 }
</script>
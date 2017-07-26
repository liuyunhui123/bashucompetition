<template>
  <div class="mainpage"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
    <section id="Announcement">
      <h1 style="text-align:left; font-weight: bold;">公告</h1>
      <el-table :data="announceData" show-header="false" style="width: 100%">
        <el-table-column prop="title" label="事件名" width="540" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" width="180" align="center"></el-table-column>
        <el-table-column prop="time" label="发布时间" align="center"></el-table-column>
      </el-table>
      <section style="text-align: right;">
        <router-link to="/announcement_page">查看所有</router-link>
      </section>
    </section>

    <section id="RankList">
      <h1 style="text-align:left; font-weight: bold;">你萌的排名</h1>
      <el-table :data="rankData" show-header="false">
        <el-table-column prop="Rank" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="Username" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="Motto" label="格言" width="540" align="center"></el-table-column>
        <el-table-column prop="Rating" label="Rating" align="center"></el-table-column>
      </el-table>
      <section style="text-align: center;">
        <router-link to="/rank">查看所有</router-link>
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
       ],
       rankData: [
         {Rank: '1', Username: 'Doctor', Motto: 'BOSS', Rating: '10000'},
         {Rank: '2', Username: '289371298', Motto: '696!', Rating: '1000'},
         {Rank: '2', Username: 'liuguangzhe', Motto: 'Travel entertains!', Rating: '1000'},
         {Rank: '4', Username: 'liuyunhui123', Motto: 'I good vegetable', Rating: '0'}
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
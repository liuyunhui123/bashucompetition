<template>
  <div class="announcement_page"
        style="font-family: 'Arial', 'Microsoft YaHei';">
      <section id="Announcement"> 
        <h1 style="font-size: 30px;">公告 Announcement</h1>
        <el-table :data="announceData" style="width: 100%" show-header="false">
          <el-table-column prop="title" label="事件名" width="540"></el-table-column>
          <el-table-column prop="author" label="作者" width="180"></el-table-column>
          <el-table-column prop="time" label="发布时间"></el-table-column>
        </el-table>
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
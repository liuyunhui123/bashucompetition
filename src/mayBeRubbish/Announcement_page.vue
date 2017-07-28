<template>
  <div class="announcement_page"
        style="font-family: 'Arial', 'Microsoft YaHei';">
    <article class="content-container"
              style="margin-top: 20px; margin-left: 80px; margin-right:80px;">
      <section id="Announcement"> 
        <h1>公告 Announcement</h1>
        <el-table :data="announceData" show-header="false">
          <el-table-column prop="title" label="事件名" width="540"></el-table-column>
          <el-table-column prop="author" label="作者" width="180"></el-table-column>
          <el-table-column prop="time" label="发布时间" width="180"></el-table-column>
        </el-table>
      </section>
    </article>

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
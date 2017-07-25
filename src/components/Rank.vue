<template>
  <div id="rank"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
  <article id="page_content" 
        style="margin-top:20px; margin-left: 80px; margin-right:80px;">

    <section id="_ranks">
      <el-table :data="rankData" show-header="false">
        <el-table-column prop="Rank" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="Username" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="Motto" label="格言" width="540" align="center"></el-table-column>
        <el-table-column prop="Stages" label="参赛场数" width="120" align="center"></el-table-column>
        <el-table-column prop="Rating" label="Rating" width="120"align="center"></el-table-column>
      </el-table>
    </section>

    <section id="_pagination" 
          style="text-align: center;">
      <el-pagination
        :current-page="currentPage4"
        layout="prev, pager, next, jumper">
      </el-pagination>
    </section>

  </article>
</div>
</template>

<script>
 export default{
   data() {
     return {
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
     },
     handleSizeChange(val) {
       console.log('每页 ${val} 条');
     },
     handleCurrentChange(val) {
       console.log('当前页: ${val}');
     }
   }
 }
</script>
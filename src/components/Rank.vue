<template>
  <div id="rank"
        style="font-family: 'Arial', 'Microsoft YaHei';">

    <section id="get">
      <el-button @click="handleClick">Getdata</el-button>
    </section>

    <section id="_ranks">
      <el-table :data="rankData" show-header="false" style="width: 100%;">
        <el-table-column prop="Rank" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="Username" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="Motto" label="格言" width="540" align="center"></el-table-column>
        <el-table-column prop="Stages" label="参赛场数" width="120" align="center"></el-table-column>
        <el-table-column prop="Rating" label="Rating" align="center"></el-table-column>
      </el-table>
    </section>

    <section id="_pagination" 
          style="text-align: center;">
      <el-pagination
        :current-page="currentPage"
        layout="prev, pager, next, jumper">
      </el-pagination>
    </section>
</div>
</template>

<script>
 export default{
   data() {
     return {
       rankData: []
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
     },
     handleClick() {
       this.$http.get("localhost:8888")
         .then(function(response) {
           this.tot=response.data.tot;
           this.rankData=response.data.rankData;
         })
         .catch(function(err) {
           console.log(err);
         });
     }
   }
 }
</script>
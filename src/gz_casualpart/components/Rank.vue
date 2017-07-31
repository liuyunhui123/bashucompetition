<template>
  <div id="rank"
        style="font-family: 'Arial', 'Microsoft YaHei';">

    <section id="get">
      <el-button @click="handleClick">Getdata</el-button>
    </section>

    <section id="_ranks">
      <el-table :data="rankData" show-header="false" style="width: 100%;">
        <el-table-column type="index" width="50" align="center"></el-table-column>
        <el-table-column prop="username" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="motto" label="格言" width="540" align="center"></el-table-column>
        <el-table-column prop="racenumber" label="参赛场数" width="120" align="center"></el-table-column>
        <el-table-column prop="rating" label="Rating" align="center"></el-table-column>
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
 import qs from 'qs';
 export default{
   data() {
     return {
      rankData:[{username:'',rating:'',motto:'',racenumber:''}]
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
	     let _this = this
       this.$http.post("http://localhost:8888",qs.stringify({requireuser: "tester3"}))
			   .then(function(response) {
		       _this.rankData=response.data.rankData;
         })
         .catch(function(err) {
           console.log(err);
         });
     }
   }
 }
</script>
<template>
  <div id="contests_rank"
        style="font-family: 'Arial', 'Microsoft YaHei';">
    
      <section id="so bad">
        <el-button @click="fresh">GetData</el-button>
      </section>
      <section id="rank" style="text-align: left;">
        <el-table :data="rankData" stripe border>
          <el-table-column type="index" width="60"></el-table-column>
          <el-table-column prop="username" label="Name" width="180"></el-table-column>
          <el-table-column prop="sum" label="Total"></el-table-column>
        </el-table>
      </section>

  </div>
</template>

<script>
 export default{
   data() {
     return {
       probName: '挑战NPC',
       contest_name: 'WC2016: Hello Hell!',
       username: 'liuyunhui123',
       user_rank: '999',
       rankData: [{
         username: 'Doctor', 
         //probs: [{name: 'A', score: '100'}, {name: 'B', score: '100'}, {name: 'C', score: '100'}],
         sum: 300
       }
       ]
     };
   },
   methods: {
     fresh() {
       let _this = this;
       this.$http.get("http://localhost:8888", qs.stringify())
         .then(function(){
           _this.rankData = response.data.rankData;
         })
         .catch(function(err){
           console.log(err);
         })
     },
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
 /*//失败的处理……
 <template scope="scope" v-for="prob in scope.row.probs">
            <el-table-column 
              :key="prob.$name" :prop="prob.$score" :label="prob.$name"></el-table-column>
          </template>
 */
</script>
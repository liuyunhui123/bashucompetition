<template>
  <div id="contests_result"
        style="font-family: 'Arial', 'Microsoft YaHei';">
      
      <section id="so bad">
        <el-button @click="fresh">GetData</el-button>
      </section>

      <section id="result">
        <el-row>
        <el-table :data="points" style="width: 100%;">
          <el-col :span="3">
          <el-table-column type="expand">
            <template scope="props">
              <p>{{props.row.desc}}</p></template></el-table-column>
          </el-col>
          <el-col :span="2">
          <el-table-column prop="key" label="测试点" align="center"></el-table-column>
          </el-col>
          <el-col :span="2">
          <el-table-column prop="state" label="结果" align="center"></el-table-column>
          </el-col>
          <el-col :span="2">
          <el-table-column prop="score" label="得分" align="center"></el-table-column>
          </el-col>
        </el-table>
        </el-row>
      </section>

  </div>
</template>

<script>
 export default{
   data() {
     return {
       points: [{
         key: '1', state: 'WA', score: '10', desc: 'Not the same with standard output'}
       ]
     };
   },
   methods: {
     fresh() {
       let _this = this;
       this.$http.get("http://localhost:8888", qs.stringify())
         .then(function(response){
           _this.points = response.data.points;
         })
         .catch(function(err){
           console.log(err);
         });
     },
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     handleType(key) {
       if(key === 'AC' || key === 'Accepted') {
         return 'success';
       } else if(key === 'WA' || key === 'Wrong Answer') {
         return 'danger';
       } else if(key === 'MLE' || key === 'TLE' || key === 'Memory Limit Exceeded' || key === 'Time Limit Exceeded') {
         return 'warning';
       } else if(key === 'RE' || key === 'Runtime Error') {
         return 'info';
       } else {
         return 'primary';
       }
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
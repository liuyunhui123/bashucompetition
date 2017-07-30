<template>
  <div id="contests_result"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="result">
        <el-row>
        <el-table :data="points">
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
       probName: '挑战NPC',
       contest_name: 'WC2016: Hello Hell!',
       username: 'liuyunhui123',
       user_rank: '999',
       probs: [
         {index: '1',name: 'P1'}, {index: '2',name: 'P2'},{index: '3',name: 'P3'}
       ],
       points: [{
         key: '1', state: 'WA', score: '10', desc: 'Not the same with standard output'}
       ]
     };
   },
   methods: {
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
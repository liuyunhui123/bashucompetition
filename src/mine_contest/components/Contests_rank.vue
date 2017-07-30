<template>
  <div id="contests_rank"
        style="font-family: 'Arial', 'Microsoft YaHei';">
    
      <section id="rank">
        <el-table :data="rankData" stripe border>
          <el-table-column prop="rank" label="#" width="60"></el-table-column>
          <el-table-column prop="username" label="Name" width="180"></el-table-column>
           <template scope="scope">
             <template v-for="prob in $scope.row.probs">
               <el-table-column 
                 :key="prob.name" :prop="$prob.score" :label="$prob.name"></el-table-column>
             </template>
           </template>
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
         rank: '1',
         username: 'Doctor', 
         probs: [{name: 'A', score: '100'}, {name: 'B', score: '100'}, {name: 'C', score: '100'}],
         sum: 300
       }
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
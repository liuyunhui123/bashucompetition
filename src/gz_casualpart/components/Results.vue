<template>
  <div id="contests_results"
        style="font-family: 'Arial', 'Microsoft YaHei';">
    

    <article class="content-container"
              style="margin-top: 20px; margin-left: 80px; margin-right:80px;">
      <section id="table">
        <el-table :data="results" border stripe>
          <el-table-column prop="id" label="ID" width="100" align="center" sortable></el-table-column>
          <el-table-column prop="submitTime" label="提交时间" width="120" align="center" sortable></el-table-column>
          <el-table-column prop="prob" label="题目" width="180" align="center" sortable></el-table-column>
          <el-table-column prop="lang" label="提交语言" width="100" align="center"></el-table-column>
          <el-table-column prop="length" label="代码长度" width="100" align="center"></el-table-column>
          <el-table-column prop="runtime" label="运行时间" width="100" align="center"></el-table-column>
          <el-table-column prop="memory" label="内存使用" width="100" align="center"></el-table-column>
          <el-table-column prop="state" label="评测情况" align="center" sortable>
            <template scope="scope">
              <el-tag :type="handleType(scope.row.state)">{{scope.row.state}}</el-tag></template></el-table-column>
        </el-table>
      </section>
      <section id="pagination" style="text-align: center;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100,200,300,400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </section>
    </article>

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
       results: [{
         submitTime: "22:27:44",
         prob: "挑战NPC",
         lang: "C++",
         length: '0.1KB',
         runtime: '0.01s',
         memory: '158KB',
         state: 'Wrong Answer'
       }
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
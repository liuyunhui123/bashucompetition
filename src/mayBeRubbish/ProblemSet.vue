<template>
  <div id="problemSet"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
    <article id="content" 
              style="margin-left: 80px; margin-right:80px;">
      

      <section id="_content">
        <el-table :data="problemData" show-header="false">
          <el-table-column prop="ID" label="ID" width="100"></el-table-column>
          <el-table-column prop="title" label="Title" width="360" @click="handleIntoProblem()"></el-table-column>
          <el-table-column prop="tags" label="Tag" width="200"></el-table-column>
          <el-table-column prop="sources" label="Sources"></el-table-column>
        </el-table>
      </section>
      
      <section id="_pagination"
            style="text-align: center;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
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
       problemData: [{
         ID: '1000',
         title: '【入门试题】求两个数的和',
         tags: 'EASY',
         sources: 'xinyue'
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
     },
     handleIntoProblem() {
     }
   }
 }
</script>
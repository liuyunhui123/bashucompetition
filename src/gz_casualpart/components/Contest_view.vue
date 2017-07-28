<template>
  <div class="contest_view"
        style="font-family: 'Arial', 'Microsoft YaHei';">
      
      <section class="todo_contests">
        <h2 style="font-weight: bold;">正在进行或即将到来的比赛</h2>
        <section id="table"
                  style="text-align: center;">
          <el-table :data="todoContestsData" style="width: 100%;" border>
            <el-table-column prop="author" label="创建者" align="center" width="180" sortable></el-table-column>
            <el-table-column label="名称" align="center" width="240">
              <template scope="scope">
                <router-link to="">{{scope.row.title}}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="比赛类型" align="center" width="120" sortable></el-table-column>
            <el-table-column prop="stTime" label="开始时间" align="center" width="180" sortable></el-table-column>
            <el-table-column prop="lastTime" label="时长" align="center" width="150" sortable></el-table-column>
            <el-table-column prop="registers" label="报名人数" align="center" sortable></el-table-column>
          </el-table>
        </section>
      </section>

      <section class="already_contests">
        <h2 style="font-weight: bold;">已经结束的比赛</h2>
        <section class="table"
                  style="text-align: center;">
          <el-table :data="alreadyContestsData" style="width: 100%;" border>
            <el-table-column prop="author" label="创建者" align="center" width="180" sortable></el-table-column>
            <el-table-column label="名称" align="center" width="240">
              <template scope="scope">
                <router-link to="">{{scope.row.title}}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="比赛类型" align="center" width="120" sortable></el-table-column>
            <el-table-column prop="stTime" label="开始时间" align="center" width="180" sortable></el-table-column>
            <el-table-column prop="lastTime" label="时长" align="center" width="150" sortable></el-table-column>
            <el-table-column prop="registers" label="报名人数" align="center" sortable></el-table-column>
          </el-table>
        </section>
      </section>
  
  </div>
</template>

<script>
 export default{
   data() {
     return {
       todoContestsData: [{
         author: '开开开',
         title: 'NOIP模拟赛1',
         type: 'NOIP',
         stTime: '????-??-??',
         lastTime: '5 小时',
         registers: '31'
       }, {
         author: '哲哲哲',
         title: 'NOIP模拟赛2',
         type: 'NOIP',
         stTime: '????-??-??',
         lastTime: '5 小时',
         registers: '31'
       }, {
         author: '辉辉辉',
         title: 'NOIP模拟赛3',
         type: 'NOIP',
         stTime: '????-??-??',
         lastTime: '5 小时',
         registers: '0'
       }
       ],
       alreadyContestsData: [{
         author: 'Docter',
         title: 'IOI模拟赛',
         type: 'IOI',
         stTime: '????-??-??',
         lastTime: '???',
         registers: 'inf'
       }]
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     handleCreate() {
     },
     handleManage() {
     }
   }
 }
</script>
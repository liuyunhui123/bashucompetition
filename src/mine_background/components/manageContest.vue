<template>
  <div id="contest_manage"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section class="slot_tip">
        <h2 style="margin-bottom: 0px;">你可以对你创建的比赛进行修改或者直接删♂掉它</h2>
        <h2 style="margin-top: 0px;">当然，管理员对所有比赛都有上述权限啦</h2>
      </section>
      
      <section class="form">
        <el-table
          :data="contest_list" border style="width: 100%;">
          <el-table-column prop="date" label="预定日期" width="180"></el-table-column>
          <el-table-column prop="title" label="名称" width="500"></el-table-column>
          <el-table-column prop="author" label="创建者" width="180"></el-table-column>
          <el-table-column prop="right" label="操作">
            <template scope="scope">
              <el-button @click="handleEdit()" type="primary" size="small">
                编辑</el-button>
              <el-button @click="handleDelete()" type="danger" size="small">
                删除</el-button>
            </template>
            </el-table-column>
        </el-table>
      </section>
  </div>
</template>

<script>
 export default{
   data() {
     return {
       contest_list: [{
         date: '????-??-??',
         title: 'NOIP模拟赛1',
         author: '开开开'
       }, {
         date: '????-??-??',
         title: 'NOIP模拟赛2',
         author: '哲哲哲'
       }, {
         date: '????-??-??',
         title: 'NOIP模拟赛3',
         author: '辉辉辉'
       }
       ]
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     handleEdit() {
       this.$router.push('/editContest');
     },
     handleDelete() {
     },
     handleMain() {
     }
   }
 }
</script>
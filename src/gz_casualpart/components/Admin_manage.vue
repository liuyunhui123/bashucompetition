<template>
  <div id="rank"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
  <article id="page_content" 
        style="margin-top:20px; margin-left: 80px; margin-right:80px;">
    <h1>Users</h1>
    <section id="_ranks">
      <el-table :data="rankData" show-header="false">
        <el-table-column prop="Rank" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="Username" label="用户名" width="180" align="center"></el-table-column>
        <el-table-column prop="School" label="学校" width="180" align="center"></el-table-column>
        <el-table-column prop="Admin" label="权限" width="120" align="center"></el-table-column>
        <el-table-column prop="Stages" label="最后登录时间" width="120" align="center"></el-table-column>
        <el-table-column prop="Pos" label="最后登录地址" align="center"></el-table-column>
      </el-table>
    </section>
    
    <section id="_pagination" 
          style="text-align: center;">
      <el-pagination
        :current-page="currentPage4"
        layout="prev, pager, next, jumper">
      </el-pagination>
    </section>
    <h1>Management</h1>
  </article>
  <h1>Single User</h1>
  <span class="demonstration">Username</span>
  <el-input v-model="input" placeholder="Please input the name of the user" style="width: 20%"></el-input>
  <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin</span>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <h1>Group</h1>
  <span class="demonstration">Groupname</span>
  <el-input v-model="input" placeholder="Please input the name of the group" style="width: 20%"></el-input>
  <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin</span>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </br></br></br><el-button type="primary">Submit</el-button>
</div>
</template>

<script>
 export default{
   data() {
     return {
       rankData: [
         {Rank: '1', Username: 'Doctor', School: 'PKU',Admin :'Administrator', Pos: '172.233.233.233(北京市海淀区)'},
         {Rank: '2', Username: '289371298', School: 'PKU',Admin :'Administrator', Pos: '172.233.233.233(北京市海淀区)'},
         {Rank: '2', Username: 'liuyunhui123', School:'PKU',Admin :'Administrator', Pos: '172.233.233.233(北京市海淀区)'},
         {Rank: '4', Username: 'liuguangzhe', School: '?',Admin :'Laji Users', Pos: '???.???.???.???(????)'}
       ],
       options: [
         {value: '选项1',label: 'Registered User'}, 
         {value: '选项2',label: 'NOIP Users'},
         {value: '选项3',label: 'NOIP(advanced) Users'},
         {value: '选项4',label: 'CQOI Users'},
         {value: '选项5',label: 'NOI Users'},
         {value: '选项6',label: 'Administrator'},
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
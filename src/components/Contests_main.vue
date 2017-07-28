<template>
  <div id="contests_main"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="timeOfMatch">
        <el-row>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="25"></el-progress>
          <el-col style="margin-top: 0px; margin-bottom: 0px; text-align: right;"
                  v-model="timeLeft"><h3>简而言之，还剩下{{timeLeft}}的时间</h3></el-col>
        </el-row>
      </section>
      
      <section id="infos">
        <el-row type="flex" justify="center" style="text-align: center;">
          <el-col :span="3" v-model="typeOfMatch"><h2>赛制：{{typeOfMatch}}</h2></el-col>
          <el-col :span="4" v-model="numberOfProb"><h2>试题数量：{{numberOfProb}}</h2></el-col>
          <el-col :span="3" v-model="sumScore"><h2>总分：{{sumScore}}</h2></el-col>
        </el-row>
      </section>

      <section id="probs">
        <el-row>
          <el-col :span="3">
            <h2>试题</h2>
          </el-col>
          <el-col :span="18" 
                id="table"
                style="text-align: center;">
            <el-table :data="probs" border>
              <el-table-column prop="index" label="编号" align="center" width="180"></el-table-column>
              <el-table-column label="名称" align="center" width="540">
                <template scope="scope">
                  <router-link to="">{{scope.row.title}}</router-link>
                </template>
              </el-table-column>
              <el-table-column prop="type" label="类型" align="center"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </section>

      <section id="announces">
        <el-row>
          <el-col :span="3">
            <h2>公告</h2>
          </el-col>
          <el-col :span="18" 
                id="table"
                style="text-align: center;">
            <el-table :data="announces" border>
              <el-table-column prop="time" label="时间" align="center" width="180" sortable></el-table-column>
              <el-table-column prop="content" label="内容" align="center"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </section>

      <section id="asks">
        <el-row>
          <el-col :span="3">
            <h2>Q&A</h2>
          </el-col>
          <el-col :span="18" 
                id="table"
                style="text-align: center;">
            <el-table :data="asks" border>
              <el-table-column prop="time" label="时间" align="center" width="180" sortable></el-table-column>
              <el-table-column prop="Q" label="问题" align="center" width="360" sortable></el-table-column>
              <el-table-column prop="A" label="回答" align="center"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </section>

  </div>
</template>

<script>
 export default{
   data() {
     return {
       contest_name: 'WC2016: Hello Hell!',
       username: 'liuyunhui123',
       user_rank: '999',
       timeLeft: '+1s',
       typeOfMatch: 'NOIP',
       numberOfProb: '3',
       sumScore: '300'
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   }
 }
</script>
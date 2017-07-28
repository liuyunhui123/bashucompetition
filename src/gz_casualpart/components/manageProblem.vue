<template>
  <div id="problem_manage"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="manageProblem" style="margin-top: 30px;">
        <section id="create" style="text-align: right;">
          <el-button type="primary" @click="createProb">新建题目</el-button>
        </section>
        <section id="manage">
          <section id="content">
            <el-row>
              <el-col :span="6"><h1>修改题目</h1></el-col>
              <el-col :span="12">
                <el-row>
                  <el-col :span="12"><p>是对收藏夹内的题目有所不满吗？</p></el-col>
                  <el-select v-model="prob" placeholder="是不是在收藏夹里呢">
                    <el-option
                      v-for="item in stars" :key="item.value" :label="item.name" :value="item.value">
                    </el-option>
                  </el-select>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p>还是觉得题库中的题目仍需打磨？</p>
                  </el-col>
                  <el-col :span="12"><el-input v-model="prob" placeholder="那么输入题号吧"></el-input></el-col>
                </el-row>
              </el-col>
            </el-row>
          </section>
          <section id="buts" style="text-align: center;">
            <el-button :plain="true" type="primary" @click="modifyProb">点击修改</el-button>
          </section>
        </section>
      </section>
  </div>
</template>

<script>
 export default{
   data() {
     return {
     }
   },
   methods: {
     createProb() {
       this.$router.push('/newProb');
     },
     modifyProb() {
     }
   }
 }
</script>
<template>
  <div id="problem"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
      <section id="heading" style="text-align: center">
        <h1 style="margin-bottom: 0; font-size:30px">#{{problemID}}:{{name}}</h1>
        </br>
        <el-tag size="large" type="success" v-model="tl">time limit = {{tl}}</el-tag>
        <el-tag size="large" type="warning" v-model="ml">memory limit = {{ml}}</el-tag>
        <h3>题目类型: {{typ}}</h3>
      </section>
      <section id="content" style="text-align: left;">
        
        <h2>题目描述</h2>
        <p>{{desc}}</p>
        </br>

        <h2>输入格式</h2>
        <p>{{input_format}}</p>
        </br>

        <h2>输出格式</h2>
        <p>{{output_format}}</p>
        </br>

        <h2>样例输入与输出</h2>
        <el-row v-for="sample in samples">
          <el-row>input</el-row>
          <el-row class="grid-content bg-purple-light">{{sample.input}}</el-row>
          <el-row>output</el-row>
          <el-row class="grid-content bg-purple-light">{{sample.output}}</el-row>
        </el-row>
        </br>

        <h2>数据范围与约定 + 提示</h2>
        <p>{{tips}}</p>
        </br>
        
        <h2>你要的附件【滑稽】</h2>
        <router-link to="/accessory/:ID">点击这里下载</router-link>
      
      </section>

      <section id="butts" style="text-align: center;">
        <el-button type="primary" @click="handleSubmit()">提交</el-button>
        <el-button @click="handleDiscuss()">讨论</el-button>
        <el-button type="success" @click="handleResults()">结果</el-button>
        <el-button type="danger" @click="handleCart()">加入购物车</el-button>
      </section>
</div>
</template>

<script>
 export default{
   data() {
     return {
       problemID: '1000',
       name: 'A+B',
       typ: 'Conventional',
       tl: '1s',
       ml: '256MB',
       desc: '你懂的【滑稽】',
       input_format: '两个整数a, b',
       output_format: '一个整数，代表a+b',
       samples: [
         {input: '1 2', output: '3'},
         {input: '225 128', output: '353'}
       ],
       tips: 'C++的int能过！够了吧！'
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     handleSubmit() {
     },
     handleDiscuss() {
     },
     handleResults() {
     },
     handleCart() {
     }
   }
 }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
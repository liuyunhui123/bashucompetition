<template>
  <div id="problem"
        style="font-family: 'Arial', 'Microsoft YaHei';">
  
    <article id="page_content" 
              style="margin-left: 80px; margin-right:80px;">
      <section id="heading" style="text-align: center">
        <h1 style="margin-bottom: 0; font-size:30px">#{{problemID}}:{{name}}</h1>
        </br>
        <el-tag size="large" type="success" v-model="tl">time limit = {{tl}}</el-tag>
        <el-tag size="large" type="warning" v-model="ml">memory limit = {{ml}}</el-tag>
      </section>
      <section id="content">
        <section id="head"  style="text-align: center;">
          <h3>题目类型: {{typ}}</h3>
        </section>
        <h2>题目描述</h2>
        <p v-model="desc">{{desc}}</p>
        </br>
        <h2>输入格式</h2>
        <p v-model="input_format">{{input_format}}</p>
        </br>
        <h2>输出格式</h2>
        <p v-model="output_format">{{output_format}}</p>
        </br>
        <h2>数据范围与约定 + 提示</h2>
        <p v-model="tips">{{tips}}</p>
        </br>
        <h2>你要的附件【滑稽】</h2>
        <a href="./accessory">点击这里下载</a>
      </section>
      <section id="butts" style="text-align: center;">
        <el-button type="primary" @click="handleSubmit()">提交</el-button>
        <el-button @click="handleDiscuss()">讨论</el-button>
        <el-button type="success" @click="handleResults()">结果</el-button>
        <el-button type="danger" @click="handleCart()">加入购物车</el-button>
      </section>
  </article>
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
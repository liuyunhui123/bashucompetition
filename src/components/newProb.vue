<template>
  <div id="problem_manage"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="newProb">
        <section id="name">
          <el-row>
            <el-col :span="6"><h1>题目名称</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="name" placeholder="给我起一个好名字哦！"></el-input></h1>
            </el-col>
          </el-row>
        </section>
        
        <section id="type">
          <el-row>
            <el-col :span="6"><h1>题目类型</h1></el-col>
            <el-col :span="12">
              <h1>
                <el-select v-model="type" placeholder="我会是什么类型的题目呢">
                  <el-option 
                    v-for="typ in availbleTypes" 
                    :key="typ.value" :label="typ.name" :value="typ.value"></el-option>
                </el-select>
              </h1>
            </el-col>
          </el-row>
        </section>

        <section id="desc">
          <el-row>
            <el-col :span="6"><h1>题目描述</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="desc" placeholder="快来形容我吧！"
                    type="textarea" :rows="3"></el-input></h1>
            </el-col>
          </el-row>
        </section>

        <section id="input_form">
          <el-row>
            <el-col :span="6"><h1>输入格式</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="input_form" placeholder="想要给选手们怎样的数据呢？"
                    type="textarea" :rows="3"></el-input></h1>
            </el-col>
          </el-row>
        </section>

        <section id="output_form">
          <el-row>
            <el-col :span="6"><h1>输出格式</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="output_form" placeholder="选手会给出怎样的答案呢？"
                    type="textarea" :rows="3"></el-input></h1>
            </el-col>
          </el-row>
        </section>

        <section id="sample">
          <el-row>
            <el-col :span="6"><h1>样例数据</h1></el-col>
            <el-col :span="12">
              <el-row>
                <h1>
                  <el-col :span="12">
                  <el-input v-model="input" placeholder="这边是输入数据"
                            type="textarea" :rows="3"></el-input></el-col>
                  <el-col :span="12">
                  <el-input v-model="output" placeholder="这边是输入数据"
                            type="textarea" :rows="3"></el-input></el-col>
                </h1>
              </el-row>
            </el-col>
          </el-row>
        </section>

        <section id="tips">
          <el-row>
            <el-col :span="6"><h1>数据范围与约定 + 提示</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="tips" placeholder="范围，范围……范围！"
                    type="textarea" :rows="3"></el-input></h1>
            </el-col>
          </el-row>
        </section>

        <section id="buts" style="text-align: center;">
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button :plain="true" type="danger" @click="handleQuit">退出</el-button>
        </section>
      </section>
  </div>
</template>

<script>
 export default{
   data() {
     return {
       name,type,desc,input_form,output_form,input,output,tips
     }
   },
   methods: {
     handleSubmit() {
       this.$http.post("http://localhost:8888",
        qs.stringify({this:name,this:type,this:desc,
                      this:input_form,this:output_form,this:input,this:output,this:tips}))
     },
     handleQuit() {
       const h = this.$createElement;
       this.$msgbox({
         title: '消息',
         message: h('p', null, [
           h('span', null, '确认要放弃更改并退出吗？'),
           h('span', null, '(点击确认后你有3s的反悔时间)')
         ]),
         showCancelButton: true,
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         beforeClose: (action, instance, done) => {
           if (action === 'confirm') {
             instance.confirmButtonLoading = true;
             instance.confirmButtonText = '执行中...';
             setTimeout(() => {
               done();
               setTimeout(() => {
                 instance.confirmButtonLoading = false;
               }, 300);
             }, 3000);
           } else {
             done();
           }
         }
       }).then(action => {
         this.$router.go(-1);
         this.$message({
           type: 'success',
           message: '退出成功'
         });
       });
     }
   }
 }
</script>
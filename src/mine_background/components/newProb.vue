<template>
  <div id="problem_manage"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="import">
        <section>
          <el-row>
            <el-col :span="6"><h1>引入题目</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="motherID" placeholder="直接引入母OJ题号吧！"></el-input></h1>
            </el-col>
          </el-row>
        </section>
        <section id="but" style="text-align: center;">
            <el-button type="primary" @click="handleImport">引入</el-button>
        </section>
      </section>

      <section id="newProb">
        <section id="name">
          <el-row>
            <el-col :span="6"><h1>题目名称</h1></el-col>
            <el-col :span="12">
              <h1><el-input v-model="name" placeholder="给我起一个好名字哦！"></el-input></h1>
            </el-col>
          </el-row>
        </section>
        
        <section id="ls">
          <el-row>
            <el-col :span="6"><h1>时间与内存限制</h1></el-col>
            <el-col :span="6">
              <h1><el-input v-model="tl" placeholder="选手最大运行多久程序呢？"></el-input></h1>
            </el-col>
            <el-col :span="6">
              <h1><el-input v-model="ml" placeholder="选手程序内存限制多少比较合适呢？"></el-input></h1>
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
                    v-for="typ in availableTypes" 
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

        <section id="power">
          <el-row>
            <el-col :span="6"><h1>规划选手权限</h1></el-col>
            <el-col :span="12">
              <h1>
                <el-row>
                  <el-checkbox-group v-model="typeOfLevel" v-for="level in Levels" :key="level">
                    <el-col :span='3'><el-checkbox :label="level"></el-checkbox></el-col>
                  </el-checkbox-group>
                </el-row>
              </h1>
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
       availableTypes: [
         {name: '传统型', value: '1'},
         {name: '提交答案型', value: '2'},
         {name: '交互型', value: '3'}
       ],
       Levels: ['普及', '提高', 'CQOI', 'NOI', '临时', '扩大', '测试'],
       motherID: '',
       tl: '', ml: '', name: '', type: '', desc: '',
       input_form: '', output_form: '', input: '', output: '', tips: '',
       typeOfLevel: []
     }
   },
   methods: {
     handleImport() {
       this.$http.post("http://localhost:8888", qs.stringify(motherID));
       tihs.$message("success");
       this.$router.go(-1);
     },
     handleSubmit() {
       var tl = this.tl, ml = this.ml;
       var name = this.name, type = this.type, desc = this.desc, input_form = this.input_form;
	     var output_form = this.output_form, input = this.input, output = this.output, tips = this.tips; 
       this.$http.post("http://localhost:8888",
        qs.stringify({name,type,desc,
                      input_form,output_form,input,output,tips}));
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
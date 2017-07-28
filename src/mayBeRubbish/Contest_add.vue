<template>
  <div id="contest_add"
        style="font-family: 'Arial', 'Microsoft YaHei';">
    <header>
      <nav>
        <el-menu id="topBar" 
                  style="background-color: rgb(176,31,224); color: white"
                  @select="handleSelect">
          <el-row type="flex" justify="start">
            <el-col :span="3">
              <el-menu-item>
                <img src="./assets/logo_3.png"></el-menu-item></el-col>
            <el-col><h1>添加比赛 Add Contests</h1></el-col>
          </el-row>
        </el-menu>
      </nav>
    </header>

    <article class="content-container"
              style="margin-top: 20px; margin-left: 80px; margin-right:80px;">
      <section id="rank">
        <section id="selection" style="text-style: bold;">
          <el-row type="flex" align="center">
            <el-col :span="6"><h1>使用以前的比赛</h1></el-col>
            <el-col :span="12">
              <h1>
                <el-radio-group v-model="typeBig" @change="handleClassChange">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="2">否</el-radio>
                </el-radio-group>
              </h1>
            </el-col>
          </el-row>
        </section>

        <section id="use-old" v-show="typeBig == 1">
          <el-row>
            <el-col :span="6"><h1>选择比赛</h1></el-col>
            <el-col :span="12">
              <h1>
                <el-select v-model="oldContest" filterable remote>
                </el-select>
              </h1>
              <p>若需要重新设置参数，请添加完比赛之后在比赛管理中进行定制</p>
            </el-col>
          </el-row>
        </section>
        
        <section id="use-new" v-show="typeBig == 2">
          <section id="name">
            <el-row>
              <el-col :span="6"><h1>比赛名称</h1></el-col>
              <el-col :span="12">
                <h1><el-input v-model="name" placeholder="请输入比赛名称"></el-input></h1>
              </el-col>
            </el-row>
          </section>
          <section id="prob">
            <el-row>
              <el-col :span="6"><h1>添加题目</h1></el-col>
              <el-col :span="12">
                <h2>从收藏夹获取
                  <el-select v-model="newProb" placeholder="只能一个一个选呢">
                    <el-option v-for="item in favorites" 
                                :key="item.number" :label="item.name" :value="item.number">
                    </el-option>
                  </el-select>
                </h2>
                <h2>或输入题号<el-input v-model="newProb" placeholder="于是，这里也只能输入一个题号呢"></el-input></h2>
                <h2>在BSContest，你甚至可以新建题目<el-button :plain="true" @click="makeProb">点击这里</el-button></h2>
                <el-button :plain="true" type="success" @click="addProb">添加题目</el-button>
                都请选择后单击按钮添加
                <section id="addedProbs"></section>
              </el-col>
            </el-row>
          </section>
          <section id="type">
            <el-row>
              <el-col :span="6"><h1>选择赛制</h1></el-col>
              <el-col :span="12">
                <h1>
                  <el-radio-group v-model="typeMatch" @change="handleTypeChange">
                    <el-radio :label="1">NOIP</el-radio>
                    <el-radio :label="2">省选</el-radio>
                    <el-radio :label="3">NOI</el-radio>
                    <el-radio :label="4">IOI</el-radio>
                    <el-radio :label="5">ACM</el-radio>
                  </el-radio-group>
                </h1>
              </el-col>
            </el-row>
          </section>
          <section id="power">
            <el-row>
              <el-col :span="6"><h1>规划选手权限</h1></el-col>
              <el-col :span="12">
                <h1>
                  <el-row>
                    <el-checkbox-group v-model="typeOfGrade" v-for="grade in Grades">
                      <el-col :span='3'><el-checkbox :label="grade"></el-checkbox></el-col>
                    </el-checkbox-group>
                  </el-row>
                  <el-row>
                    <el-checkbox-group v-model="typeOfLevel" v-for="level in Levels">
                      <el-col :span='3'><el-checkbox :label="level"></el-checkbox></el-col>
                    </el-checkbox-group>
                  </el-row>
                </h1>
              </el-col>
            </el-row>
          </section>
        </section>
        
        <section id="submit" style="text-align: center;">
          <el-button size="large" type="primary" @click="handleSubmit">提交</el-button>
          <el-button size="large" :plain="true" type="danger" @click="handleQuit">返回主页</el-button>
        </section>
      </section>
    </article>

  </div>
</template>

<script>
 export default{
   data() {
     return {
       typeBig: '0',
       typeMatch: '0',
       Grades: ['高2017', '高2018', '高2019', '高2020'],
       typeOfGrade: [],
       Levels: ['预备NOIP', '预备省队', '省队爷', '集训队爷', '国家队爷'],
       typeOfLevel: []
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     handleSubmit() {
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
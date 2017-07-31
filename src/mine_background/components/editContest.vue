<template>
  <div id="manage_edit"
        style="font-family: 'Arial', 'Microsoft YaHei';">
        <section id="use-new">
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
                <h2>
                  <el-row>
                    <el-col :span="12">从收藏夹获取</el-col>
                    <el-col :span="12">
                      <el-select v-model="newProb" placeholder="只能一个一个选呢">
                        <el-option v-for="item in favorites" 
                                  :key="item.number" :label="item.name" :value="item.number">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </h2>
                <h2>
                  <el-row>
                    <el-col :span="12">或输入题号</el-col>
                    <el-col :span="12">
                      <el-input v-model="newProb" 
                                placeholder="于是，这里也只能输入一个题号呢"></el-input>
                    </el-col>
                  </el-row>
                </h2>
                <h2>在BSContest，你甚至可以新建题目<el-button :plain="true" @click="makeProb">点击这里</el-button></h2>
                <el-button :plain="true" type="success" @click="addProb">添加题目</el-button>
                都请选择后单击按钮添加
                <section id="addedProbs">
                  <el-table :data="probs">
                    <el-table-column prop="id" label="题号" width="120"></el-table-column>
                    <el-table-column prop="name" label="名称" width="120"></el-table-column>
                    <el-table-column prop="tags" label="标签" width="120">
                      <template scope="scope" v-for="tag in tags">
                        <el-tag :key="tag" type="random">{{ tag }}</el-tag>
                      </template>
                    </el-table-column>
                  </el-table>
                </section>
              </el-col>
            </el-row>
          </section>
          <section id="type">
            <el-row>
              <el-col :span="6"><h1>选择赛制</h1></el-col>
              <el-col :span="12">
                <h1>
                  <el-radio-group v-model="typeMatch" @change="handleTypeChange">
                    <el-radio :label="1">比赛结束时评测</el-radio>
                    <el-radio :label="2">实时评测及排名(ACM)</el-radio>
                    <el-radio :label="3">实时评测及排名(IOI)</el-radio>
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
                    <el-checkbox-group v-model="typeOfLevel" v-for="level in Levels" :key="level">
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
          <el-button size="large" :plain="true" type="danger" @click="handleQuit">退出</el-button>
        </section>
      </section>
  </div>
</template>

<script>
 export default{
   data() {
     return {
       typeMatch: '0',
       newProb: '',
       probs: [],
       Levels: ['普及', '提高', 'CQOI', 'NOI', '临时', '扩大', '测试'],
       typeOfLevel: []
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     random() {
       return 'danger';
     },
     addProb() {
       var name, tags, newProb = this.newProb;
       this.$http.get("http://localhost:8888", qs.stringify(newProb))
         //newProb is the 'id', and we wanna get the 'name' and 'tag' 
         .then(function(response){
           name = response.data.name;
           tags = response.data.tags;
         })
         .catch(function(err){
           console.log(err);
         })
       this.probs.push({newProb, name, tags});// NOT sure whether adding an element to an array should be like what
     },
     handleSubmit() {
       if(this.typeMatch == 0) {
         this.$message({
           message: 'Match Type Required!',
           type: 'danger'
         });
         return ;
       }
       if(this.typeOfLevel == []) {
         this.$message({
           message: 'Level Required!',
           type: 'danger'
         });
         return ;
       }
       this.$http.post("http://localhost:8888",qs.stringify({this:probs,this:typeMatch,this:typeOfLevel}));
       //不知道为什么这里vsCode提示我使用':'来代替'.' 。。。 你试试是否可行？
       this.$message({
         message: 'Success!',
         type: 'success'
       });
       this.$router.push('/manageContest');
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
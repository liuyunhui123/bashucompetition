<template>
  <div id="contest_add"
        style="font-family: 'Arial', 'Microsoft YaHei';">

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
        </section>
      </section>

  </div>
</template>

<script>
 export default{
   data() {
     return {
       typeBig: '0',
       newProb: '',
       probs: '',
       typeMatch: '0',
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
       var name, tags;
       this.$http.get("http://localhost:8888", qs.stringify(this.newProb))
         //newProb is the 'id', and we wanna get the 'name' and 'tag' 
         .then(function(response){
           name = response.data.name;
           tags = response.data.tags;
         })
         .catch(function(err){
           console.log(err);
         })
       this.probs.push({id,name,tags});// NOT sure whether adding an element to an array should be like what
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
     }
   }
 }
</script>
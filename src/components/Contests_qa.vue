<template>
  <div id="contests_qa"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="q">
        <el-row>
          <el-col :span="3"><h2>提出问题</h2></el-col>
          <el-col :span="18">
            <el-input v-model="question" type="textarea" :rows="3" placeholder="请输入问题。"></el-input>
            <section style="margin-top: 10px; text-align: center;">
              <el-select v-model="q_probs" placeholder="请选择题目">
                <el-option 
                  v-for="item in probs" 
                  :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-button type="primary" @click="submitQuestion">发送</el-button>
            </section>
          </el-col>
        </el-row>
      </section>

      <section id="a" style="margin-top: 30px;">
        <el-row>
          <el-col :span="3"><h2>Q&A</h2></el-col>
          <el-col :span="18">
            <el-table :data="qaData" stripe border>
              <el-table-column type="expand">
                <template scope="props">
                  <el-row><p>{{props.row.answer}}</p></el-row>
                </template></el-table-column>
              <el-table-column prop="time" label="提问时间" width="180" sortable></el-table-column>
              <el-table-column prop="prob" label="题目" width="120" sortable></el-table-column>
              <el-table-column prop="author" label="提问者" width="180"></el-table-column>
              <el-table-column prop="question" label="问题"></el-table-column>
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
       probs: [
         {value: '1', label: '挑战NPC'},
         {value: '2', label: '论战捆竹竿'},
         {value: '3', label: '鏖战表达式'}
       ],
       question: '',
       q_prob: '',
       qaData: [
         {time: '+0s', prob: '1', author: 'liuyunhui123', question: '我做不来，你能教我做吗？', answer: '无可奉告！'},
         {time: '+1s', prob: '3', author: 'liuguangzhe', question: '你们交互库怎么写的！我10分钟写的都比你们快！', answer: '大神求种子！'}
       ]
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     submitQuestion() {
     }
   }
 }
</script>
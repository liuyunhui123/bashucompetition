<template>
  <div id="contests_submit"
        style="font-family: 'Arial', 'Microsoft YaHei';">

      <section id="so bad">
        <el-button @click="fresh">GetData</el-button>
      </section>
      <section id="history">
        <el-row><h1 style="text-align: left;">这是你的提交历史</h1></el-row>
        <el-table :data="history" border stripe>
          <el-table-column prop="submitTime" label="提交时间" width="180" sortable></el-table-column>
          <el-table-column prop="length" label="代码长度" width="180"></el-table-column>
          <el-table-column prop="lang" label="提交语言" width="180"></el-table-column>
          <el-table-column prop="memory" label="内存使用" width="180"></el-table-column>
          <el-table-column prop="runtime" label="运行时间" width="180"></el-table-column>
          <el-table-column prop="state" label="得分" width="180"></el-table-column>
        </el-table>
      </section>
      <section id="code-submit">
        <section id="code">
          <el-row style="text-align: left;"><h1>code</h1></el-row>
          <el-row><el-input v-model="code" type="textarea" :rows="20" placeholder="把代码交出来！"></el-input></el-row>
          <el-row type="flex" justify="center">
            <el-col style="text-align: right;"><p>或者你还可以提交本地文件</p></el-col>
            <el-col style="text-align: left;">
              <p>
              <el-upload action="" :on-success="handleSuccess" :on-remove="handleRemove">
                <el-button size="small" :plain="true">点击上传</el-button>
              </el-upload>
              </p>
            </el-col>
          </el-row>
        </section>
        <section id="language" style="text-align: left;">
          <el-row>
            <h1>
            language
            <el-select v-model="lang" placeholder="请选择你的程序的语言">
              <el-option 
                v-for="item in lans" 
                :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </h1>
          </el-row>
        </section>
        <section id="submit" style="text-align: center;">
          <p><el-button type="primary" size="large" @click="handleSubmit">提交</el-button></p>
        </section>
      </section>

  </div>
</template>

<script>
 export default{
   data() {
     return {
       lans: [
         {value: '1', label: 'C++'},
         {value: '2', label: 'C'},
         {value: '3', label: 'Pascal'}
       ],
       lang: '', code: '',
       uploaded: '0'
     };
   },
   methods: {
     fresh() {
       let _this = this;
       this.$http.get("http://localhost:8888", qs.stringify())
         .then(function(response){
           _this.results = response.data.results;
         })
         .catch(function(err){
           console.log(err);
         });
     },
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     handleSubmit() {
       if(uploaded == 1) {}//已上传本地文件
       else {this.$http.post("http://localhost:8888", qs.stringify({lang, code}));}
       this.$router.push('/result');
     },
     handleSuccess() {
       this.uploaded = 1;
     },
     handleRemove() {
       this.uploaded = 0;
     }
   }
 }
</script>
<template>
  <div id="register_page"
        style="font-family: 'Arial', 'Microsoft YaHei';">

    <article style="margin-top: 20px; margin-left: 80px; margin-right: 80px;">
      <el-form
        :model="form_reg" :rules="rules" 
        ref="form_reg" label-width="80px" >
        <el-form-item label="Username" prop="username">
          <el-col :span="6">
            <el-input 
              v-model="form_reg.username" placeholder="Please enter your username">
            </el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-col :span="6">
            <el-input
              type="password" v-model="form_reg.password"
              placeholder="Please input your password">
            </el-input>
          </el-col>
        </el-form-item>
        
        <el-form-item label="Check" prop="password_2">
          <el-col :span="6">
            <el-input
              type="password" v-model="form_reg.password_2"
              placeholder="Please input your password again">
            </el-input>
          </el-col>
        </el-form-item>
        
        <el-form-item>
          <el-button type=primary @click="submitPage(form_reg)">Submit</el-button>
          <el-button @click="handleQuit">Cancel</el-button>
        </el-form-item>

      </el-form>
    </article>
    
  </div>
</template>

<script>
export default {
  data() {
    var valiPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Enter your password again!'));
      } else if (value !== this.form_reg.password) {
        callback(new Error('Password NOT The Same'));
      } else {
        callback();
      }
    };
    return {
      form_reg: {
        username: '',
        password: '',
        password_2: ''
      },
      rules: {
        username: [
          { required: true, message: 'Username!', trigger: 'blur' },
          { min: 6, max: 20, message: 'Between 6 and 20 chars!!', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Password!', trigger: 'blur'}
        ],
        password_2: [
          { required: true, validator: valiPass, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitPage(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          alert('Submit!');
        } else {
          console.log('Error Submit!!');
          return false;
        }
      });
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
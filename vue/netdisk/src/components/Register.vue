<template>
  <Base1>
    <div class="header">注册</div>
    <form>
      <input type="text" v-model="username" @blur="checkUser" id="username" name="username" placeholder="username" class="input-item" onkeyup="this.value=this.value.replace(/[, ]/g,'')" required="required" autofocus="autofocus">
      <input type="password" v-model="password" @blur="checkPwd" id="password" name="password" placeholder="password" class="input-item" onkeyup="this.value=this.value.replace(/[, ]/g,'')" required="required">
      <input type="email" v-model="email" @blur="checkE" id="email" name="email" placeholder="email" class="input-item"
             onkeyup="this.value=this.value.replace(/[, ]/g,'')" required="required">
      <button @click="submit" name="bt_register" class="btn">Sign up</button>
    </form>
    <div>
      <button @click="toLogin" class="msg">Login in</button><br>
      <button @click="toHome" class="msg">Back</button>
    </div>
  </Base1>
</template>

<script>
import Base1 from '../widget/Base1'
export default {
  name: 'Register',
  components: {Base1},
  data () {
    return {
      username: '',
      password: '',
      email: '',
      validPwd: false, // 密码输入是否合法
      validE: false, // 邮箱输入是否合法
      validU: false // 用户名输入是否合法
    }
  },
  methods: {
    // 页面跳转
    toLogin () {
      this.$router.push('/login.html')
    },
    toHome () {
      this.$router.push('/')
    },
    // 输入长度检查
    checkUser () {
      if (this.username.length > 0 && this.username.length <= 2) {
        alert('用户名过短，请重新输入！')
        this.validU = false
      } else if (this.username.length > 20) {
        alert('用户名过长，请重新输入！')
        this.validU = false
      } else {
        this.validU = true
      }
    },
    checkPwd () {
      if (this.password.length > 0 && this.password.length < 6) {
        alert('密码过短，请重新输入！')
        this.validPwd = false
      } else if (this.password.length > 32) {
        alert('密码过长，请重新输入！')
        this.validPwd = false
      } else {
        this.validPwd = true
      }
    },
    checkE () {
      if (this.email.length > 32) {
        alert('邮箱过长，请重新输入！')
        this.validE = false
      } else {
        this.validE = true
      }
    },
    submit () {
      if (!this.validE) {
        alert('邮箱长度不合法，请重新输入')
      } else if (!this.validPwd) {
        alert('密码长度不合法，请重新输入')
      } else if (!this.validE) {
        alert('邮箱长度不合法，请重新输入')
      } else {
        this.$http({
          url: '/NetDisk/register', // TODO 有必要加NetDisk?
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          data: {
            password: this.password,
            email: this.email,
            username: this.username
          } // 传值
        }).then(res => {
          console.log('数据接收')
          console.log(res.data)
        })
      }
    }
  }
}
</script>
<style scoped>
.header{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item{
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item::placeholder {
  text-transform: uppercase;
}
.btn {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  width: 100%;
  margin-top: 30px;
  background-image: linear-gradient(to right, #c5f4ff, #fbc2eb);
  font-size: 1em;
}
.btn:hover {
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  width: 100%;
  margin-top: 30px;
  background-color: slategrey;
  background-image: linear-gradient(to right, #fbc2eb, #c5f4ff);
  font-size: 1em;
}
.msg {
  text-align: center;
  line-height: 40px;
  border: none;
  color: #a6c1ee;
  background-color: transparent;
  cursor: pointer;
  font-size: 17px;
}
</style>

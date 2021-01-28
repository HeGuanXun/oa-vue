<template>
  <div class="box" >
    <div id="content">
      <div class="loginItem">
          <img src="./../../assets/img/7.png" >
        </div>
      <div class="boxCenter myBorder">
        <p class="base_text text1">XXX集团信息化平台</p>
        <p class="base_text text2">Employee Center</p>
      </div>
      <div class="boxCenter">
        <el-form ref="form" :model="loginForm" :rules="fieldRules">
          <el-form-item prop="account">
            <el-input class="loginForm" v-model="loginForm.account" required placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="loginForm" v-model="loginForm.password" required placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="loginForm loginButton" @click="login('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="textFont">
      Copyright © www.xxx.com, All Rights Reserved.
    </div>
  </div>
</template>
<script>
import url from "api";
export default {
  name: "Login",
  data() {
    return {
      fieldRules: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: "blur"
          }
        ]
      },
      loading: false,
      loginForm: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push("home");
          this.loading = true;
          let login = {
            username: this.loginForm.account,
            password: this.loginForm.password,
          };
          this.$axios({
            method: "get",
            url: url.login,
            params: login
          }).then(res => {
            this.$router.push("home");
          }).catch(error => {
            this.$message.error('登录失败，请联系管理员');
            this.loading = false;
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 121, 254, 1);
  background-image: url("./../../assets/img/6.png");
  background-position: right top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-origin: border-box;
}
.loginForm{
  width: 320px;
  height: 50px;
}
.boxCenter{
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 6.5%;
  width:420px ;
  height: 580px;
  background-color: white;
  border-radius: 20px;
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
}
.myBorder{
  margin: 10px;
  flex-direction: column;
  height: 68px;
  width: 100% ;
  .base_text{
    margin: 0;
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
    font-weight: 700;
    color: #0079FE;
  }
  .text1{
    font-size: 24px;
  }
  .text2{
    font-size: 20px;
  }
}

.loginItem{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
  height: 100px;
  img{
    width: 85.5px;
    height: 72px;
  }
}
.textFont {
  margin-top: 180px;
  margin-bottom: 20px;
  font-family: '微软雅黑', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #cccccc;
  line-height: 24px;
}
.loginButton{
  font-size: 18px;
  color: #FFFFFF;
  background-color: rgba(0, 121, 254, 1);
}
</style>

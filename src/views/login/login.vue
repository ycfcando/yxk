<template>
  <div class="login">
    <div class="header">
      <img src="../../assets/icon/index/logo.png">
      <span>手机号注册/登录</span>
    </div>
    <input type="number" placeholder="请输入手机号" v-model="btnOpa">
    <div class="yzm">
      <input type="text" placeholder="请输入验证码" v-model="code">
      <span @click="getCode">获取验证码</span>
    </div>
    <button 
      :class="{act: btnOpa}" 
      @click="judgeNumber" 
      :disabled="btnOpa == ''"
    >
      一键注册/登录
    </button>
    <p>
      <span>非大陆手机号登录</span>
      <span>账号密码登录</span>
    </p>
  </div>
</template>

<script>
import { getYzm, login } from '../../utils/api';
export default {

  data() {
    return {
      btnOpa: '',
      code: ''
    }
  },

  methods: {
    async judgeNumber() {
      if(!/^1[3456789]\d{9}$/.test(this.btnOpa)) {
        alert('手机格式错误');
      } else {
        const obj = await login({
          phone: this.btnOpa,
          code: this.code
        });
        alert(obj.data.msg);
        console.log(obj.data);
        if(obj.data.status == '0') {
          this.$router.push('/mine/'+ obj.data.result.phone);
        }
      }
       
    },

    async getCode() {
      const obj = await getYzm({
        phone: this.btnOpa,
        templateId: '537707'
      });
      alert(obj.data.msg);
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  input::placeholder {
    color: #cdcdcd;
    font-size: 14px;
  }
  .header {
    height: 100px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 78px;
      height: 78px;
    }
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
  input[type='number'] {
    width: 325px;
    height: 44px;
    padding: 12px;
    background-color: hsla(0,0%,95%,.3);
    border-radius: 5px;
    margin-top: 18px;
  }
  .yzm {
    width: 325px;
    height: 44px;
    padding: 12px;
    background-color: hsla(0,0%,95%,.3);
    border-radius: 5px;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    input {
      width: 230px;
      height: 100%;
      background-color: hsla(0,0%,95%,.3);
    }
    span {
      font-size: 14px;
      color: #ecc927;
    }
  }
  button {
    width: 325px;
    height: 44px;
    border: none;
    background: linear-gradient(135deg,#ffed5c,#ffce06);
    color: #161616;
    font-size: 16px;
    margin-top: 18px;
    opacity: .2;
  }
  .act {
    opacity: 1;
  }
  > p {
    width: 325px;
    padding: 0 12px;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 13px;
      color: #aeaeae;
    }
  }
}
</style>
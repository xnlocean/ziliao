<template>
  <div>
    <canvas id="canvas"></canvas>
    <div id="login-from">
      <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
        <div class="title-container">
          <h3 class="title">登录</h3>
        </div>
        <el-form-item prop="username">
          <el-input name="username" :maxlength="11" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :maxlength="18" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
            placeholder="password" />
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import utils from './js/utils.js'
import Particle from './js/particles.js'
import Shape from './js/shape.js'

export default {
  name: 'login',
  props: {
    text: null
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      this.getList(this.loginForm.username)
      if (value.length > 12) {
        callback(new Error('用户名不能超过12位'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位数'))
      } else if (value.length > 18) {
        callback(new Error('密码不能超过18位数'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  mounted() {
    this.getList(this.loginForm.username)
  },
  methods: {
    getList(message) {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const W = canvas.width = window.innerWidth
      const H = canvas.height = window.innerHeight
      const gridY = 7
      const gridX = 7
      const type = 'ball'
      const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722'
      ]
      const word = new Shape(W / 2, H / 2, message, context, H, W, gridY, gridX, type, Particle, colors, utils)
      word.getValue();

      (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas)
        context.clearRect(0, 0, W, H)

        for (var i = 0; i < word.placement.length; i++) {
          word.placement[i].update()
        }
      }())
    },
    handleLogin() {
      console.log(111)
    }
  }
}
</script>
<style lang="less" scoped>
  @bg:#373838;
  @light_gray: #fff;
  div{
    #canvas{
        display: block;
        background-color: @bg;
    }
    #login-from{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        .login-form{
          width: 520px;
          .title-container{
            text-align: center;
            .title{
              margin-bottom:10px;
            }
          }
          .el-input{
            input {
              background: transparent;
              border: 1px solid #fff;
              -webkit-appearance: none;
              color: @light_gray;
              height: 40px;
              &:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px @bg inset !important;
                -webkit-text-fill-color: #fff !important;
              }
            }
          }
        }
        @media(max-width: 500px) {
          .login-form{
          width: 300px;
          .title-container{
            text-align: center
            }
          }
        }
    }
}
</style>



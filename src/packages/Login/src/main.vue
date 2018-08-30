<template>
  <div class="login-container">
     <canvas id="star"></canvas>
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <transition
        appear
        appear-class="title-appear"
        appear-to-class="appear-to"
        appear-active-class="appear-active">
        <h3 class="title">GLSX-VUE-ADMIN</h3>
       </transition>
      <gl-app-theme-picker v-on:@themeHandler="handleTheme" class="login-form-color-picker" :theme="theme.value" :predefineColors="theme.preDefineColors" />
      <transition
          appear
          appear-class="username-appear"
          appear-to-class="appear-to"
          appear-active-class="appear-active">
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <gl-svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
      </el-form-item>
      </transition>
      <transition
          appear
          appear-class="password-appear"
          appear-to-class="appear-to"
          appear-active-class="appear-active">
      <el-form-item prop="password">
        <span class="svg-container">
          <gl-svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="password" />
        <span class="show-pwd" @click="pwdType= !pwdType ? 'password' : ''">
          <gl-svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      </transition>
      <transition
          appear
          appear-class="login-appear"
          appear-to-class="appear-to"
          appear-active-class="appear-active">
      <el-form-item>
          <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
            登 录
          </el-button>
        
      </el-form-item>
      </transition>
      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div>
    </el-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { ConfigMixin, BeforeRoute } from '@/lib/mixins'
import GlAppThemePicker from '@/packages/ThemePicker'
import { GlConst, GlValidate } from 'glsx-vue-common'
const { isvalidUsername } = GlValidate
const { AppConst, HeaderConst } = GlConst
import Star from './stars'
export default {
  name: 'GlAppLogin',
  mixins: [ConfigMixin, BeforeRoute],
  components: {
    GlAppThemePicker
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      theme: {
        preDefineColors:
          this.$get_config_by_key(
            HeaderConst.Navbar.Theme.PreDefineColors.Key
          ) || '',
        value: this.$get_config_by_key(AppConst.DefaultColor.Key)
      },
      loading: false,
      pwdType: 'password',
      star: {
        instance: null,
        count: 120,
        id: 'star',
        lineColor: this.$get_config_by_key(AppConst.DefaultColor.Key) || 'red',
        mouseLineColor: 'red'
      }
    }
  },
  mounted() {
    this.$remove_session_config()
    this.runStar()
    this.RemoveAllViews()
  },
  beforeDestroy() {
    this.star.instance.clear()
  },
  methods: {
    ...mapActions([
      'Login',
      'RemoveAllViews',
      'Lt',
      'Check']),
    handleTheme(theme) {
      this.Set(AppConst.DefaultColor.Key, theme)
      this.star.lineColor = theme
      this.runStar()
    },
    runStar() {
      this.star.instance && this.star.instance.clear()
      this.star.instance = new Star(this.star.id, this.star.count, this.star.lineColor, this.star.mouseLineColor)
      this.star.instance.run()
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$remove_session_config()
          this.loading = true
          this.initConfig()
            .then(() => this.Lt())
            .then((lt) => {
              const params = this.$merge(this.loginForm, { lt, j_captcha_response: 8888, service: 'http://192.168.3.222/' })
              return this.Login({ params, v: this })
            })
            .then(ticket => this.GetResources({ ticket }))
            .then(() => {
              this.loading = false
              const query = this.$route.query
              this.$router.push({ path: '/home', query })
            }).catch(err => {
              this.$notify.error({
                title: '错误',
                message: err
              })
              this.loading = false
            })
        } else {
          this.loading = false
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    &-color-picker {
      position: absolute;
      right: 38px;
      top: 36px;
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
    // transform: translateY(-20px);
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .title-appear{
    transform: translateY(-50px);
  }
  .login-appear{
    transform: translateY(50px);
  }
  .username-appear{
    transform: translateX(50px);
  }
  .password-appear{
    transform: translateX(-50px);
  }
  .appear-active{
    transition: all .5s ease;
  }
  .appear-to{
    transform: translateY(0px);
    transform: translateX(0px);
  }
}
</style>
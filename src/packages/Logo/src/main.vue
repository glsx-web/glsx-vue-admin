<template>
    <h1 >
        <a :href="linkTo" :class="logoClass" :style="logoStyle">
        </a>
    </h1>
</template>

<script>
    export default {
      name: 'GlAppLogo',
      props: {
        className: {
          type: String
        },
        linkTo: {
          type: String,
          default: '/#/home/index'
        },
        width: {
          type: Number,
          default: 180
        },
        height: {
          type: Number,
          default: 50
        },
        backgroundColor: {
          type: String,
          default: 'transparent'
        },
        backgroundImage: {
          type: String,
          default: '/'
        }
      },
      computed: {
        logoClass() {
          return this.className || 'logo'
        },
        logoStyle() {
          return {
            height: this.height + 'px',
            width: '100%',
            backgroundColor: 'transparent',
            backgroundImage: 'url("' + this.backgroundImage + '")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }
        }
      }
    }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  h1{
    margin: 0;
    border-right: 1px solid rgba(255,255,255,.3);
    border-top: none;
    border-left: none;
   // box-shadow: inset 0 0 1px #000;
  }
  .logo{
    //background: $menuBg url('../../assets/logo.png') center center no-repeat ;
    position: relative;
    background-size: 70% 70%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-indent: -9999px;
    display: block;
      &:after{
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      overflow: hidden;
      z-index:9;
      /*背景渐变*/
      background: -moz-linear-gradient(to left,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
      background: -webkit-gradient(linear,left top,right top,color-stop(0%,rgba(255,255,255,0)),color-stop(50%,rgba(255,255,255,.3)),color-stop(100%,rgba(255,255,255,0)));
      background: -webkit-linear-gradient(to left,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
      background: -o-linear-gradient(to left,rgba(255,255,255,0) 0,rgba(255,255,255,.3)50%,rgba(255,255,255,0) 100%);
      background: linear-gradient(to left,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);
      -webkit-transform: skewX(-25deg);/*倾斜*/
      -moz-transform: skewX(-25deg);
      transform: skewX(-25deg);
      animation: lightflow 13s linear infinite;
  }
  }

  @keyframes lightflow {
    90%{
      left: -300px;  /*起始位置*/
    }
    100%{
      left: 300px; /*结束位置*/
    }
  }
</style>
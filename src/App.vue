<template>
  <div id="app">
    <router-view v-if="mobileScreen === true" v-bind:mob-screen="true"></router-view>
    <router-view v-if="mobileScreen === false"></router-view>
    <footer>
      <div v-if="mobileScreen === true" class="footer-mobile margin-sides l-spacing-sm">
        <div class="f-mobile-content-i">
          <h4>
            联系邮箱
            <span>info@youngtalent.cn</span>
          </h4>
          <h4>
            咨询电话
            <span>400-961-1108</span>
          </h4>
          <h4>
            总部地址
            <span>上海市静安区威海路696号</span>
          </h4>
        </div>
        <div class="f-mobile-content-l">
          <div class="qr-code-box">
            <div class="qr-code">
              <img src="./assets/navmenu/1Cassie-wechat-QRcode.png" alt="">
              <div class="qr-ctx">
                <h4>扫一扫</h4>
                <h4>联系专业导师</h4>
              </div>
            </div>
            <div class="qr-code">
              <img src="./assets/navmenu/2wechat--QRcode2.png" alt="">
              <div class="qr-ctx">
                <h4>扫一扫</h4>
                <h4>关注微信公众号 :</h4>
                <h4>youngtalentchina</h4>
              </div>
            </div>
          </div>
          <div class="icons-box">
            <div class="icon-img weibo">
              <a href="https://weibo.com/youngtalent" target="_blank"></a>
            </div>
            <div class="icon-img insta">
              <a href="https://www.instagram.com/youngtalentchina" target="_blank"></a>
            </div>
            <div class="icon-img douban">
              <a href="https://www.douban.com/people/young-talent" target="_blank"></a>
            </div>
            <div class="icon-img zhihu">
              <a href="https://www.zhihu.com/people/liu-chang-48-12/activities" target="_blank"></a>
            </div>
            <div onclick="void(0)" class="icon-img qq"></div>
            <div onclick="void(0)" class="icon-img wechat"></div>
          </div>
        </div>
      </div>
      <div class="margin-sides">
        <p class="footer-ctx l-spacing-sm">沪ICP备18024906号-1 Copyright © 2018 上海洋檀棱桃文化传播有限公司</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    mobScreen: Boolean
  },
  data () {
    return {
      mobileScreen: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
    this.msieversion()
  },
  methods: {
    getWindowWidth () {
      const windowWidth = document.documentElement.clientWidth;
      (windowWidth <= 550) ? this.mobileScreen = true : this.mobileScreen = false
    },
    msieversion () {
      const ua = window.navigator.userAgent
      const msie = ua.indexOf('MSIE')
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11./)) {
        alert('Internet explorer is not supported. Update browser version.')
      }
      return false
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'PingFang HK', 'Hiragino Sans GB', '冬青黑体', "Microsoft Yahei", "微软雅黑", 'STXihei', "华文细黑", 'SimHei', '黑体', 'Hei Ti', 'Helvetica neue', Helvetica, sans-serif
}

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  color: #000;
}

/* Multi-use classes */
.display-f {
  display: flex;
}
.display-n {
  display: none;
}

.d-flex-center {
  display: flex;
  justify-content: center;
}
.container {
  max-width: 1000px;
  width: 100%;
  z-index: 1;
}
.margin-sides {
  margin: 0 25px;
}
.shadow {
  box-shadow: 25px 15px 30px rgba(0, 0, 0, .05);
}
.p-text {
  font-size: 1rem;
  line-height: 1.4rem;
}
.mb-0 {
  margin-bottom: 0  !important;
}
.l-spacing-sm {
  letter-spacing: .5px;
}
/**/

footer {
  background: #fccd0f;
}
  .footer-ctx {
    color: #fefbef;
    font-size: 12px;
    padding: 18px 0;
    text-align: center;
    margin: 0 25px;
  }

  .f-mobile-content-i {
    width: 100%;
    text-align: left;
    background: #fccd0f;
    padding-top: 50px;
    margin-bottom: 35px;
  }
    .f-mobile-content-i > h4:first-child {
      margin: 0;
    }
    .f-mobile-content-i > h4 {
      font-size: 1.2rem;
      margin: 20px 0;
    }
      .f-mobile-content-i > h4 span {
        display: block;
        margin-top: 2px;
      }

  .f-mobile-content-l {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
  }
    .qr-code-box {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
      .qr-code {
        max-width: 175px;
      }
        .qr-code > img {
          display: block;
          max-width: 175px;
          width: 100%;
        }
        .qr-code .qr-ctx {
          text-align: center;
          margin: 15px 0;
        }
        .qr-code:last-child .qr-ctx {
          margin-bottom: 0;
        }
          .qr-ctx > h4 {
            font-size: 1rem;
            margin: 2px 0;
          }

    .icons-box {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 50%;
    }
      .icon-img {
        position: relative;
        max-width: 40px;
        width: 100%;
        padding-bottom: 40px;
        margin: 0 0 20px 10px;
      }
      .icon-img:hover {
        cursor: pointer;
      }
        .icon-img > a {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          text-decoration: none;
          background-color: transparent;
        }
      /* Icons backgrounds, :hover */
      .weibo {
        background: url("assets/navmenu/socialicons/weibo-icon-black.png") no-repeat center;
        background-size: 100%;
      }
      .weibo:hover {
        background: url("assets/navmenu/socialicons/weibo-icon-green.png") no-repeat center;
        background-size: 100%;
      }

      .insta {
        background: url("assets/navmenu/socialicons/insta-icon-black.png") no-repeat center;
        background-size: 100%;
      }
      .insta:hover {
        background: url("assets/navmenu/socialicons/insta-icon-green.png") no-repeat center;
        background-size: 100%;
      }

      .douban {
        background: url("assets/navmenu/socialicons/Douban-icon-black.png") no-repeat center;
        background-size: 100%;
      }
      .douban:hover {
        background: url("assets/navmenu/socialicons/Douban-icon-green.png") no-repeat center;
        background-size: 100%;
      }

      .zhihu {
        background: url("assets/navmenu/socialicons/zhihu-icon-black.png") no-repeat center;
        background-size: 100%;
      }
      .zhihu:hover {
        background: url("assets/navmenu/socialicons/zhihu-icon-green.png") no-repeat center;
        background-size: 100%;
      }

      .qq {
        background: url("assets/navmenu/socialicons/QQ-icon_black.png") no-repeat center;
        background-size: 100%;
      }
      .qq:hover {
        background: url("assets/navmenu/socialicons/QQ-icon-green.png") no-repeat center;
        background-size: 100%;
      }
        .qq::after,
        .wechat::after {
          content: '';
          display: block;
          position: absolute;
          right: 20px;
          bottom: -60px;
          width: 150px;
          height: 150px;
          transform: scale(0);
          transition: right ease-out 100ms,
          transform ease-out 100ms;
        }
        .qq::after {
          background: url("assets/navmenu/3QQ-qrcode-popup.png") no-repeat center;
          background-size: 100%;
        }
        .wechat::after {
          background: url("assets/navmenu/4wechat-qr-code-popup.png") no-repeat center;
          background-size: 100%;
        }
        .qq:hover:after,
        .wechat:hover:after {
          right: 65px;
          transform: scale(1);
        }

      .wechat {
        background: url("assets/navmenu/socialicons/wechat-icon-black.png") no-repeat center;
        background-size: 100%;
      }
      .wechat:hover {
        background: url("assets/navmenu/socialicons/wechat-icon-green.png") no-repeat center;
        background-size: 100%;
      }

@media (max-width: 550px){
  html {
    font-size: 12px;
  }
  .shadow {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  }
}

</style>

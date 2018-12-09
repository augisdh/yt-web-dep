<template>
  <div>
    <div class="menu-bar l-spacing-sm" :class="{'purple-bg': menuColor === 'purple', 'yellow-bg': menuColor === 'yellow', 'white-bg': menuColor === 'white'}">
      <div class="menu-fixed" :class="{'full-height menu-top': burgerActive === true, 'purple-bg': menuColor === 'purple', 'yellow-bg': menuColor === 'yellow', 'white-bg': menuColor === 'white'}">
        <div class="menu-home">
          <router-link to="/" data-color="purple"></router-link>
        </div>
        <div class="menu-burger">
          <img @click="burgerClick" :class="{'active': burgerActive !== true, 'inactive': burgerActive === true}" src="./assets/contactform/burger-icon.png" alt="">
          <img @click="burgerClick" :class="{'active': burgerActive === true, 'inactive': burgerActive !== true}" src="./assets/contactform/x-icon-blue.png" alt="">
        </div>

        <div class="menu-bg" :class="{'active-f': burgerActive === true, 'inactive': burgerActive !== true}">
          <div class="menu-ctx">
            <div class="menu-routes">
              <router-link to="/about" data-color="yellow">
                <h4>
                  关于洋桃
                  <span>ABOUT</span>
                </h4>
              </router-link>
              <router-link to="/courses" data-color="white">
                <h4>
                  洋桃课程
                  <span>COURSES</span>
                </h4>
              </router-link>
              <router-link to="/staff" data-color="white">
                <h4>
                  洋桃导师
                  <span>STAFF</span>
                </h4>
              </router-link>
              <router-link to="/art-major" data-color="white">
                <h4>
                  艺术专业
                  <span>ART MAJOR</span>
                </h4>
              </router-link>
              <router-link to="/universities" data-color="white">
                <h4>
                  艺术院校
                  <span>UNIVERSITIES</span>
                </h4>
              </router-link>
              <div @click="openContactForm" class="contact-link">
                <h4>
                  联系我们
                  <span>CONTACT US</span>
                </h4>
              </div>
            </div>
            <div v-if="mobileScreen !== true" class="menu-contact">
              <div class="contact-i">
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
              <div class="contact-qr">
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
                <div class="qr-box">
                  <div class="qr-code">
                    <img src="@/assets/navmenu/1Cassie-wechat-QRcode.png" alt="">
                    <div class="qr-ctx">
                      <h4>扫一扫</h4>
                      <h4>联系专业导师</h4>
                    </div>
                  </div>
                  <div class="qr-code">
                    <img src="@/assets/navmenu/2wechat--QRcode2.png" alt="">
                    <div class="qr-ctx">
                      <h4>扫一扫</h4>
                      <h4>关注微信公众号 :</h4>
                      <h4>youngtalentchina</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contactUsForm v-if="contactActive === true" @close_form="closeContactForm"></contactUsForm>
  </div>
</template>

<script>
import contactUsForm from './ContactUsForm'

export default {
  name: 'NavigationMenu',
  components: {
    contactUsForm
  },
  data () {
    return {
      mobileScreen: null,
      burgerActive: null,
      menuColor: '',
      contactActive: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.checkScreen)
      this.checkScreen()
      window.addEventListener('resize', this.navColor)
      window.addEventListener('scroll', this.navColor)
      this.navColor()
      this.routerActive()
    })
  },
  methods: {
    closeContactForm () {
      this.contactActive = false
    },
    openContactForm () {
      this.contactActive = true
      this.burgerActive = false
    },
    checkScreen () {
      (document.querySelector('.main-wrapper').getAttributeNode('mob-screen')) ? this.mobileScreen = true : this.mobileScreen = false
    },
    burgerClick () {
      (this.burgerActive === null) ? this.burgerActive = true : this.burgerActive = !this.burgerActive
    },
    routerActive () {
      if (document.querySelector('.menu-home a:not(.is-active)')) {
        document.querySelector('.is-active h4').classList.add('active-m')
        document.querySelector('.is-active h4 span').classList.add('active-m')
      }
    },
    navColor () {
      this.menuColor = document.querySelector('.is-active').dataset.color
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreen)
    window.removeEventListener('resize', this.navColor)
    window.removeEventListener('scroll', this.navColor)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inactive {
  display: none;
}
.active {
  display: block;
}
.active-f {
  display: flex;
}
.active-m {
  color: #23e8be;
}
.menu-top {
  z-index: 10;
}

.menu-bar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
  .menu-fixed {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .menu-home {
    position: relative;
    width: 40px;
    padding-bottom: 85px;
    background: url('./assets/contactform/young_talent_logo_cn_vertical_black.png') no-repeat center;
    background-size: 100%;
    margin-left: 70px;
  }
    .menu-home > a {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-decoration: none;
    }
  .menu-burger {
    margin-right: 70px;
    z-index: 15;
    justify-self: flex-end;
  }
  .menu-burger > img {
    width: 30px;
    height: auto;
    cursor: pointer;
  }

  .menu-bg {
    position: absolute;
    justify-content: flex-end;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
    .menu-ctx {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 900px;
      width: 0;
      height: 100%;
      margin-left: 50px;
      background-color: #fccd0f;
      animation: slideOut 500ms;
      animation-fill-mode: forwards;
      overflow-y: auto;
    }
    @keyframes slideOut {
      100% {
        width: 100%;
      }
    }
      .menu-routes {
        position: relative;
        max-width: 350px;
        height: 600px;
        width: 100%;
      }
        .menu-routes > a,
        .menu-routes > .contact-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          font-size: 2rem;
          text-align: left;
        }
        .menu-routes > .contact-link {
          cursor: pointer;
        }
        .menu-routes > a:hover,
        .menu-routes > .contact-link:hover {
          background-color: #23e8be;
        }
        .menu-routes > a:hover h4,
        .menu-routes > a:hover h4 span,
        .menu-routes > .contact-link:hover h4,
        .menu-routes > .contact-link:hover h4 span {
          color: #fff;
        }
          .menu-routes > a h4,
          .menu-routes > .contact-link h4 {
            margin: 15px 0;
          }
            .menu-routes > a h4 span,
            .menu-routes > .contact-link h4 span {
              display: block;
              font-size: 1rem;
            }
      .menu-contact {
        max-width: 200px;
        width: 100%;
        height: 600px;
        margin-right: 180px;
      }
        .contact-i {
          width: 100%;
          text-align: left;
          margin-bottom: 50px;
        }
          .contact-i > h4 {
            margin: 15px 0;
          }
            .contact-i > h4 span {
              display: block;
            }

        .contact-qr {
          display: flex;
          flex-direction: row;
        }
          .icons-box {
            align-items: flex-start;
          }
            .icon-img {
              margin: 0 10px 20px 0;
              background-size: 100%;
            }
              .qr-ctx > h4 {
                font-size: 0.75rem;
                margin: 2px 0;
              }

/* @Media */
@media (max-width: 1349px) {
  .purple-bg {
    background-color: #b046aa;
  }
  .yellow-bg {
    background-color: #fccd0f;
  }
  .white-bg {
    background-color: #fafafa;
  }
  .menu-bar {
    height: 75px;
  }
  .menu-fixed {
    height: 75px;
    align-items: flex-start;
    justify-content: center;
    z-index: 10;
  }
  .full-height {
    height: 100%;
    background-color: unset;
  }
  .menu-home {
    background: url('./assets/contactform/young_talent_black_logo_navigation_horizontal.png') no-repeat center;
    background-size: 100%;
    width: 60px;
    padding-bottom: 40px;
    margin-top: 15px;
    margin-right: 455px;
    margin-left: 0;
  }
  .menu-burger {
    margin-right: 0;
    margin-top: 22.5px;
    margin-left: 455px;
  }
}

@media (max-width: 1050px) {
  .menu-fixed {
    justify-content: space-between;
  }
  .menu-home {
    margin-right: 0;
    margin-left: 25px;
  }
  .menu-burger {
    margin-right: 25px;
    margin-left: 0;
  }
}

@media (max-width: 750px) {
  .menu-contact {
    margin-right: 90px;
  }
}

@media (max-height: 500px) {
  .menu-routes,
  .menu-contact {
    margin-top: 150px
  }
}

@media (max-width: 550px) {
  .menu-ctx {
    justify-content: center;
  }
    .menu-routes {
      height: 450px;
    }

  .menu-home {
    margin-top: 15px;
    width: 50px;
    padding-bottom: 45px
  }
  .menu-burger {
    margin-top: 25px;
  }
  .menu-burger > img {
    width: 25px;
  }
}
</style>

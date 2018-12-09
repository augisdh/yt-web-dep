<template>
  <div class="main-wrapper">
    <div class="staff-wrap l-spacing-sm">
      <navMenu></navMenu>
      <div class="staff-head">
        <img v-if="mobileScreen === false" src="./assets/staffpage/staff_background.jpg" alt="">
        <img v-if="mobileScreen === true" src="./assets/staffpage/staff_background_mobile.jpg" alt="">
      </div>
      <div class="staff-content-wrap d-flex-center">
        <div class="container margin-sides">
          <div class="acad-staff-wrap">
            <div class="acad-staff-box shadow">
              <div class="acad-staff-content">
                <h4>
                  艺术导师 (部分)
                  <span>ACADEMIC STAFF</span>
                </h4>
                <p class="p-text">
                  洋桃的导师团队均毕业于全球TOP5顶尖艺术院校，他们作为设计行业里的先锋人，
                  拥有十分优秀的辅导实力和口碑。而导师们更加丰富的行业实践经验和社会资源，
                  给学生们带来了更多在艺术设计领域崭露头角的机会，为学生实现梦想提供最前沿的平台。
                </p>
              </div>
              <div class="yellow-line"></div>
            </div>
          </div>
          <div class="p-staff-content-wrap">
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/1_Becca_Yang.jpg" alt="">
                <div class="hover-ctx blue">
                  <p class="p-text">
                    <span>
                      Wallpaper*杂志推荐<br>
                      全球最闪亮新锐设计师
                    </span>
                    <span>
                      法国顶级珠宝腕表<br>
                      CHAUMET合作设计师
                    </span>
                    <span>
                      伯明翰皇家艺术协会授予<br>
                      “创意革新奖章”
                    </span>
                    <span>
                      作品刊登于杂志<br>
                      《Wallpaper*》、<br>
                      《Wallpaper*卷宗》、<br>
                      《Kaltblut》等
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-blue"></div>
              </div>
              <div class="person-ctx">
                <h5>Becca Y</h5>
                <p class="p-text">
                  时尚/珠宝科系教研评审导师
                </p>
                <p class="p-text">
                  中央圣马丁艺术与设计学院<br>
                  荣誉硕士<br>
                  伯明翰珠宝学院<br>
                  荣誉学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/2_Fred_Liu.jpg" alt="">
                <div class="hover-ctx purple">
                  <p class="p-text">
                    <span>
                      Finalist of Reddot Design <br>
                      Award 2014 红点奖
                    </span>
                    <span>
                      英国德比皇家医院医疗项目<br>
                      合作设计师
                    </span>
                    <span>
                      原金伯利钻石集团高级<br>
                      产品设计师
                    </span>
                    <span>
                      全球500强产品设计行业<br>
                      资深设计师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-purple"></div>
              </div>
              <div class="person-ctx">
                <h5>Fred L</h5>
                <p class="p-text">
                  工业/交互科系教研评审导师
                </p>
                <p class="p-text">
                  拉夫堡大学荣誉硕士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/3_Cassie_M.jpg" alt="">
                <div class="hover-ctx yellow">
                  <p class="p-text">
                    <span>
                      艺术作品集领域资深导师 <br>
                      累计辅导学生数量100+<br>
                      100% Offer录取率
                    </span>
                    <span>
                      多名TOP 3院校录取案例<br>
                      (英国CSM、UAL;美国<br>
                      PARSONS、SVA等)
                    </span>
                    <span>
                      欧莱雅合作品牌运营策划
                    </span>
                    <span>
                      曾任职于4A
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-yellow"></div>
              </div>
              <div class="person-ctx">
                <h5>Cassie M</h5>
                <p class="p-text">
                  视觉传达科系教研评审导师
                </p>
                <p class="p-text">
                  伯明翰艺术与设计学院<br>
                  荣誉硕士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/4_Bell_Z.jpg" alt="">
                <div class="hover-ctx blue">
                  <p class="p-text">
                    <span>
                      《海上良宵》导演及制片，<br>
                      入围里斯本电影节、圣 保罗<br>
                      国际短片电影节、洛杉矶亚太<br>
                      平洋电影节等<br>
                      《地球最后的夜晚》<br>执行导演
                      ，入围第71届戛纳国际电影节<br>
                      《少女哪吒》入围2014年釜<br>
                      山国际电影节<br>
                      2014年台湾金马奖最佳新导<br>
                      演提名
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-blue"></div>
              </div>
              <div class="person-ctx">
                <h5>Bell Z</h5>
                <p class="p-text">
                  影视科系教研评审导师
                </p>
                <p class="p-text">
                  纽约大学Tisch学院<br>
                  硕士<br>
                  清华大学哲学系<br>
                  学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/5_Ying_W.jpg" alt="">
                <div class="hover-ctx purple">
                  <p class="p-text">
                    <span>
                      英国国家歌剧院背景艺术家<br>
                      与合成师
                    </span>
                    <span>
                      英国皇家阿尔伯特音乐厅<br>
                      动画师
                    </span>
                    <span>
                      伦敦疾病博物馆三维动画影片<br>
                      制作人
                    </span>
                    <span>
                      Intagrow Ltd、Prestige<br>
                      Arts Club等合作设计师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-purple"></div>
              </div>
              <div class="person-ctx">
                <h5>Ying W （台湾）</h5>
                <p class="p-text">
                  动画科系教研评审导师
                </p>
                <p class="p-text">
                  德蒙福特大学VR实践教学<br>
                  博士<br>
                  中央圣马丁艺术与设计学院<br>
                  荣誉硕士和学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/6_Jane_L.jpg" alt="">
                <div class="hover-ctx yellow">
                  <p class="p-text">
                    <span>
                      DONGYA Furniture<br>
                      设计总监
                    </span>
                    <span>
                      英国Nova Award设计大奖入<br>
                      围设计师
                    </span>
                    <span>
                      作品参展伦敦设计周等
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-yellow"></div>
              </div>
              <div class="person-ctx">
                <h5>Jane L</h5>
                <p class="p-text">
                  家具科系教研评审导师
                </p>
                <p class="p-text">
                  中央圣马丁艺术与设计学院<br>
                  硕士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/7_Lisha_A.jpg" alt="">
                <div class="hover-ctx blue">
                  <p class="p-text">
                    <span>
                      曾任职于伦敦Vine建筑设计<br>
                      事务所、MAD等
                    </span>
                    <span>
                      北海道别墅、崔健私人别墅<br>
                      合作设计师
                    </span>
                    <span>
                      参与设计Roca北京艺术廊、<br>
                      百子湾住宅小区等建筑项目
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-blue"></div>
              </div>
              <div class="person-ctx">
                <h5>Lisha A</h5>
                <p class="p-text">
                  建筑/室内科系教研评审导师
                </p>
                <p class="p-text">
                  中央圣马丁艺术与设计学院<br>
                  荣誉学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/8_Encore_Z.jpg" alt="">
                <div class="hover-ctx purple">
                  <p class="p-text">
                    <span>
                      雕塑系列作品中国巡展
                    </span>
                    <span>
                      艺术作品集元老级资深导师<br>
                      100% Offer录取率
                    </span>
                    <span>
                      每年至少有一名座下学生被<br>
                      美国罗德岛录取
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-purple"></div>
              </div>
              <div class="person-ctx">
                <h5>Encore Z</h5>
                <p class="p-text">
                  纯艺/插画科系教研评审导师
                </p>
                <p class="p-text">
                  罗德岛设计学院Fine arts专业<br>
                  上海美术学院雕塑系
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/9_Liang.jpg" alt="">
                <div class="hover-ctx yellow">
                  <p class="p-text">
                    <span>
                      擅长VR研究
                    </span>
                    <span>
                      BAT公司多年任职经验
                    </span>
                    <span>
                      iF Concept Design Award<br>
                      2013 IF设计大奖
                    </span>
                    <span>
                      Finalist of Reddot Design<br>
                      Award 2013 红点奖
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-yellow"></div>
              </div>
              <div class="person-ctx">
                <h5>Liang</h5>
                <p class="p-text">
                  工业设计师/交互设计师
                </p>
                <p class="p-text">
                  英国伦敦玛丽女王大学<br>
                  博士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/10_Echo_Y.jpg" alt="">
                <div class="hover-ctx blue">
                  <p class="p-text">
                    <span>
                      EstherJewelry珠宝品牌<br>
                      创始人
                    </span>
                    <span>
                      “芭莎珠宝高级珠宝年度设计大赏”年度杰出珠宝设计奖
                    </span>
                    <span>
                      第五届中国国际珠宝首饰设计<br>
                      大赛专业组优秀奖
                    </span>
                    <span>
                      MIC创意大师国际珠宝首饰设计大赛入围设计师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-blue"></div>
              </div>
              <div class="person-ctx">
                <h5>Echo Y</h5>
                <p class="p-text">
                  珠宝设计师/GIC手绘师
                </p>
                <p class="p-text">
                  伯明翰珠宝学院<br>
                  硕士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/11_Carrie_T.jpg" alt="">
                <div class="hover-ctx purple">
                  <p class="p-text">
                    <span>
                      英、美、日等12年以上行业<br>
                      经验
                    </span>
                    <span>
                      Instagram插画自媒体KOL
                    </span>
                    <span>
                      Albion Knitting, House of Donnelly, Hand&Lock等合<br>
                      作设计师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-purple"></div>
              </div>
              <div class="person-ctx">
                <h5>Carrie T (美国)</h5>
                <p class="p-text">
                  服装设计师/插画师
                </p>
                <p class="p-text">
                  中央圣马丁艺术与设计学院<br>
                  荣誉学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/12_Missy_C.jpg" alt="">
                <div class="hover-ctx yellow">
                  <p class="p-text">
                    <span>
                      现任奇瑞汽车股份有限公司<br>
                      HMI工程师
                    </span>
                    <span>
                      原文思海辉技术UX团队高级<br>
                      用户体验设计师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-yellow"></div>
              </div>
              <div class="person-ctx">
                <h5>Missy C</h5>
                <p class="p-text">
                  高级用户体验设计师
                </p>
                <p class="p-text">
                  拉夫堡大学<br>
                  硕士<br>
                  中国美术学院<br>
                  学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/13_Jiayin_L.jpg" alt="">
                <div class="hover-ctx blue">
                  <p class="p-text">
                    <span>
                      翟倚卫玉雕首席合作设计师
                    </span>
                    <span>
                      叶明子工作室合作设计师
                    </span>
                    <span>
                      UBI新锐大奖入围设计师
                    </span>
                    <span>
                      作品参展上海时装周、<br>
                      北京设计周等
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-blue"></div>
              </div>
              <div class="person-ctx">
                <h5>Jiayin L</h5>
                <p class="p-text">
                  珠宝设计师/IGI精钻鉴定师
                </p>
                <p class="p-text">
                  中央圣马丁艺术与设计学院<br>
                  荣誉硕士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/14_Sunny_C.jpg" alt="">
                <div class="hover-ctx purple">
                  <p class="p-text">
                    <span>
                      现任周大福高级珠宝设计师
                    </span>
                    <span>
                      Fannie Schiavoni, Noemi Klein, Salvation Army合作<br>
                      设计师
                    </span>
                    <span>
                      英国Pewter Live<br>
                      Competition大赛银奖获得者
                    </span>
                    <span>
                      作品参展英国V&A博物馆等
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-purple"></div>
              </div>
              <div class="person-ctx">
                <h5>Sunny C</h5>
                <p class="p-text">
                  珠宝设计师
                </p>
                <p class="p-text">
                  中央圣马丁艺术与设计学院<br>
                  硕士<br>
                  伦敦时装学院<br>
                  荣誉学士
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/15_Michael_Z.jpg" alt="">
                <div class="hover-ctx yellow">
                  <p class="p-text">
                    <span>
                      多年影像视觉行业从业经验
                    </span>
                    <span>
                      曾任职于全球第二大商业图片库Corbis Images
                    </span>
                    <span>
                      佳能展厅讲师<br>
                      Getty Images US
                    </span>
                    <span>
                      签约摄影师<br>
                      视觉中国签约摄影师<br>
                      东方IC签约摄影师<br>
                      Oppo手机合作摄影师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-yellow"></div>
              </div>
              <div class="person-ctx">
                <h5>Michael Z</h5>
                <p class="p-text">
                  资深摄影师
                </p>
                <p class="p-text">
                  中国摄影师协会会员
                </p>
              </div>
            </div>
            <div class="person-box shadow">
              <div onclick="void(0)" class="person-img">
                <img src="./assets/staffpage/16_Jojo_Z.jpg" alt="">
                <div class="hover-ctx blue">
                  <p class="p-text">
                    <span>
                      Snapchat个性化表情包<br>
                      合作设计师
                    </span>
                    <span>
                      《仙剑奇侠传》游戏卡牌<br>
                      色设计师
                    </span>
                  </p>
                </div>
                <div v-if="mobileScreen === true" class="plus-symb plus-blue"></div>
              </div>
              <div class="person-ctx">
                <h5>Jojo Z (加拿大) </h5>
                <p class="p-text">
                  动画设计师/插画师
                </p>
                <p class="p-text">
                  加拿大谢尔丹学院<br>
                  动画研究生
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navMenu from './NavigationMenu'

export default {
  name: 'StaffPage',
  components: {
    navMenu
  },
  data () {
    return {
      mobileScreen: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.checkScreen)
      this.checkScreen()
      window.addEventListener('resize', this.changeStaffDivHeight)
      this.changeStaffDivHeight()
    })
  },
  methods: {
    checkScreen () {
      (document.querySelector('.main-wrapper').getAttributeNode('mob-screen')) ? this.mobileScreen = true : this.mobileScreen = false
    },
    changeStaffDivHeight () {
      (window.innerWidth < 1150) ? document.querySelector('.acad-staff-wrap').style.height = `${document.querySelector('.acad-staff-box').offsetTop + document.querySelector('.acad-staff-box').offsetHeight}px` : document.querySelector('.acad-staff-wrap').removeAttribute('style')
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreen)
    window.removeEventListener('resize', this.changeStaffDivHeight)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.staff-wrap {
  background-color: #fafafa;
}

.staff-head {
  width: 100%;
}
  .staff-head > img {
    display: block;
    width: 100%;
  }

  .acad-staff-wrap {
    position: relative;
    margin-bottom: 50px;
  }
    .acad-staff-box {
      position: absolute;
      top: -400px;
      max-width: 500px;
      width: 100%;
      background-color: #fff;
    }
      .acad-staff-content {
        margin: 50px 50px 20px 50px;
        text-align: left;
      }
        .acad-staff-content > h4 {
          margin: 0 0 50px 0;
          font-size: 2.25rem;
          line-height: 1.7rem;
        }
          .acad-staff-content > h4 span {
            display: block;
            font-size: 1rem;
          }
        .acad-staff-content .p-text {
          margin: 0;
        }

  .p-staff-content-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
  }
    .person-box {
      max-width: 225px;
      width: 100%;
      background-color: #fff;
      margin: 0 12.5px 50px 12.5px;
    }
      .person-img {
        position: relative;
        width: 100%;
      }
      .person-img:hover .hover-ctx {
        opacity: 0.9;
        z-index: 5;
      }
        .person-img > img {
          display: block;
          width: 100%;
        }
        .hover-ctx {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          text-align: left;
          opacity: 0;
          transition: 250ms;
        }
          .hover-ctx .p-text {
            font-size: 13px;
            margin: 12.5px;
          }
            .hover-ctx .p-text span {
              display: block;
              line-height: 18px;
              letter-spacing: 1.5px;
              margin-bottom: 7px;
              color: #fff;
            }
      .person-ctx {
        margin: 25px;
        text-align: left;
      }
        .person-ctx > h5 {
          margin: 0;
          font-size: 18px;
        }
        .person-ctx .p-text {
          font-size: 13px;
          letter-spacing: 0;
          margin-top: 13px;
          line-height: 1rem;
        }

/* Lines, etc... */
.yellow-line {
  width: 100px;
  height: 5px;
  float: right;
  margin-bottom: 50px;
  background-color: #fccd0f;
}
.plus-symb {
  position: absolute;
  left: 25px;
  bottom: 25px;
  width: 30px;
  height: 30px;
}
.plus-blue {
  background: url(./assets/contactform/plus-symb-blue.png) no-repeat center;
  background-size: cover;
}
.plus-yellow {
  background: url(./assets/contactform/plus-symb-yellow.png) no-repeat center;
  background-size: cover;
}
.plus-purple {
  background: url(./assets/contactform/plus-symb-purple.png) no-repeat center;
  background-size: cover;
}
.blue {
  background-color: #23d5af;
}
.purple {
  background-color: #ae4ea9;
}
.yellow {
  background-color: #fccd0f;
}

/* @Media */
@media (max-width: 1349px) {
  .staff-wrap {
    padding-top: 75px;
  }
}

@media (max-width: 1149px) {
  .acad-staff-box {
    top: -275px;
  }
}

@media (max-width: 849px) {
  .acad-staff-box {
    top: -25px;
  }
}

@media (max-width: 550px) {
  .staff-wrap {
    padding-top: 75px;
  }
  .acad-staff-wrap {
    margin-bottom: 25px;
  }
    .acad-staff-content {
      margin: 25px 25px 25px 25px;
      text-align: left;
    }
        .acad-staff-content > h4 {
          margin-bottom: 25px;
        }
  .p-staff-content-wrap {
    margin-bottom: 50px;
  }
    .person-box {
      max-width: 270px;
      margin: 0 0 25px 0;
    }
      .hover-ctx .p-text {
        margin: 25px;
      }
    .person-ctx .p-text {
      line-height: 1.4rem;
    }
  /* Lines */
  .yellow-line {
    width: 50px;
    margin: 0 25px 25px 0;
  }
}
</style>

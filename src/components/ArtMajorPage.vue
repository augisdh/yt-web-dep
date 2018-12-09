<template>
  <div class="main-wrapper">
    <div class="disc-wrap l-spacing-sm">
      <navMenu></navMenu>
      <div class="disc-head">
        <img v-if="mobileScreen === false" src="./assets/disciplinespage/pattern_bg.jpg" alt="">
        <img v-if="mobileScreen === true" src="./assets/disciplinespage/pattern_bg_mobile.jpg" alt="">
      </div>
      <div class="disc-content-wrap d-flex-center">
        <div class="container margin-sides">
          <div class="expl-sub-wrap">
            <div class="expl-sub-box shadow">
              <div class="expl-sub-content">
                <h4>
                  艺术专业
                  <span>EXPLORE SUBJECTS</span>
                </h4>
                <p class="p-text">
                  欧美顶级院校专业基础课程完美呈现，针对创意思维的能力进行强化突击训练。
                  洋桃独家研发， 整个启蒙单元在不耗费过多作品集准备时间的前提下，以跨专业的项目实践为载体，
                  全程一对一 辅导，帮助学员切实掌握顶尖设计师必备的思维方法，及空间抽取、叙事表达、
                  同感联想、解构 意识、高语言重塑等进阶设计思维技巧。
                </p>
              </div>
              <div class="purple-line"></div>
            </div>
          </div>
          <div class="disc-sub-content-wrap">
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/graphic_design.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      平面设计
                      <span>GRAPHIC DESIGN</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text h-96">
                      平面设计，是以视觉意象作为沟通和表现的方式，加以文字、 透过多种方式来结合符号、图片，
                      借此作出用来传达想法或讯息的视觉表现。在精神文化领域以其独特的艺术魅力影响着人们的日常生活。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      平面设计涉及面非常广泛且发展极为迅速。随着IT软件的开发量越来越大，
                      对于界面设计人员的需求则更为突出，尤其是对于既懂编程又懂界面设计的复合性人才更是情有独钟。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img class="w-85" src="./assets/disciplinespage/industrial-design.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      工业设计
                      <span class="green">INDUSTRIAL DESIGN</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text h-96">
                      工业设计是指以工学、美学、经济学为基础的，对工业产品进行设计的学科。工业发展和劳动分工所带来的工业设计，
                      与其他艺术、生产活动、工艺制作等都有明显不同，它是各种学科、技术和审美观念的交叉产物。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      该专业学生毕业后就业范围广泛，可以到产品设计、室内外环境与设施设计、产品包装、广告设计、平面设计、
                      陈设设计、产品研发等公司、建筑设计研究院（所）或相关企业中从事设计、科研和管理工作。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/jewellery_design.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      珠宝设计
                      <span class="purple">JEWELLERY DESIGN</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text h-96">
                      珠宝设计主要是培养学生通过加工宝石、其他石材和贵金属艺术作品，从创造性和技术性上去表达情感、思想或内在愿景。
                      包括宝石学、金属着色、上釉、光蚀刻、宝石技巧和艺术、设计理念和个人风格发展。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      随着珠宝业的迅速发展，目前我国对珠宝设计师的需求正处于上升趋势，一般的工作单位都在各大珠宝公司，珠宝设计院。<br>
                      另外，发式、服装等公司也在自己的产品中加进了珠宝等贵重物品的元素，因此这些领域也为珠宝设计师提供了发展空间。
                      珠宝设计的高端人才稀缺，不仅是传统的珠宝企业需要，现在做流行饰品的公司也需要。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/interaction_design.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      交互设计
                      <span>INTERACTION DESIGN</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text h-96">
                      交互设计，是定义、设计人造系统的行为的设计领域。人造物，即人工制成物品，
                      例如软件、移动设备、人造环境、服务、可佩带装置以及系统的组织结构。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      随着近年来互联网的火热，交互设计师应时而生，用户界面设计属于高新技术设计产业，
                      国内外大量缺少符合此专业的交互设计人才，像国内外众多大型IT企业(例如：微软、腾讯、百度、
                      中国移动、网易、盛大、淘宝等众多企业)更是对其供不应求，再者互联网工资普遍比较高，交互设计师在未来的就业前景还是非常好的。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/photography.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      摄影
                      <span class="green">PHOTOGRAPHY</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text">
                      摄影专业培养广泛的科学文化和艺术理论知识，具备电影、电视、广告、图片摄影摄像能力。在电影厂、
                      电视制作部门、广告宣传部门、音像出版部门从事摄影艺术创作、教学和研究工作的高级专业人才。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      国内外各大发布会、时尚T台走秀、高端摄影的工作室，都离不开摄影师的身影。
                      摄影师的需求量随之也越来越大，摄影业在不断的高速发展。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/film.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      影视制作
                      <span class="purple">FILM</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text">
                      电影电视媒体已经成为当前最为大众化，最具影响力的
                      媒体形式。从好莱坞电影所创造的幻想世界，到电视新闻所关注的现实生活，到铺天盖地的电视广告，无不深刻的影响着我们的世界。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      中国的影视制作正在快速发展，目前市场需求量逐年加大，每年电影、电视的拍摄、大量广告、
                      宣传片、纪录片、专题片甚至新闻节目等，都离不开影视制作人员，已经形成比较可观的市场规模。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/visual_communication.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      视觉传达
                      <span>VISUAL COMMUNICATION</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text">
                      以“视觉”作为沟通和表现的方式。透过多种多样的方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉表现。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      随着科技的发展，媒体发生了巨大变化，现有两大视觉媒体，印刷出版物媒体与信息互联网媒体。人与人之间需要信息传递。
                      通过色彩、文字、图形、形态手段在视觉媒体中传递信息、理念和商业行为，从而达到促销、展示、认知等作用，因此这方面的人才显得越来越重要。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc-sub-box shadow">
              <div class="sub-content">
                <div class="sub-head">
                  <img src="./assets/disciplinespage/animation.png" alt="">
                  <div class="sub-head-text">
                    <h4>
                      动画
                      <span class="green">ANIMATION</span>
                    </h4>
                  </div>
                </div>
                <div class="sub-ctx-box">
                  <div class="sub-ctx">
                    <h5>
                      专业介绍
                      <span>INTRODUCTION</span>
                    </h5>
                    <p class="p-text">
                      动画专业属于艺术学中的戏剧与影视学类，是一种综合艺术门类。它是集合了绘画、
                      漫画、电影、数字媒体、摄影、音乐、文学等众多艺术门类于一身的艺术表现形式。
                    </p>
                  </div>
                  <div class="sub-ctx">
                    <h5>
                      就业前景
                      <span>EMPLOYMENT PROSPECTS</span>
                    </h5>
                    <p class="p-text">
                      中国动漫产业巨大的市场被外国动漫产品所占领，原因是国内动漫人才的奇缺。
                      动画设计除了在传统意义上的动画片制作上，现在也被广泛运用在视觉传播和广告行业。
                    </p>
                  </div>
                </div>
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
  name: 'ArtMajorPage',
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
      window.addEventListener('resize', this.changeExplDivHeight)
      this.changeExplDivHeight()
    })
  },
  methods: {
    checkScreen () {
      (document.querySelector('.main-wrapper').getAttributeNode('mob-screen')) ? this.mobileScreen = true : this.mobileScreen = false
    },
    changeExplDivHeight () {
      (window.innerWidth < 1150) ? document.querySelector('.expl-sub-wrap').style.height = `${document.querySelector('.expl-sub-box').offsetTop + document.querySelector('.expl-sub-box').offsetHeight}px` : document.querySelector('.expl-sub-wrap').removeAttribute('style')
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreen)
    window.removeEventListener('resize', this.changeExplDivHeight)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.disc-wrap {
  background-color: #fafafa;
}

.disc-head {
  width: 100%;
}
  .disc-head > img {
    display: block;
    width: 100%;
  }

  .expl-sub-wrap {
    position: relative;
    margin-bottom: 50px;
  }
    .expl-sub-box {
      position: absolute;
      top: -375px;
      width: 100%;
      background-color: #fff;
    }
      .expl-sub-content {
        margin: 50px;
        text-align: left;
      }
        .expl-sub-content > h4 {
          margin: 0 0 50px 0;
          font-size: 2.25rem;
          line-height: 1.7rem;
        }
          .expl-sub-content > h4 span {
            display: block;
            font-size: 1rem;
          }
        .expl-sub-content .p-text {
          margin: 0;
        }

  .disc-sub-content-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
  }
    .disc-sub-box {
      max-width: 487.5px;
      width: 100%;
      height: auto;
      background-color: #fff;
      margin-bottom: 50px;
    }
    .disc-sub-box:nth-child(odd) {
      margin-right: 12.5px;
    }
    .disc-sub-box:nth-child(even) {
      margin-left: 12.5px;
    }
      .sub-content {
        margin: 50px;
        text-align: left;
      }

    /* Disciplines subject HEAD */
    .sub-head {
      display: flex;
      flex-direction: row;
      margin-bottom: 50px;
    }
      .sub-head > img {
        display: block;
        width: 100px;
      }
      .sub-head > .w-85 {
        width: 85px;
      }
      .sub-head-text {
        margin-left: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
        .sub-head-text > h4 {
          font-size: 36px;
          line-height: 1.7rem;
          margin: 0;
        }
          .sub-head-text > h4 span {
            display: block;
            font-size: 1rem;
            color: #fccd0f;
          }
    /* Disciplines subject CONTENT */
    .sub-ctx-box {
      display: flex;
      flex-direction: column;
    }
      .sub-ctx {
        margin: 0;
      }
      .sub-ctx:first-child {
        margin-bottom: 50px;
      }
        .sub-ctx > h5 {
          margin: 0 0 10px 0;
          font-size: 1rem;
        }
          .sub-ctx > h5 span {
            display: block;
          }
        .sub-ctx .p-text {
          margin: 0;
        }

.h-96 {
  height: 96px;
}

/* Lines, etc */
.purple-line {
  width: 100px;
  height: 5px;
  float: right;
  margin: 0 50px 45px 0;
  background-color: #ae4ea9;
}
.sub-head-text > h4 .green {
  color: #40ebc7;
}
.sub-head-text > h4 .purple {
  color: #ae4ea9;
}
/* @Media */
@media (max-width: 1349px) {
  .disc-wrap {
    padding-top: 75px;
  }
}

@media (max-width: 1049px) {
  .expl-sub-box {
    top: -125px;
  }
  .disc-sub-box:nth-child(odd),
  .disc-sub-box:nth-child(even) {
    margin-left: 12.5px;
    margin-right: 12.5px;
  }
  .h-96 {
    height: auto;
  }
}

@media (max-width: 1024px) {
  .disc-sub-box:nth-child(odd),
  .disc-sub-box:nth-child(even) {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 550px) {
  .disc-wrap {
    padding-top: 75px;
  }
  .expl-sub-wrap {
    margin-bottom: 25px;
  }
    .expl-sub-box {
      top: -25px;
    }
      .expl-sub-content {
        margin: 25px;
      }
        .expl-sub-content > h4 {
          margin: 0 0 25px 0;
        }

  .disc-sub-content-wrap {
    margin-bottom: 50px;
  }
    .disc-sub-box {
      margin-bottom: 25px;
    }
      .sub-content {
        margin: 25px;
      }

    .sub-head {
      margin-bottom: 25px;
    }
      .sub-head-text {
        margin-left: 25px;
      }
        .sub-head-text > h4 {
          font-size: 22px;
        }
          .sub-head-text > h4 span {
            line-height: 1.2rem;
          }
    .sub-ctx:first-child {
      margin-bottom: 25px;
    }

/* Lines, etc */
  .purple-line {
    width: 50px;
    margin: 0 25px 20px 0;
  }
}
</style>

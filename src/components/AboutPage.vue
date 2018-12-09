<template>
  <div class="main-wrapper">
    <div class="about-wrap l-spacing-sm">
      <navMenu></navMenu>
      <div class="about-head">
        <div class="about-head-img">
          <img v-if="mobileScreen === false" class="about-head-img" src="./assets/aboutpage/about_head.jpg" alt="">
          <img v-if="mobileScreen === true" class="about-head-img" src="./assets/aboutpage/about_head_mobile.jpg" alt="">
        </div>
        <div class="yellow-bg"></div>
      </div>
      <div class="about-content-wrap d-flex-center">
        <div class="about-content container margin-sides">
          <div class="about-us-rel">
            <div class="about-us-wrap shadow">
              <div class="about-us-ctx">
                <h4>
                  洋桃简介
                  <span>ABOUT US</span>
                </h4>
                <p class="p-text">
                  洋桃YoungTalent，一个由多位海归精英设计师集结力量共同创立的国际艺术设计联盟体，
                  始创于中国上海，专注于海内外的“独立设计师推广、新锐设计师孵化、
                  设计产业合作链建立”;同时，也是一个师资强大的国际艺术咨询中心，
                  致力于最专业的“艺术家与设计师养成计划、作品集指导、艺术留学规划”。
                  洋桃代表着国内现阶段最完善的艺术指导体系和最自由的个人孵化平台，
                  总部位于上海市南京西路黄金商区，是设计时尚产业集群地带。这里有充满活力和创造力的学习和工作环境，
                  艺术社区的形态摆脱定式束缚，浸入式学习与独立的工作空间有机结合，
                  是全新艺术设计方式的转变。洋桃让学生和设计师在最贴近国外的氛围中自由成长。
                </p>
              </div>
              <div class="about-us-line line"></div>
            </div>
            <div class="yellow-line"></div>
          </div>
          <div class="about-box shadow">
            <div class="about-content-box">
              <div class="about-content-card">
                <h4>
                  国际艺术留学咨询
                  <span>INTERNATIONAL ARTS<br> CONSULTING</span>
                </h4>
                <p class="p-text">
                  洋桃国际艺术留学咨询中心作为艺术学生留洋海外最坚实的后盾，导师团队均是来自设计联盟的精英设计师，
                  他们作为设计行业里的先锋人，来自全球范围内的不同专业和领域，从业多年，拥有十分优秀的教学实力和口碑。
                  而设计师们更加丰富的行业实践经验和社会资源，给学生们带来了更多在艺术设计领域里提前崭露头角的机会，
                  为学生实现真正的个人孵化提供了最前沿的平台。
                </p>
              </div>
              <div class="consulting-line line"></div>
            </div>
            <div class="about-content-img">
              <img src="./assets/aboutpage/about_consulting.jpg" alt="">
            </div>
          </div>
          <div class="about-box shadow">
            <div class="about-content-img">
              <img src="./assets/aboutpage/about_community.jpg" alt="">
            </div>
            <div class="about-content-box">
              <div class="about-content-card">
                <h4>
                  全球艺术设计联盟
                  <span>INTERNATIONAL ART &<br> DESIGN COMMUNITY</span>
                </h4>
                <p class="p-text">
                  洋桃全球艺术设计联盟作为精英海归设计师的聚集地，这里的项目合作和学术碰撞每天在上演。
                  定期举办的设计讲座、艺术分享会、创作市集和展览给设计师们提供了源源不断的灵感和机遇。<br>
                  洋桃建立了一个长期致力于钻研艺术设计的导师团队，他们都是各自专业领域的资深艺术家与设计师，
                  作为洋桃最核心的力量与资源，强大的名校海归团队逐渐成为洋桃品牌竞争力的巨大优势。
                </p>
              </div>
              <div class="community-line line"></div>
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
  name: 'AboutPage',
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
      window.addEventListener('resize', this.changeAboutUsDivHeight)
      this.changeAboutUsDivHeight()
    })
  },
  methods: {
    checkScreen () {
      (document.querySelector('.main-wrapper').getAttributeNode('mob-screen')) ? this.mobileScreen = true : this.mobileScreen = false
    },
    changeAboutUsDivHeight () {
      (window.innerWidth < 1151) ? document.querySelector('.about-us-rel').style.height = `${document.querySelector('.about-us-wrap').offsetTop + document.querySelector('.about-us-wrap').offsetHeight}px` : document.querySelector('.about-us-rel').removeAttribute('style')
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreen)
    window.removeEventListener('resize', this.changeAboutUsDivHeight)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-wrap {
  background-color: #fafafa;
}

.about-head {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}
  .about-head-img {
    display: block;
    max-width: 950px;
    width: 100%;
  }
  .yellow-bg {
    flex-grow: 100;
    background-color: #fccd0f;
  }

.about-content-wrap {
  width: 100%;
  background-color: #fafafa;
}

.about-us-rel {
  position: relative;
  width: 100%;
  height: 150px;
}
  .about-us-wrap {
    position: absolute;
    top: -400px;
    right: 0;
    max-width: 500px;
    width: 100%;
    height: auto;
    background-color: #fff;
  }
    .about-us-ctx,
    .about-content-card {
      margin: 50px;
      text-align: left;
    }
    .about-us-ctx > h4,
    .about-content-card > h4 {
      margin: 0 0 50px 0;
      font-size: 2.25rem;
      line-height: 2.2rem;
    }
      .about-us-ctx > h4 span,
      .about-content-card > h4 span {
        display: block;
        font-size: 1rem;
        line-height: 1.2rem;
      }
    .about-us-ctx .p-text,
    .about-content-card .p-text {
      margin: 0;
    }

.about-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 100px 0;
}
.about-box:last-child {
  margin-bottom: 150px;
}
  .about-content-box {
    background-color: #fff;
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .about-content-img {
    background-color: #fff;
    width: 50%
  }
    .about-content-img > img {
      display: block;
      width: 100%;
    }

/* Lines etc.. */
.yellow-line {
  display: block;
  position: absolute;
  left: 100px;
  bottom: -100px;
  height: 150px;
  width: 5px;
  background-color: #fccd0f;
}
.line {
  width: 100px;
  height: 5px;
  margin-bottom: 50px;
}
.about-us-line {
  background-color: #23e8be;
  float: right;
}
.consulting-line {
  display: none;
  background-color: #fccd0f;
  align-self: center;
}
.community-line {
  background-color: #b046aa;
  align-self: flex-start;
  margin-left: 50px;
}

/* @Media */
@media (max-width: 1349px) {
  .about-wrap {
    padding-top: 75px;
  }
}

@media (max-width: 1150px) {
  .about-head {
    flex-direction: column-reverse;
  }
    .about-head-img {
      max-width: 1150px;
    }
  .about-us-wrap {
    top: -250px;
  }
}

@media (max-width: 750px){
  .about-us-wrap {
    top: -50px;
    max-width: 750px;
  }

  .about-box {
    flex-direction: column-reverse;
  }
  .about-box:last-child {
    flex-direction: column;
  }

  .about-content-box,
  .about-content-img {
    width: 100%
  }

  .yellow-line {
    display: none;
  }
  .consulting-line {
    display: block;
  }
  .about-us-line {
    margin-right: 50px;
  }
}

@media (max-width: 550px) {
  .about-us-ctx,
  .about-content-card {
    margin: 25px;
  }
  .about-us-ctx > h4,
  .about-content-card > h4 {
    margin: 0 0 25px 0;
  }

  .about-box {
    margin: 50px 0;
  }
  .about-box:last-child {
    margin-bottom: 75px;
  }

  /* Lines */
  .line {
    width: 75px;
    margin-bottom: 25px;
  }
  .about-us-line {
    float: left;
    margin: 0 0 25px 25px;
  }
  .community-line {
    align-self: flex-end;
    margin-left: 0px;
    margin: 0 25px 25px 0;
  }
}
</style>

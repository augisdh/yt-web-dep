<template>
  <div class="main-wrapper">
    <div class="uni-wrap l-spacing-sm">
      <navMenu></navMenu>
      <div class="uni-head">
        <div class="uni-head-img">
          <img v-if="mobileScreen === false" class="uni-head-img" src="./assets/universitiespage/University_background.jpg" alt="">
          <img v-if="mobileScreen === true" class="uni-head-img" src="./assets/universitiespage/University_background_mobile.jpg" alt="">
        </div>
        <div v-if="mobileScreen === false" class="yellow-bg"></div>
      </div>
      <div class="uni-content-wrap d-flex-center">
        <div class="container margin-sides">
          <div class="rec-institutions-wrap">
            <div class="rec-institutions-box shadow">
              <div class="rec-institutions-content">
                <h4>
                  艺术推荐院校
                  <span>RECOMMENDED INSTITUTIONS</span>
                </h4>
                <p class="p-text">
                  依托全球顶尖的艺术设计资源，洋桃为高中申请海外本科课程、本科申请
                  海外硕士研究生以及需要申请预科的学生提供最专业的艺术留学咨询、作品集辅导和申请服务。
                </p>
              </div>
              <div class="blue-line"></div>
            </div>
          </div>
          <div class="uni-content-wrapper">
            <div class="uni-content-box shadow">
              <div class="uni-content-head">
                <h4>
                  英国
                  <span>UNITED KINGDOM</span>
                </h4>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.arts.ac.uk/csm" target="_blank"><img src="./assets/universitiespage/uk/E-1.jpg" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    中央圣马丁艺术与设计学院
                    <span>Central Saint Martins</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 本6.0~6.5 研6.5~7.5<br>
                    专业推荐: 服装设计 | 配饰设计 | 室内设计 | 平面设计 | 插画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.rca.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-6.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    皇家艺术学院
                    <span>Royal College of Art</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 研6.5-7.0<br>
                    专业推荐: 工业设计 | 交互设计 | 摄影
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.eca.ed.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-2.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    爱丁堡艺术学院
                    <span>Edinburgh College of Art</span>
                  </h5>
                  <p class="p-text">
                    托福: 本92 研92 SAT: N/A雅思: 本6.5 研6.5<br>
                    专业推荐: 室内设计 | 数字媒体 | 平面设计 | 摄影
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.arts.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-7.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    伦敦艺术大学
                    <span>University of the Arts London</span>
                  </h5>
                  <p class="p-text">
                    托福: 本92 研92 SAT: N/A雅思: 本6.5 研6.5
                    专业推荐: 室内设计 | 数字媒体 | 平面设计 | 摄影
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.gsa.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-3.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    格拉斯哥艺术学院
                    <span>The Glasgow School of Art</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 本5.0-6.5 研6.0-7.0<br>
                    专业推荐: 服装设计 | 室内设计 | 工业设计 | 动漫设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.lboro.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-8.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    拉夫堡大学
                    <span>Loughborough University</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 研6.5
                    专业推荐: 工业设计 | 数字媒体
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.gold.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-4.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    伦敦大学金史密斯学院
                    <span>Goldsmiths University of London</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 6.0分-7.0分<br>
                    专业推荐: 数字媒体 | 摄影 | 影视制作
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.bcu.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-9.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    伯明翰城市大学
                    <span>Birmingham City University</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 本6.0分+；研6.5分+<br>
                    专业推荐: 珠宝设计 | 服装设计 | 室内设计 | 影视制作
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.kingston.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-5.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    金斯顿大学
                    <span>Kingston University</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 本6.0+ 研6.5+<br>
                    专业推荐: 动漫设计 | 插画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.coventry.ac.uk" target="_blank"><img src="./assets/universitiespage/uk/E-10.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    考文垂大学
                    <span>Coventry University</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A SAT: N/A雅思: 本6.0 研6.5<br>
                    专业推荐: 工业设计 | 平面设计
                  </p>
                </div>
              </div>
            </div>
            <div class="uni-content-box shadow">
              <div class="uni-content-head">
                <h4>
                  美国
                  <span>UNITED STATES</span>
                </h4>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.newschool.edu/parsons" target="_blank"><img src="./assets/universitiespage/us/E2-1.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    帕森斯设计学院
                    <span>Parsons The New School for Design</span>
                  </h5>
                  <p class="p-text">
                    托福: 92 SAT: 非必需雅思: 7.0<br>
                    专业推荐: 服装设计 | 室内设计 | 插画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.cornell.edu" target="_blank"><img src="./assets/universitiespage/us/E2-6.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    康奈尔大学
                    <span>Cornell University</span>
                  </h5>
                  <p class="p-text">
                    托福: 100 SAT: 需要雅思: 7.0<br>
                    专业推荐: 建筑设计 | 室内设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.risd.edu" target="_blank"><img src="./assets/universitiespage/us/E2-2-copy.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    罗德岛设计学院
                    <span>Rhode Island School of Design</span>
                  </h5>
                  <p class="p-text">
                    托福: 93 SAT: 1290雅思: 6.5<br>
                    专业推荐: 服装设计 | 数字媒体 | 平面设计 | 纯艺术
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.fitnyc.edu" target="_blank"><img src="./assets/universitiespage/us/E2-7.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    纽约时装学院
                    <span>Fashion Institute of Technology</span>
                  </h5>
                  <p class="p-text">
                    托福: 80 SAT: 研究生个别专业需要GRE成绩雅思: 6.5<br>
                    专业推荐: 服装设计 | 配饰设计 | 插画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.cmu.edu" target="_blank"><img src="./assets/universitiespage/us/E2-3.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    卡内基梅隆大学
                    <span>Carnegie Mellon University</span>
                  </h5>
                  <p class="p-text">
                    托福: 102 SAT: 需要雅思: 7.5<br>
                    专业推荐: 工业设计 | 交互设计 | 数字媒体 | 平面设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.pratt.edu" target="_blank"><img src="./assets/universitiespage/us/E2-8.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    普瑞特艺术学院
                    <span>Pratt Institute</span>
                  </h5>
                  <p class="p-text">
                    托福: 79 SAT: 非必需雅思: 6.5<br>
                    专业推荐: 建筑设计 | 室内设计 | 动漫设计 | 交互设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.academyart.edu" target="_blank"><img src="./assets/universitiespage/us/E2-4.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    旧金山艺术大学
                    <span>Academy of Art University</span>
                  </h5>
                  <p class="p-text">
                    托福: 建议70+ SAT: 非必需雅思: 建议6.0+<br>
                    专业推荐: 配饰设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.rit.edu" target="_blank"><img src="./assets/universitiespage/us/E2-5.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    罗彻斯特理工学院
                    <span>Rochester Institute of Technology</span>
                  </h5>
                  <p class="p-text">
                    托福: 79 SAT: 1610-1950雅思: 6.5<br>
                    专业推荐: 工业设计 | 数字媒体 | 摄影
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.mica.edu" target="_blank"><img src="./assets/universitiespage/us/E2-10.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    马里兰艺术学院
                    <span>Maryland Institute College of Art</span>
                  </h5>
                  <p class="p-text">
                    托福: 80 SAT: 无硬性要求雅思: 6.5<br>
                    专业推荐: 交互设计 | 平面设计 | 纯艺术 | 插画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.saic.edu" target="_blank"><img src="./assets/universitiespage/us/E2-9.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    芝加哥艺术学院
                    <span>School of the Art Institute of Chicago</span>
                  </h5>
                  <p class="p-text">
                    托福: 本：82;研：80<br>
                    SAT: 部分研究生专业需要GRE成绩雅思: 6.5<br>
                    专业推荐: 室内设计 | 纯艺术 | 摄影
                  </p>
                </div>
              </div>
            </div>
            <div class="uni-content-box shadow">
              <div class="uni-content-head">
                <h4>
                  其他
                  <span>OTHER</span>
                </h4>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.ocadu.ca" target="_blank"><img src="./assets/universitiespage/others/E3-1.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    安大略艺术设计学院
                    <span>OCAD University</span>
                  </h5>
                  <p class="p-text">
                    托福:（本）80（研）90 雅思（本）6.5（研）7.0<br>
                    专业推荐：景观设计 | 工业设计 | 多媒体设计 | 摄影 | 交互设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.anu.edu.au" target="_blank"><img src="./assets/universitiespage/others/E3-6.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    澳大利亚国立大学
                    <span>The Australian National University</span>
                  </h5>
                  <p class="p-text">
                    托福 80 雅思: 6.5<br>
                    专业推荐: 数字媒体 | 平面设计 | 展示设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.ecuad.ca" target="_blank"><img src="./assets/universitiespage/others/E3-2.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    艾米丽卡尔艺术与设计大学
                    <span>Emily Carr University of Art and Design</span>
                  </h5>
                  <p class="p-text">
                    托福 84～90 雅思: 6.5～7.0 SAT: N/A<br>
                    专业推荐：交互设计 | 纯艺术
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.unimelb.edu.au" target="_blank"><img src="./assets/universitiespage/others/E3-7.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    墨尔本大学
                    <span>The University of Melbourne</span>
                  </h5>
                  <p class="p-text">
                    托福 79+ 雅思 6.5+<br>
                    专业推荐:插画设计 | 建筑 | 平面设计 | 纯艺术
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.sheridancollege.ca" target="_blank"><img src="./assets/universitiespage/others/E3-3.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    谢尔丹学院
                    <span>Sheridan College</span>
                  </h5>
                  <p class="p-text">
                    托福 88 雅思 6.5 SAT N/A<br>
                    专业推荐：室内设计 | 动画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.istitutomarangoni.com" target="_blank"><img src="./assets/universitiespage/others/E3-9.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    马兰欧尼时装学院
                    <span>Istituto Marangoni</span>
                  </h5>
                  <p class="p-text">
                    托福: N/A 雅思 （本）6.0 （研 ）6.5 意大利语 B1<br>
                    专业推荐: 服装设计 | 配饰设计 | 时尚管理
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.unsw.edu.au" target="_blank"><img src="./assets/universitiespage/others/E3-5.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    新南威尔士大学
                    <span>The University of New South Wales</span>
                  </h5>
                  <p class="p-text">
                    托福 90 雅思: 6.5 SAT: N/A<br>
                    专业推荐: 工业设计 | 建筑设计
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.udk-berlin.de/en/home" target="_blank"><img src="./assets/universitiespage/others/E3-10.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    柏林艺术大学美术学院
                    <span>Berlin University of the Arts</span>
                  </h5>
                  <p class="p-text">
                    托福: 入学 雅思: N/A（本）德语B2（研）德语C1 SAT: N/A<br>
                    专业推荐:建筑设计 | 纯艺术
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="http://www.accademia.firenze.it/en" target="_blank"><img src="./assets/universitiespage/others/E3-8.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    佛罗伦萨国立美术学院
                    <span>Florence Academy of Fine Arts </span>
                  </h5>
                  <p class="p-text">
                    （本）A2 （研）B2  图兰朵和马可波罗计划可到意大利后学习意大利语，考试通过方可入学<br>
                    专业推荐: 室内设计 | 纯艺 | 插画
                  </p>
                </div>
              </div>
              <div class="uni-box">
                <div class="uni-img-box">
                  <a href="https://www.acad.ca" target="_blank"><img src="./assets/universitiespage/others/E3-4.png" alt=""></a>
                </div>
                <div class="uni-ctx">
                  <h5>
                    阿尔伯塔艺术设计学院
                    <span>Alberta College of Art and Design</span>
                  </h5>
                  <p class="p-text">
                    托福:（本）83（研）93 雅思:（本）6.5 （研） 7.0 CAEL:70 GPA 3.0<br>
                    专业推荐: 陶艺
                  </p>
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
  name: 'UniversitiesPage',
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
      window.addEventListener('resize', this.changeUniDivHeight)
      this.changeUniDivHeight()
    })
  },
  methods: {
    checkScreen () {
      (document.querySelector('.main-wrapper').getAttributeNode('mob-screen')) ? this.mobileScreen = true : this.mobileScreen = false
    },
    changeUniDivHeight () {
      (window.innerWidth < 851) ? document.querySelector('.rec-institutions-wrap').style.height = `${document.querySelector('.rec-institutions-box').offsetTop + document.querySelector('.rec-institutions-box').offsetHeight}px` : document.querySelector('.rec-institutions-wrap').removeAttribute('style')
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreen)
    window.removeEventListener('resize', this.changeUniDivHeight)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uni-wrap {
  background-color: #fafafa;
}

.uni-head {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}
  .uni-head-img {
    display: block;
    max-width: 950px;
    width: 100%;
  }
  .yellow-bg {
    flex-grow: 100;
    background-color: #fccd0f;
  }

  .rec-institutions-wrap {
    position: relative;
    margin-bottom: 50px;
  }
    .rec-institutions-box {
      position: absolute;
      top: -375px;
      right: 0;
      max-width: 500px;
      margin-bottom: 50px;
      width: 100%;
      background-color: #fff;
    }
      .rec-institutions-content {
        margin: 50px;
        text-align: left;
      }
        .rec-institutions-content > h4 {
          margin: 0 0 50px 0;
          font-size: 2.25rem;
          line-height: 1.7rem;
        }
          .rec-institutions-content > h4 span {
            display: block;
            font-size: 1rem;
          }
        .rec-institutions-wrap .p-text {
          margin: 0;
        }

  /* Univers content */
  .uni-content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
    .uni-content-box {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      margin-bottom: 50px;
    }
    .uni-content-box:last-child {
      margin-bottom: 150px;
    }
      /* Header */
      .uni-content-head {
        text-align: center;
        margin-top: 50px;
      }
        .uni-content-head > h4 {
          margin: 0;
          font-size: 1.6rem;
        }
          .uni-content-head > h4 span {
            display: block;
            font-size: 1rem;
          }
      /* Content */
      .uni-box {
        display: flex;
        flex-direction: row;
        margin: 50px 50px 0 50px;
      }
      .uni-box:last-child {
        margin: 50px;
      }
        .uni-box > div {
          width: 50%;
        }
        .uni-img-box {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
          .uni-img-box > a {
            text-decoration: none;
            cursor: pointer;
          }
          .uni-img-box > a img {
            display: block;
            width: 100%;
          }
        .uni-ctx {
          text-align: left;
        }
          .uni-ctx > h5 {
            margin: 0;
            font-size: 1.2rem;
            line-height: 1rem;
          }
            .uni-ctx > h5 span {
              display: block;
              font-size: 1.2rem;
              margin-top: 6px;
            }
          .uni-ctx .p-text {
            margin: 10px 0 0 0;
          }

/* Lines, etc */
.blue-line {
  width: 100px;
  height: 5px;
  float: right;
  margin: 0 50px 50px 0;
  background-color: #23e8be;
}

/* @Media */
@media (max-width: 850px) {
  .rec-institutions-box {
    top: -125px;
  }
  .uni-content-head {
    margin-top: 25px;
  }
  .uni-box {
    flex-direction: column;
    margin: 50px 25px 0 25px;
  }
    .uni-box > div {
      width: 100%;
    }
      .uni-ctx {
        text-align: center;
      }
        .uni-ctx > h5 {
          margin-top: 25px;
        }
}

@media (max-width: 550px) {
  .uni-wrap {
    padding-top: 75px;
  }
  .rec-institutions-wrap {
    margin-bottom: 25px;
  }
  .rec-institutions-box {
    top: -50px;
  }
    .rec-institutions-content {
      margin: 25px;
    }
      .rec-institutions-content > h4 {
        margin: 0 0 25px 0;
      }

  .uni-content-box {
    margin-bottom: 25px;
  }
  .uni-content-box:last-child {
    margin-bottom: 75px;
  }
  /* Lines, etc */
  .blue-line {
    width: 50px;
    margin: 0 25px 25px 0;
  }

}
</style>

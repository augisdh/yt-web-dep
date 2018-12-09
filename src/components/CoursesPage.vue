<template>
  <div class="main-wrapper">
    <div class="courses-wrap l-spacing-sm">
      <navMenu></navMenu>
      <div class="courses-head">
        <div class="courses-head-img d-flex-center">
          <div class="port-head-wrapper container margin-sides">
            <img src="./assets/coursespage/Portfolio.jpg" alt="">
          </div>
        </div>
        <div class="clear-head-bottom"></div>
      </div>
      <div class="courses-content-wrap d-flex-center">
        <div class="container margin-sides">
          <div class="w-port-box shadow">
            <div class="w-port-content">
              <h4>
                什么是作品集?
                <span>WHAT IS A PORTFOLIO?</span>
              </h4>
              <p class="p-text">
                对于艺术与设计专业的学生来说，作品集是艺术留学的核心，国外院校大都要求学生提交作品集，
                作品集的质量是学生艺术综合实力的展现，是国外院校决定是否录取的重要依据，优秀作品集还能为学生赢得高额奖学金。
                国外院校主要是通过考察学生独立的创意思想以及对生活与文化的独特见解和表现手法，
                择优录取有创新意识、创意灵感和艺术天赋的优秀学生。
              </p>
            </div>
            <div class="w-port-line"></div>
          </div>
          <div class="port-course-box">
            <div class="port-course-head">
              <h4>
                作品集课程
                <span>PORTFOLIO COURSES</span>
              </h4>
            </div>
            <div class="port-course-content-grid shadow">
              <div class="course-one">
                <img src="./assets/coursespage/courses_b/B2-1.jpg" alt="">
                <div class="sub-ctx">
                  <h3>期初评估</h3>
                </div>
              </div>
              <div class="course-two">
                <img src="./assets/coursespage/courses_b/B2-2.jpg" alt="">
                <div class="sub-ctx">
                  <h3>择校策略分析</h3>
                </div>
              </div>
              <div class="course-three">
                <img src="./assets/coursespage/courses_b/B2-3.jpg" alt="">
                <div class="sub-ctx">
                  <h3>课程规划定制</h3>
                </div>
              </div>
              <div class="course-four">
                <img src="./assets/coursespage/courses_b/B2-4.jpg" alt="">
                <div class="sub-ctx">
                  <h3>留学时间规划</h3>
                </div>
              </div>
              <div class="course-five">
                <img src="./assets/coursespage/courses_b/B2-5.jpg" alt="">
                <div class="sub-ctx">
                  <h3>Project-1</h3>
                </div>
              </div>
              <div class="course-six">
                <img src="./assets/coursespage/courses_b/B2-6.jpg" alt="">
                <div class="sub-ctx">
                  <h3>Project-2</h3>
                </div>
              </div>
              <div class="course-seven">
                <img src="./assets/coursespage/courses_b/B2-7.jpg" alt="">
                <div class="sub-ctx">
                  <h3>Project-3</h3>
                </div>
              </div>
              <div class="course-eight">
                <img src="./assets/coursespage/courses_b/B2-8.jpg" alt="">
                <div class="sub-ctx">
                  <h3>Project-4</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="vip-prog-box">
            <div class="vip-prog-head">
              <h4>
                VIP增值项
                <span>VIP PROGRAMME</span>
              </h4>
            </div>
            <div class="vip-prog-content-grid shadow">
              <div class="prog-one">
                <img src="./assets/coursespage/course_c/B3-1.jpg" alt="">
                <div class="sub-ctx">
                  <h3>精英导师审核</h3>
                </div>
              </div>
              <div class="prog-two">
                <img src="./assets/coursespage/course_c/B3-2.jpg" alt="">
                <div class="sub-ctx">
                  <h3>专项排版定制</h3>
                </div>
              </div>
              <div class="prog-three">
                <img src="./assets/coursespage/course_c/B3-3.jpg" alt="">
                <div class="sub-ctx">
                  <h3>定向国家翻译</h3>
                </div>
              </div>
              <div class="prog-four">
                <img v-if="mobileScreen === false" src="./assets/coursespage/course_c/B3-4.jpg" alt="">
                <img v-if="mobileScreen === true" src="./assets/coursespage/course_c/B3-4_mobile.jpg" alt="">
                <div class="sub-ctx">
                  <h3>名校面试辅导</h3>
                </div>
              </div>
              <div class="prog-five">
                <img v-if="mobileScreen === false" src="./assets/coursespage/course_c/B3-5.jpg" alt="">
                <img v-if="mobileScreen === true" src="./assets/coursespage/course_c/B3-5_mobile.jpg" alt="">
                <div class="sub-ctx">
                  <h3>专项挑战题</h3>
                </div>
              </div>
              <div class="prog-six">
                <img src="./assets/coursespage/course_c/B3-6.jpg" alt="">
                <div class="sub-ctx">
                  <h3>文书申请</h3>
                </div>
              </div>
              <div class="prog-seven">
                <img src="./assets/coursespage/course_c/B3-7.jpg" alt="">
                <div class="sub-ctx">
                  <h3>院校跟踪</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="b-course-box">
            <div class="b-course-head">
              <h4>
                破冰基础课
                <span>BASIC COURSES</span>
              </h4>
            </div>
            <div class="b-course-content-wrap">
              <div class="b-course-content">
                <div class="b-course shadow">
                  <div class="b-course-img">
                    <img src="./assets/coursespage/course_d/B4-1.jpg" alt="">
                  </div>
                  <div class="b-course-ctx">
                    <h3>平面设计软件课</h3>
                    <ul>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>InDesign</li>
                    </ul>
                  </div>
                </div>
                <div class="b-course shadow">
                  <div class="b-course-img">
                    <img src="./assets/coursespage/course_d/B4-2.jpg" alt="">
                  </div>
                  <div class="b-course-ctx">
                    <h3>工业设计软件课</h3>
                    <ul>
                      <li>Rhino（犀牛）</li>
                      <li>Keyshot</li>
                      <li>CAD</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="b-course-content">
                <div class="b-course shadow">
                  <div class="b-course-img">
                    <img src="./assets/coursespage/course_d/B4-3.jpg" alt="">
                  </div>
                  <div class="b-course-ctx">
                    <h3>珠宝设计软件课</h3>
                    <ul>
                      <li>Rhino（犀牛）</li>
                      <li>Keyshot</li>
                      <li>CorelDraw</li>
                    </ul>
                  </div>
                </div>
                <div class="b-course shadow">
                  <div class="b-course-img">
                    <img src="./assets/coursespage/course_d/B4-4.jpg" alt="">
                  </div>
                  <div class="b-course-ctx">
                    <h3>基础手绘课</h3>
                    <ul>
                      <li>工业设计手绘</li>
                      <li>珠宝设计手绘</li>
                      <li>素描、水粉</li>
                      <li>插画</li>
                      <li>电脑绘画</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="work-course-box">
            <div class="work-course-head">
              <h4>
              工坊兴趣课
                <span>WORKSHOP COURSES</span>
              </h4>
            </div>
            <div class="work-course-content-wrap shadow">
              <div class="work-course-content">
                <div class="work-gallery">
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-1.jpg" alt="">
                    <div class="w-img-text">
                      <h5>硅胶</h5>
                    </div>
                  </div>
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-2.jpg" alt="">
                    <div class="w-img-text">
                      <h5>树脂</h5>
                    </div>
                  </div>
                </div>
                <div class="work-gallery">
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-3.jpg" alt="">
                    <div class="w-img-text">
                      <h5>亚克力</h5>
                    </div>
                  </div>
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-4.jpg" alt="">
                    <div class="w-img-text">
                      <h5>皮革</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="work-course-content-head">
                <h3>综合材料课</h3>
              </div>
            </div>
            <div class="work-course-content-wrap">
              <div class="w-course-content-box shadow">
                <div class="work-gallery">
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-5.jpg" alt="">
                    <div class="w-img-text">
                      <h5>丝网印刷</h5>
                    </div>
                  </div>
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-6.jpg" alt="">
                    <div class="w-img-text">
                      <h5>书籍装置</h5>
                    </div>
                  </div>
                </div>
                <div class="work-course-content-head">
                  <h3>视觉传达</h3>
                </div>
              </div>
              <div class="w-course-content-box shadow">
                <div class="work-gallery">
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-7.jpg" alt="">
                    <div class="w-img-text">
                      <h5>雕塑纯艺</h5>
                    </div>
                  </div>
                  <div class="w-img">
                    <img src="./assets/coursespage/courses_e/B5-8.jpg" alt="">
                    <div class="w-img-text">
                      <h5>首飾制作</h5>
                    </div>
                  </div>
                </div>
                <div class="work-course-content-head">
                  <h3>3D造型</h3>
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
  name: 'CoursesPage',
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
    })
  },
  methods: {
    checkScreen () {
      (document.querySelector('.main-wrapper').getAttributeNode('mob-screen')) ? this.mobileScreen = true : this.mobileScreen = false
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkScreen)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.courses-wrap {
  background-color: #fafafa;
}

.courses-head {
  width: 100%;
}
  .courses-head-img {
    width: 100%;
    padding-top: 38.2%;
    background: url(./assets/coursespage/courses_head.jpg) no-repeat center;
    background-size: 100%;
  }
    .port-head-wrapper {
      position: relative;
      z-index: 5;
    }
      .port-head-wrapper > img {
        display: block;
        width: 50%;
        position: absolute;
        bottom: -100px;
        right: 0;
      }
  .clear-head-bottom {
    width: 100%;
    height: 50px;
    background: transparent;
  }

  .courses-content-wrap {
    height: auto;
  }
  .w-port-box {
    position: relative;
    width: 90%;
    height: auto;
    background-color: #fff;
    margin-bottom: 100px;
    padding: 50px 0;
  }
    .w-port-box .w-port-content {
      margin: 0 50px;
      text-align: left;
    }
      .w-port-content > h4,
      .port-course-head > h4,
      .vip-prog-head > h4,
      .b-course-head > h4,
      .work-course-head > h4 {
        margin: 0 0 50px 0;
        font-size: 2.25rem;
        line-height: 1.7rem;
      }
        .w-port-content > h4 span,
        .port-course-head > h4 span,
        .vip-prog-head > h4 span,
        .b-course-head > h4 span,
        .work-course-head > h4 span {
          display: block;
          font-size: 1rem;
        }
      .w-port-content .p-text {
        margin: 0 0 50px 0;
      }

    .port-course-head {
      margin-bottom: 50px;
    }

    /* Portfolio courses */
    .port-course-content-grid,
    .vip-prog-content-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, auto);
      width: 100%;
      margin-bottom: 100px;
    }
      .port-course-content-grid > div,
      .vip-prog-content-grid > div {
        position: relative;
      }
      /* Grid course position */
      .course-one {
        grid-column: 1/3;
        grid-row: 1;
      }
      .course-two {
        grid-column: 3;
        grid-row: 1;
      }
      .course-three {
        grid-column: 4;
        grid-row: 1;
      }
      .course-four {
        grid-column: 5;
        grid-row: 1/3;
      }
      .course-five {
        grid-column: 1;
        grid-row: 2;
      }
      .course-six {
        grid-column: 2;
        grid-row: 2;
      }
      .course-seven {
        grid-column: 3;
        grid-row: 2;
      }
      .course-eight {
        grid-column: 4;
        grid-row: 2;
      }
        .port-course-content-grid img,
        .vip-prog-content-grid img {
          display: block;
          width: 100%;
        }
        .port-course-content-grid .sub-ctx,
        .vip-prog-content-grid .sub-ctx {
          position: absolute;
          top: 25px;
          left: 25px;
        }
          .sub-ctx > h3 {
            margin: 0;
            font-size: 18px;
          }

    /* VIP programme */
    .prog-one {
      grid-column: 1;
      grid-row: 1/3;
    }
    .prog-two {
      grid-column: 2;
      grid-row: 1;
    }
    .prog-three {
      grid-column: 3;
      grid-row: 1;
    }
    .prog-four {
      grid-column: 4/6;
      grid-row: 1;
    }
    .prog-five {
      grid-column: 2/4;
      grid-row: 2;
    }
    .prog-six {
      grid-column: 4;
      grid-row: 2;
    }
    .prog-seven {
      grid-column: 5;
      grid-row: 2;
    }

  /* BASIC COURSES */
  .b-course-content-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 75px;
  }
    .b-course-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .b-course-content {
      margin-bottom: 25px;
    }
      .b-course:first-child {
        margin-right: 25px;
      }
        .b-course-img > img {
          display: block;
          width: 100%;
        }

      .b-course-ctx {
        text-align: left;
      }
        .b-course-ctx > h3 {
          margin: 25px;
          font-size: 1.25rem;
        }
        .b-course-ctx > ul {
          list-style: none;
          margin: 0 0 50px 25px;
          padding: 0;
          font-size: 1rem
        }

  /* WORKSHOP COURSES */
  .work-course-content-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
  .work-course-content-wrap:last-child {
    margin-bottom: 125px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .work-course-content {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
    .work-gallery {
      display: flex;
      flex: 100;
      flex-direction: row;
      min-width: 250.1px;
    }
      .w-img {
        position: relative;
      }
        .w-img > img {
          display: block;
          width: 100%;
        }

        .w-img-text {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
          .w-img-text > h5 {
            font-size: 1rem;
            text-align: left;
            margin: 25px 0 0 25px;
          }

  .work-course-content-head {
    background-color: #fff;
    text-align: center;
  }
    .work-course-content-head > h3 {
      margin: 12.5px 0;
      font-size: 1.25rem;
    }

  .w-course-content-box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 100;
    min-width: 250.1px;
    margin-bottom: 25px;
  }
  .w-course-content-box:first-child {
    margin-right: 25px;
  }

    .w-course-content-box .work-gallery {
      position: relative;
      justify-content: center;
    }

/* Lines, etc... */
.w-port-line {
  position: absolute;
  right: -100px;
  bottom: 50px;
  width: 150px;
  height: 5px;
  background-color: #b046aa;
}
.work-course-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #fccd0f;
}
.w-course-content-box .work-gallery::after {
  content: '';
  position: absolute;
}
.w-course-content-box:first-child .work-gallery::after {
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: #b046aa;
}
.w-course-content-box:last-child .work-gallery::after {
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #23e8be;
}

/* @Media */
@media (max-width: 1349px) {
  .courses-wrap {
    padding-top: 75px;
  }
}

@media (max-width: 999px){
  .work-course-content-wrap {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .w-course-content-box:first-child {
    margin-right: 0;
  }
}

@media (max-width: 800px) {
  .port-course-content-grid,
  .vip-prog-content-grid {
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  .port-course-content-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
  }
  .vip-prog-content-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
  }
  /* Grid course position */
  .course-two {
    grid-column: 1;
    grid-row: 2;
  }
  .course-three {
    grid-column: 2;
    grid-row: 2;
  }
  .course-four {
    grid-column: 1;
    grid-row: 3/5;
  }
  .course-five {
    grid-column: 2;
    grid-row: 3;
  }
  .course-six {
    grid-column: 2;
    grid-row: 4;
  }
  .course-seven {
    grid-column: 1;
    grid-row: 5;
  }
  .course-eight {
    grid-column: 2;
    grid-row: 5;
  }
  /* VIP programme */
  .prog-seven {
    grid-column: 2;
    grid-row: 4;
  }
  .prog-three {
    grid-column: 2;
    grid-row: 2;
  }
  .prog-four {
    grid-column: 1/3;
    grid-row: 4;
  }
  .prog-five {
    grid-column: 1/3;
    grid-row: 3;
  }
  .prog-six {
    grid-column: 1;
    grid-row: 5;
  }
  .prog-seven {
    grid-column: 2;
    grid-row: 5;
  }
}

@media (max-width: 550px) {
  .courses-wrap {
    padding-top: 75px;
  }
  .port-head-wrapper > img {
    bottom: -50px;
  }
  .clear-head-bottom {
    height: 25px;
  }

  .w-port-box {
    margin-bottom: 50px;
    padding: 25px 0;
  }
    .w-port-box .w-port-content {
      margin: 0 25px;
    }
      .w-port-content > h4,
      .port-course-head > h4,
      .vip-prog-head > h4,
      .b-course-head > h4,
      .work-course-head > h4 {
        margin: 0 0 25px 0;
      }
      .w-port-content > h4 {
        margin-top: 25px;
      }
    .w-port-content .p-text {
      margin: 0 0 25px 0;
    }

  .port-course-head {
    margin-bottom: 25px;
  }
  .vip-prog-content-grid {
    grid-template-rows: repeat(4, auto);
  }
    .port-course-content-grid .sub-ctx,
    .vip-prog-content-grid .sub-ctx {
      top: 10px;
      left: 10px;
    }
  /* VIP programme */
  .prog-three {
    grid-column: 2;
    grid-row: 2;
  }
  .prog-four {
    grid-column: 2;
    grid-row: 3;
  }
  .prog-five {
    grid-column: 1;
    grid-row: 3;
  }
  .prog-six {
    grid-column: 1;
    grid-row: 4;
  }
  .prog-seven {
    grid-column: 2;
    grid-row: 4;
  }

  /* BASIC COURSES */
  .b-course-content-wrap {
    margin-bottom: 25px;
  }
    .b-course:first-child {
      margin-right: 12.5px;
    }
        .b-course-ctx > h3 {
          font-size: 16px;
          margin: 12.5px;
        }
        .b-course-ctx > ul {
          list-style: none;
          margin: 0 0 12.5px 12.5px;
          padding: 0;
          font-size: 1rem
        }

  /* WORKSHOP COURSES */
  .w-img-text > h5 {
    margin: 12.5px 0 0 12.5px;
  }
  .work-course-content-head > h3 {
    margin: 8px 0;
    font-size: 1.25rem;
  }
  .work-course-content-wrap {
    margin-bottom: 25px;
  }
  .work-course-content-wrap:last-child {
    margin-bottom: 50px;
  }

  /* Lines */
  .w-port-line {
    right: -25px;
    width: 75px;
    bottom: 25px;
  }
  .work-course-content::after {
    top: 0;
    left: unset;
    right: unset;
    width: 5px;
    height: 100%;
  }
  .w-course-content-box:last-child .work-gallery::after {
    left: unset;
    right: unset;
    width: 5px;
    height: 100%;
  }
}

</style>

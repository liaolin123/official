<template>
  <div class="productprogramme">
    <div class="wrap">
      <Header></Header>
    </div>
    <div class="navChart">
      <div class="navDetails">
        <div class="details">
          <span>了解详情</span>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="recommendText">
        <span>推荐</span>
      </div>
      <div class="recommend">
        <div class="videoSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>视频会议系统</h5>
              </li>
              <li>
                <p>一体化高清终端，智能网络适应，保障会议效果</p>
              </li>
              <li class="seeMore">
                <span>查看更多</span>
                <span>></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="enterpriseSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>企业通信系统</h5>
              </li>
              <li>
                <p>通过终端为用户提供语音、视频、会议等业务</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="enterpriseSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>企业通信系统</h5>
              </li>
              <li>
                <p>通过终端为用户提供语音、视频、会议等业务</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="videoSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>视频会议系统</h5>
              </li>
              <li>
                <p>一体化高清终端，智能网络适应，保障会议效果</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="enterpriseSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>企业通信系统</h5>
              </li>
              <li>
                <p>通过终端为用户提供语音、视频、会议等业务</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="enterpriseSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>企业通信系统</h5>
              </li>
              <li>
                <p>通过终端为用户提供语音、视频、会议等业务</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="enterpriseSystem">
          <div id="filter">
            <ul class="filterText">
              <li>
                <span>产品</span>
              </li>
              <li>
                <h5>企业通信系统</h5>
              </li>
              <li>
                <p>通过终端为用户提供语音、视频、会议等业务</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="recommendText">
        <span>最新动态</span>
      </div>
      <div class="dynamic">
        <div class="dynamic-item">
          <div>
            <div class="input">
              <span>展会活动</span>
            </div>
            <div>
              <!-- <img :src="item.img" /> -->
            </div>
          </div>
          <div>
            <ul>
              <li>
                <h3>2019年第八届中移在线通信技术峰会</h3>
              </li>
              <li>
                <span>中国 北京</span>
                <span>2019年11月23-25日</span>
              </li>
              <li>
                <p>培训内容：FreeSWITCH入门、FreeSWITCH基础知识和基本概念、SIP与RTP高级配置实例、WebRTC……</p>
              </li>
              <li class="seeMore">
                <span>查看更多</span>
                <span>></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="dynamic-item">
          <div>
            <div class="input">
              <span>展会活动</span>
            </div>
            <div>
              <!-- <img :src="item.img" /> -->
            </div>
          </div>
          <div>
            <ul>
              <li>
                <h3>FreeSWITCH 1.8.7新版本发布了</h3>
              </li>
              <li>
                <span>中国 北京</span>
                <span>2019年11月22日</span>
              </li>
              <li>
                <p>盛夏将至，FreeSWITCH团队发布了1.8.7版本。本次更新内容较少，但是修复了几处关键性问题：修复m……</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="dynamic-item">
          <div>
            <div class="input">
              <span>展会活动</span>
            </div>
            <div>
              <!-- <img :src="item.img" /> -->
            </div>
          </div>
          <div>
            <ul>
              <li>
                <h3>2019-2025年中国呼叫中心市场调研分析</h3>
              </li>
              <li>
                <span>中国 北京</span>
                <span>2019年11月23日 17：06</span>
              </li>
              <li>
                <p>2019-2025年中国呼叫中心行业市场调研分析及投资战略咨询报告，呼叫中心产业发展综述，全球呼叫中……</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="moreBtn">
        <div>
          <el-button>更多培训</el-button>
          <el-button>更多动态</el-button>
          <el-button>更多资讯</el-button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less" scoped>
.wrap {
  width: 1200px;
  margin: auto;
}
.navChart {
  width: 100%;
  height: 114px;
  background-color: #eeeeee;
  padding-top: 339px;
  .navDetails {
    width: 1200px;
    margin: auto;
    .details {
      width: 112px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #c7000b;
      span {
        color: #c7000b;
        font-size: 14px;
        font-family: PingFangSC-Regular, Ping;
      }
    }
  }
}
.title {
  width: 1200px;
  margin: auto;
  margin-top: 45px;
  .recommendText {
    height: 46px;
    width: 120px;
    margin: auto;
    margin-bottom: 56px;
    span {
      display: inline-block;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      height: 45px;
      border-bottom: 1px solid #c7000b;
    }
  }
  .recommend {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .videoSystem {
      position: relative;
      width: 792px;
      height: 380px;
      transform-origin: top;
      background-color: rgb(211, 228, 228);
      // background-image: url(img/banner.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 24px;
    }
    .enterpriseSystem {
      position: relative;
      width: 384px;
      height: 380px;
      transform-origin: top;
      background-color: rgb(211, 228, 228);
      // background-image: url(img/banner.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 24px;
    }
    #filter {
      position: absolute;
      top: 229px;
      left: 0;
      width: 100%;
      height: 40%;
      background: rgba(7, 17, 27, 0.4);
      .filterText {
        margin-left: 24px;
        margin-top: 50px;
        li {
          margin-bottom: 8px;
        }
        .seeMore {
          margin-top: 16px;
          span:last-child {
            color: red;
          }
        }
        h5 {
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        p {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        span {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .dynamic {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .dynamic-item {
      width: 380px;
      height: 484px;
      background: #f8f8f8;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      > div:first-child {
        position: relative;
        cursor: pointer;
        > .input {
          width: 124px;
          height: 42px;
          line-height: 42px;
          position: absolute;
          left: 0;
          background: rgba(153, 153, 153, 1);
          > span {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
        div {
          width: 100%;
          height: 223px;
          background: rgba(254, 254, 254, 1);
          img {
            width: 100%;
            /*width: 120px;*/
            margin: auto;
          }
        }
      }
      > div:nth-child(2) {
        text-align: left;
        width: 90%;
        margin: 32px auto;
        ul {
          li:first-child {
            margin-bottom: 16px;
          }
          li:nth-child(2) {
            margin-bottom: 24px;
            > span {
              display: inline-block;
              margin-right: 55px;
            }
          }
          li:last-child {
            margin-top: 32px;
          }
          h3 {
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
          }
          p {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          }
          span {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }
        }
      }
    }
  }
  .moreBtn {
    margin-top: 56px;
    div {
      width: 502px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      button {
        width: 130px;
        height: 40px;
      }
      button:hover {
        background-color: #C7000B;
        color: #FFFFFF;
      }
    }
  }
}
</style>
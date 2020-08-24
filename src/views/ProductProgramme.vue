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
         <el-button type="primary">主要按钮</el-button>
      </div>
    </div>
    <div class></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
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
    width: 60px;
    border-bottom: 1px solid #c7000b;
    margin: auto;
    span {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
    }
  }
  .recommend {
    margin-top: 74px;
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
}
</style>
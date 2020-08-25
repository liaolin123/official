<template>
  <div class="callcenter">
    <div class="wrap">
      <Header></Header>
    </div>
    <div class="navChart">
      <div class="navDetails">
        <div class="navCharText">
          <h1>呼叫中心系统</h1>
          <p>全渠道接入，统一路由、座席统一处理</p>
          <div class="details">
            <span>申请使用</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="contentsLeft">
        <h1>座席管理</h1>
        <p>全渠道接入，统一路由、座席统一处理</p>
        <p>分层服务：基于客户价值的分层服务，高级别客户得到优先服务</p>
      </div>
      <div class="contentsRight">
        <span>普通客服</span>
        <div class="imgs">
          <div class="img1"></div>
          <div class="circular">
            <div>智能</div>
            <div>分配</div>
          </div>
          <div class="img2"></div>
        </div>
      </div>
      <div class="contentsLeft1">
        <div class="imgs">
          <div class="img1"></div>
          <div class="img2"></div>
        </div>
      </div>
      <div class="contentsRight1">
        <h1>开放平台</h1>
        <p>丰富的API接口，与集成商打造共赢生态圈</p>
      </div>
      <div class="contentsLeft2">
        <h1>多场景应用</h1>
        <p>传统联络中心场景——单中心，中继集中接入，服务器集中部署，适用于大中小型不同规模的联络中心场景</p>
        <p>CCE（Contact Center Express）分销场景，适用于50座席以内不同应用规模的呼叫中心</p>
      </div>
      <div class="contentsRight2">
        <div class="img1"></div>
        <div class="img2"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
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
  height: 368px;
  background-color: #eeeeee;
  padding-top: 112px;
  .navDetails {
    width: 1200px;
    margin: auto;
    .navCharText {
      h1 {
        font-size: 40px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 32px;
      }
      p {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 72px;
      }
      .details {
        width: 112px;
        height: 40px;
        line-height: 40px;
        background-color: #c7000b;
        text-align: center;
        border: 1px solid #c7000b;
        span {
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
.contents {
  width: 1200px;
  margin: 87px auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  .contentsLeft {
    width: 45%;
    height: 500px;
    margin-top: 96px;
    h1 {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 32px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 16px;
    }
  }
  .contentsRight {
    position: relative;
    span {
      display: inline-block;
      margin-left: 106px;
      margin-bottom: 24px;
    }
    .imgs {
      display: flex;
      .img1 {
        width: 280px;
        height: 280px;
        background-color: aqua;
        margin-right: 24px;
      }
      .circular {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #e9999d;
        position: absolute;
        top: 0;
        left: 383px;
        div {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: 16px;
          margin-top: 10px;
        }
      }
      .img2 {
        width: 280px;
        height: 280px;
        background-color: aqua;
        margin-top: 149px;
      }
    }
  }
  .contentsLeft1 {
    width: 50%;
    height: 500px;
    .imgs {
      width: 100%;
      height: 490px;
      background-color: azure;
      position: relative;
      .img1 {
        width: 342px;
        height: 281px;
        background-color: burlywood;
        margin-left: 40px;
      }
      .img2 {
        width: 423px;
        height: 285px;
        background-color: cornflowerblue;
        position: absolute;
        top: 143px;
        left: 137px;
      }
    }
  }
  .contentsRight1 {
    width: 49%;
    h1 {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 32px;
    }
    p {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
  .contentsLeft2 {
    width: 45%;
    height: 500px;
    margin-top: 174px;
    h1 {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 32px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 16px;
    }
  }
  .contentsRight2 {
    position: relative;
    .img1 {
      width: 599px;
      height: 457px;
      margin-top: 98px;
      background-color: aquamarine;
      position: absolute;
      left: -268px;
    }
    .img2 {
      width: 364px;
      height: 593px;
      background: rgba(248, 248, 248, 1);
    }
  }
}
</style>
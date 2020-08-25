<template>
  <div class="footer">
    <!--  帮助中心-->
    <div class="footer1">
      <div v-for="(footerItem,footerIndex) in footerList" :key="footerIndex">
        <ul>
          <li>{{footerItem.categoryName}}</li>
          <li v-for="(item,index) in footerItem.categoryList" :key="index">{{item.categoryName}}</li>
        </ul>
      </div>
      <div>
        <div class="telephone">
          <span>客服微信</span>
          <div></div>
        </div>
        <div class="service">
          <span>咨询电话：010 - 8620 1858</span>
        </div>
        <div class="mailbox">
          <span>联系邮箱：info@x-y-t.cn</span>
        </div>
      </div>
    </div>
    <div class="footer2">
      <div>
        © 2016-2017. 烟台小樱桃网络科技有限公司 保留所有权利 京ICP备:14008957
        <!-- <span @click="openRecord">烟台小樱桃网络科技有限公司 保留所有权利</span> 京ICP备:14008957 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      // 帮助中心列表
      footerList: [
        {
          categoryName: "产品中心",
          categoryList: [
            { categoryName: "视频会议系统" },
            { categoryName: "企业通信系统" },
            { categoryName: "呼叫中心系统" },
            { categoryName: "FreeSWITCH培训" }
          ]
        },
        {
          categoryName: "服务与支持",
          categoryList: [
            { categoryName: "支持计划" },
            { categoryName: "公告" },
            { categoryName: "资料直通车" },
            { categoryName: "新手入门" },
            { categoryName: "视频教程" },
            { categoryName: "常用问题" }
          ]
        },
        {
          categoryName: "新闻与活动",
          categoryList: [
            { categoryName: "展会活动" },
            { categoryName: "企业动态" },
            { categoryName: "行业资讯" }
          ]
        },
        {
          categoryName: "关于小樱桃",
          categoryList: [
            { categoryName: "关于我们" },
            { categoryName: "小樱桃招聘" },
            { categoryName: "联系我们" },
            { categoryName: "出版物" }
          ]
        }
      ]
    };
  },
  methods: {
    // 打开备案
    openRecord() {
      window.open(
        "http://www.beian.gov.cn/portal/index?token=ae7c1f33-8bba-4235-91f5-c2fb3b4933a7",
        "_blank"
      );
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  margin-top: 40px;
  width: 100%;
  background: rgba(247, 247, 247, 1);
  min-width: 1200px;
  .footer1 {
    width: 64%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    box-sizing: border-box;
    li:hover {
      color: #c7000b;
    }
    > div > ul > li {
      cursor: pointer;
    }
    > div > ul > li:first-child {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 15px;
    }
    > div > ul > li:not(first-child) {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 10px;
    }
    > div:last-child {
      > div {
        margin-bottom: 20px;
      }
      > div > span {
        display: block;
      }
      .telephone {
        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 5px;
        }
        div {
          width: 96px;
          height: 98px;
          background: rgba(255, 255, 255, 1);
        }
      }
      .service {
        span:first-child {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
        span:last-child {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
        }
      }
      .mailbox {
        span:first-child {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 5px;
        }
        span:last-child {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
  .footer2 {
      height:60px;
      line-height: 60px;
      margin: auto;
      text-align: center;
      background:rgba(223,223,223,1);
    div {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
  }
}
</style>

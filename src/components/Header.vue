<template>
  <div id="header">
    <div class="header_icon">
      <img class="header_icon_img" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1598237542&di=6957f4454b04cff0e18681ed966bed97&src=http://a2.att.hudong.com/36/48/19300001357258133412489354717.jpg" alt="">
    </div>
    <div class="home_nav" >
        <div class="home_nav_div" v-for="(item,index) in $store.state.header" :key="index">
          <router-link class="home_nav_link"   :to="item.router">
            {{item.title}}
          </router-link>
        </div>
    </div>
    <div class="home_btn">
      <button type="button">登陆</button>
      <button type="button">免费试用</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navCheck: "productprogramme",
      
    };
  },
  methods: {
    changeNav(value) {
      this.navCheck = value;
    }
  },
  mounted(){
   
  }
};
</script>

<style lang="less">
#header {
  width: 100%;
  height: 78px;
  line-height: 78px;
  display: flex;
  // justify-content: space-between;
  .header_icon{
    width: 113px;
    height: 78px;
    // line-height: 78px;
    margin-top: 18px;
    .header_icon_img{
      width: 113px;
      height: 45px;
    }
  }
  .home_btn{
    display: flex;
    height: 78px;
    padding-top: 20px;
    box-sizing: border-box;
      button:first-child{
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #C7000B;
        border-radius: 3px;
        font-size: 14px;
        overflow: hidden;
    } 
     button:nth-child(2){
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #FFFFFF;
        background-color: #C7000B;
        border: 1px solid #C7000B;
        border-radius: 3px;
        margin-left: 24px;
        font-size: 14px;
        overflow: hidden;
    } 
  }
  .home_nav{
    font-size: 16px;
    margin-left: 112px;
    display: flex;
   .home_nav_link{
     color: #333333;
     font-size: 16px;
     padding-right: 64px;
     box-sizing: border-box;
   }
   .home_nav_link:hover{
     color: #C7000B;
     position: relative;
     &.home_nav_link::after{
        content:"";
        position: absolute;
        width: 80%;
        margin-left:-50%;
        top:50px;
        left:41%;
        height: 2px;
        background-color:#C7000B;
        font-weight:bold;
     }
   }
  }
}
</style>
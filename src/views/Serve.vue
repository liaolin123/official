<template>
<div class='serve'>
    <div class="wrap">
        <Header></Header>
    </div>
    <!-- 服务 -->
    <div class="wrap">
        <div class="serve_top">服务内容比较</div>
        <div class="serve_main">
            <div class="main_one">
                <div class="main_one_top">服务项目</div>
                <div class="main_one_m" v-for="(item,index) in main1" :key="index">
                    <div class="one_m_title">{{item}}</div>
                </div>
            </div>
            <div class="main_two">
                 <div class="main_one_top">体验级</div>
                <div class="main_one_m" v-for="(item,index) in mainTwo" :key="index">
                    <div class="one_m_title">{{item}}</div>
                </div>
            </div>
            <div class="main_three">
                 <div class="main_one_top">商业级</div>
                <div class="main_one_m" v-for="(item,index) in mainThree" :key="index">
                    <div class="one_m_title" v-if="index!=6">{{item}}</div>
                    <div class="one_m_title" v-else>
                        <span style="color:#FF3366">{{item}}</span>
                        元/月</div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrap" style="font-size:0.16rem">
        底部
    </div>
</div>
</template>
<style lang="less" scoped>
.wrap{
  width: 1200px;
  margin: auto;
}
.serve{
    background-color: #FFFFFF;
}
.serve_main{
    width: 100%;
    display: flex;
    margin-top: 50px;
    .main_one{
        width: 399px;
        height: 554px;
        margin-top: 10px;
        .main_one_top{
            width: 100%;
            height: 60px;
            font-size: 18px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            text-align: center;
            color:rgba(255,255,255,1);
            line-height: 60px;
            background-color: #4969CA;
            border: 1px solid #ffffff;
        }
        .main_one_m{
            background-color: #FAFAFA;
        }
        .one_m_title{
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #FFFFFF;
            font-size:18px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:70px;
            text-align: center;
        }
    }
    .main_two{
         width: 399px;
        height: 554px;
        .main_one_top{
            width: 100%;
            height: 60px;
            font-size:18px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            text-align: center;
            color:rgba(255,255,255,1);
            line-height: 60px;
            background-color: #4969CA;
            border: 1px solid #ffffff;
        }
        .main_one_m{
            background-color: #FAFAFA;
        }
        .one_m_title{
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #FFFFFF;
            font-size:18px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:70px;
            text-align: center;
        }
    }
    .main_three{
         width: 399px;
        height: 554px;
        margin-top: 10px;
        .main_one_top{
            width: 100%;
            height: 60px;
            font-size:18px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            text-align: center;
            color:rgba(255,255,255,1);
            line-height:60px;
            background-color: #4969CA;
            border: 1px solid #ffffff;
        }
        .main_one_m{
            background-color: #FAFAFA;
        }
        .one_m_title{
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #FFFFFF;
            font-size:18px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:70px;
            text-align: center;
        }
    }
}
.serve{
    width: 100%;
    .serve_top{
        width: 100%;
        text-align: center;
        margin-top: 56px;
        height:42px;
        font-size:30px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: 40px;
        position: relative;
    }
    .serve_top::after{
        content:"";
        position: absolute;
        width: 80px;
        top:45px;
        left:46.5%;
        height: 2px;
        background-color:#C7000B;
        font-weight:bold;
    }
}

</style>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "@/components/Header.vue";
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header
},
data() {
//这里存放数据
return {
    main1:['热线电话支持','企业电话专线','IM企业群支持','案件严重性','消息与订阅','peix','当前价格'],
    mainTwo:['7x24小时','7x24小时','--','1个工作日受理','支持','支持','免费'],
    mainThree:['7x24小时','7x24小时','支持','3小时之内','支持','支持','28000'],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

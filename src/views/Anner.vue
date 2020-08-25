<template>
    <div class='anner'>
        <div class="wrap">
            <Header></Header>
        </div>
        <div class="wrap banner_main">
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                         <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-menu-item index="1">
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span slot="title">导航四</span>
                        </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="18"><div class="grid-content bg-purple-light">fdsfsdf</div></el-col>
            </el-row>
        </div>
        <div class="wrap">底部</div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "@/components/Header.vue";
export default {
//import引入的组件需要注入到对象中才能使用
components: {Header},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
     '$route':'getPath'
},
//方法集合
methods: {
    getPath(){
        console.log(this.$route.path);
    },
    handleClose(){

    },
    handleOpen(){

    },
     routes(){
      var routes = {
        children: this.$router.options.routes
      };
 
      var route = this.$route.matched;
 
      for(var i=0; i<route.length-1; i++){
        routes = routes.children.find((e) => (e.name == route[i].name));
      }
      
      return routes.children
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    let cc=this.routes()
    console.log(cc);
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
<style lang="less" scoped>
    .wrap{
        width: 1200px;
        margin: 0 auto;
    }
    .banner_main{
        margin-top: 33px;
    }

</style>
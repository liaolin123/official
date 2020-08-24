import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    header:[
      {id:1,title:'产品及解决方案',router:'/'},
      {id:2,title:'服务与支持',router:'/'},
      {id:3,title:'合作伙伴与开发者',router:'/'},
      {id:4,title:'关于小樱桃',router:'/'},
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});

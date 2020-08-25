import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/2",
    name: "Productprogramme",
    component: function() {
      return import("../views/ProductProgramme.vue");
    }
  },
  {
    path: "/serve",
    name: "serve",
    component: function() {
      return import("../views/Serve.vue");
    }
  },
  {
    path: "/",
    name: "anner",
    component: function() {
      return import("../views/Anner.vue");
    },
    children:[
      {
        path:'webnotice',
        name:'webnotice',
        component:()=>import('../views/notice/WebNotice.vue')
      },
      {
        path:'product',
        name:'product',
        component:()=>import('../views/notice/ProductNotice.vue')
      },
      {
        path:'knowledge',
        name:'knowledge',
        component:()=>import('../views/notice/KnowledgeNotice.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;

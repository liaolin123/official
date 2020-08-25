import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Productprogramme",
    component: function() {
      return import("../views/ProductProgramme.vue");
    }
  },
  {
    path: "/callcenter",
    name: "callcenter",
    component: function() {
      return import("../views/CallCenter.vue");
    }
  },
  {
    path: "/serve",
    name: "serve",
    component: function() {
      return import("../views/Serve.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;

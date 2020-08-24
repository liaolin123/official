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

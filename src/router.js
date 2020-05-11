import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
     component: () => import("./views/Home.vue")
    },
    {
      path: "/DoneTodos",
      name: "DoneTodos",
      component: () => import("./views/DoneTodos.vue")
    },
    {
      path: "/UndoTodos",
      name: "UndoTodos",
      component: () => import("./views/UndoTodos.vue")
    }
  ]
});

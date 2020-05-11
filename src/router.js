import Vue from "vue";
import Router from "vue-router";

const Home = resolve => {
  require.ensure(["./views/Home.vue"], () => {
    resolve(require("./views/Home.vue"));
  });
};
const DoneTodos = resolve => {
  require.ensure(["./views/DoneTodos.vue"], () => {
    resolve(require("./views/DoneTodos.vue"));
  });
};
const UndoTodos = resolve => {
  require.ensure(["./views/UndoTodos.vue"], () => {
    resolve(require("./views/UndoTodos.vue"));
  });
};
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/DoneTodos",
      name: "DoneTodos",
      component: DoneTodos
    },
    {
      path: "/UndoTodos",
      name: "UndoTodos",
      component: UndoTodos
    }
  ]
});

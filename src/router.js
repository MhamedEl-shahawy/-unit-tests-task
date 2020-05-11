import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve =>{
  require.ensure(['./views/Home.vue'],()=>{
      resolve(require('./views/Home.vue'));
  });
};
const DoneTodos = resolve =>{
    require.ensure(['./views/DoneTodos.vue'],()=>{
        resolve(require('./views/DoneTodos.vue'));
    });
};
const Todos = resolve =>{
    require.ensure(['./views/Todos.vue'],()=>{
        resolve(require('./views/Todos.vue'));
    });
};
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/DoneTodos',
        name: 'DoneTodos',
        component: DoneTodos
    },
    {
        path: '/Todos',
        name: 'Todos',
        component: Todos
    }
  ]
})

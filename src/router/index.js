import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Home from '@/components/Home';
import List from '@/components/List';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
});

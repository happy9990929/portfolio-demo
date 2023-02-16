import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/shared/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import('../views/Projects.vue'),
      },
      {
        path: 'project/:id',
        name: 'Project',
        component: () => import('../views/Project.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() { // 切換到新路由時，頁面滾到頂部
    return { x: 0, y: 0 }
  }
});

export default router;

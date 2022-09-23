import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/loginRedirect',
    name: 'loginRedirect',
    meta: { title: '登录页', icon: 'logout' },
    component: () => import('@/pages/login/index.vue'),
    children: [
      {
        path: 'index',
        redirect: '/login',
        component: () => import('@/layouts/blank.vue'),
        meta: { title: '登录中心' },
      },
    ],
  },
];

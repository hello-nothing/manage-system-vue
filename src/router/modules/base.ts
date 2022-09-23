import { DashboardIcon } from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    meta: {
      title: '系统管理',
      icon: DashboardIcon,
      single: true,
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/pages/home.vue'),
        meta: { title: '系统管理' },
      },
    ],
  },
];

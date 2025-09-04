import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';

const routes = [
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: '', redirect: 'products' },       // /admin → /admin/products
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/admin', // всё остальное → /admin
  },
];

const router = createRouter({
  history: createWebHistory('/my-shop'),
  routes,
});

export default router;

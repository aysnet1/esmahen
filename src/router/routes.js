
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AppDo.vue'),
    children: [
      { path: '', component: () => import('pages/app1.vue') }
    ]
  },
  {
    path: '/listapp',
    component: () => import('layouts/AppDo.vue'),
    children: [
      { path: '', component: () => import('pages/listapp.vue') }
    ]
  },
  {
    path: '/help',
    component: () => import('layouts/AppDo.vue'),
    children: [
      { path: '', component: () => import('pages/help.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

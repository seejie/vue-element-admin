import Layout from '@/layout'

const pageRouter = [{
  path: '/index',
  component: Layout,
  redirect: '/index',
  children: [{
    path: '',
    component: () => import('@/pages/index'),
    name: 'Index',
    meta: {
      title: '首页',
      icon: 'table'
    }
  }]
}, {
  path: '/plan',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Plan',
  meta: {
    title: '计划管理',
    icon: 'table'
  },
  children: [{
    path: 'yearly-apply',
    component: () => import('@/pages/plan/yearly-apply'),
    name: 'Yearly-Apply',
    meta: { title: '年度计划申请' }
  }, {
    path: 'monthly-apply',
    component: () => import('@/pages/plan/monthly-apply'),
    name: 'Monthly-Apply',
    meta: { title: '月度计划申请' }
  }, {
    path: 'monthly-delivery',
    component: () => import('@/pages/plan/monthly-delivery'),
    name: 'Monthly-Delivery',
    meta: { title: '月度发货申请' }
  }, {
    path: 'delivery',
    component: () => import('@/pages/plan/delivery'),
    name: 'delivery',
    meta: { title: '实际发货' }
  }, {
    path: 'repertory',
    component: () => import('@/pages/plan/repertory'),
    name: 'repertory',
    meta: { title: '库存导入' }
  }]
}, {
  path: '/my',
  component: Layout,
  redirect: 'noRedirect',
  name: 'My',
  meta: {
    title: '我的工作台',
    icon: 'table'
  },
  children: [{
    path: 'yearly-view',
    component: () => import('@/pages/my/yearly-view'),
    name: 'Yearly-View',
    meta: { title: '年度计划申请查看' }
  }, {
    path: 'monthly-view',
    component: () => import('@/pages/my/monthly-view'),
    name: 'Monthly-View',
    meta: { title: '月度计划申请查看' }
  }, {
    path: 'delivery',
    component: () => import('@/pages/my/delivery'),
    name: 'delivery',
    meta: { title: '月度发货申请查看' }
  }, {
    path: 'yearly-audit',
    component: () => import('@/pages/my/yearly-audit'),
    name: 'Yearly-Audit',
    meta: { title: '年度申请审核' }
  }, {
    path: 'monthly-audit',
    component: () => import('@/pages/my/monthly-audit'),
    name: 'Monthly-Audit',
    meta: { title: '月度申请审核' }
  }]
}, {
  path: '/report',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Report',
  meta: {
    title: '报告',
    icon: 'table'
  },
  children: [{
    path: 'fcst',
    component: () => import('@/pages/report/fcst'),
    name: 'FCST',
    meta: { title: 'OC FCST汇总查询' }
  }, {
    path: 'actual',
    component: () => import('@/pages/report/actual'),
    name: 'Actual',
    meta: { title: 'OC 实际发货汇总查询' }
  }, {
    path: 'monthly',
    component: () => import('@/pages/report/monthly'),
    name: 'Monthly',
    meta: { title: '月度分析报告' }
  }]
}, {
  path: '/data',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Data',
  meta: {
    title: '主数据',
    icon: 'table'
  },
  children: [{
    path: 'oc',
    component: () => import('@/pages/data/oc'),
    name: 'OC',
    meta: { title: 'OC管理' }
  }, {
    path: 'oc-group',
    component: () => import('@/pages/data/oc-group'),
    name: 'OC-Group',
    meta: { title: 'OC组包管理' }
  }]
}, {
  path: '/config',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Config',
  meta: {
    title: '系统管理',
    icon: 'table'
  },
  children: [{
    path: 'permission',
    component: () => import('@/pages/config/permission'),
    name: 'Permission',
    meta: { title: '权限管理' }
  }, {
    path: 'schedule',
    component: () => import('@/pages/config/schedule'),
    name: 'Schedule',
    meta: { title: '年度设置' }
  }]
}]
export default pageRouter

import Layout from '@/modules/core/pages/layout'

const _import = require(`@/base/router/import_${process.env.NODE_ENV === 'development' ? 'development' : 'production'}`)

export default [
  {
    isModule: true,
    redirect: 'noredirect',
    name: 'cms',
    meta: {
      title: 'Demo模块'
    },
    children: [
      {
        root: false,
        path: '/demo',
        component: Layout,
        name: 'Demo',
        meta: {
          title: 'Demo示例',
          icon: 'ds-tongzhigonggao'
        },
        children: [
          {
            path: 'demo_list',
            component: _import('demo/pages/demo/list'),
            name: 'DemoList',
            meta: {
              title: '通用CRUD',
              btnList: [
                { code: '10001', title: '新增', icon: 'el-icon-plus' },
                { code: '10002', title: '查看', icon: 'el-icon-view' },
                { code: '10003', title: '编辑', icon: 'el-icon-edit' },
                { code: '10004', title: '隐藏', icon: 'el-icon-turn-off' },
                { code: '10005', title: '删除', icon: 'el-icon-delete' },
                { code: '10006', title: '批量隐藏' },
                { code: '10007', title: '批量删除' }
              ]
            }
          },
          {
            path: 'demo_add',
            component: _import('demo/pages/demo/add'),
            name: 'DemoAdd',
            hidden: true,
            meta: {
              title: '通用CRUD-新增'
            }
          },
          {
            path: 'demo_view/:id(\\d+)',
            hidden: true,
            component: _import('demo/pages/demo/view'),
            name: 'DemoView',
            meta: {
              title: '通用CRUD-详情'
            }
          },
          {
            path: 'demo_edit/:id(\\d+)',
            hidden: true,
            component: _import('demo/pages/demo/edit'),
            name: 'DemoEdit',
            meta: {
              title: '通用CRUD-编辑'
            }
          },
          {
            path: 'news_list',
            component: _import('demo/pages/news/list'),
            name: 'NewsList',
            meta: {
              title: '新闻发布'
            }
          }
        ]
      }
    ]
  }
]

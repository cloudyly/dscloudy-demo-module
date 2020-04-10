import Layout from '@/modules/core/pages/layout'

const _import = require(`@/base/router/import_${process.env.NODE_ENV === 'development' ? 'development' : 'production'}`)

export default [
  {
    isModule: true,
    redirect: 'noredirect',
    name: '{{moduleName}}',
    meta: {
      title: '{{componentName}}模块'
    },
    children: [
      {
        root: false,
        path: '/{{moduleName}}',
        component: Layout,
        name: '{{componentName}}',
        meta: {
          title: '{{componentName}}示例',
          icon: 'ds-tongzhigonggao'
        },
        children: [
          {
            path: '{{moduleName}}_list',
            component: _import('{{moduleName}}/pages/demo/list'),
            name: '{{componentName}}List',
            meta: {
              title: '{{componentName}}',
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
            path: '{{moduleName}}_add',
            component: _import('{{moduleName}}/pages/demo/add'),
            name: '{{componentName}}Add',
            hidden: true,
            meta: {
              title: '{{componentName}}-新增'
            }
          },
          {
            path: '{{moduleName}}_view/:id(\\d+)',
            hidden: true,
            component: _import('{{moduleName}}/pages/demo/view'),
            name: '{{componentName}}View',
            meta: {
              title: '{{componentName}}-详情'
            }
          },
          {
            path: '{{moduleName}}_edit/:id(\\d+)',
            hidden: true,
            component: _import('{{moduleName}}/pages/demo/edit'),
            name: '{{componentName}}Edit',
            meta: {
              title: '{{componentName}}-编辑'
            }
          }
        ]
      }
    ]
  }
]

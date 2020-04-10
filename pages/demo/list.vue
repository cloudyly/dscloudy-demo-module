<template>
  <dsc-page-panel>
    <dsc-search-area :cfg="searchAreaCfg"></dsc-search-area>
    <dsc-data-list :cfg="dataListCfg"></dsc-data-list>

    <dsc-dialog-delete ref="dialogDeleteRef"></dsc-dialog-delete>
  </dsc-page-panel>
</template>

<script>
import urls from '@/config/urls'

export default {
  name: 'DemoList',
  data () {
    return {
      dialogVisible: true,
      searchAreaCfg: {
        itemList: [
          { type: 'select', model: 'subCategory', label: '按子栏目名称', placeholder: '请选择子栏目', options: [{ label: '子栏目1', value: 'sc1' }, { label: '子栏目2', value: 'sc2' }] },
          { type: 'text', model: 'title', label: '按文章标题', placeholder: '请输入关键字' },
          { type: 'text', model: 'title', label: '按文章标题', placeholder: '请输入关键字' },
          { type: 'text', model: 'createUser', label: '按创建者', placeholder: '请输入关键字' }
        ]
      },
      dataListCfg: {
        url: urls.demo.demoList,
        selection: true,
        title: '通用CRUD',
        itemList: [
          { prop: 'category', label: '栏目名称', align: 'left', width: '80' },
          { prop: 'category', label: '子栏目', align: 'left', width: '80' },
          { prop: 'title', label: '标 题', align: 'left', width: '250' },
          { prop: 'title', label: '标 题', align: 'left', width: '250' },
          { prop: 'title', label: '标 题', align: 'left', width: '250' },
          { prop: 'title', label: '标 题', align: 'left', width: '250' },
          { prop: 'createUser', label: '创建者', align: 'left', width: '80' },
          { prop: 'createOrg', label: '所属组织', align: 'left', width: '80' },
          { prop: 'createTime', label: '创建日期', align: 'left', width: '100' },
          { prop: 'createArea', label: '所属地区', align: 'left', width: '80' },
          {
            label: '操作',
            fixed: 'right',
            width: '150',
            needAcl: true,
            func: (data) => {
              return {
                /* 查看 */ 10002: true,
                /* 编辑 */ 10003: true,
                /* 隐藏 */ 10004: true,
                /* 删除 */ 10005: true
              }
            },
            btnList: [
              /* 查看 */ { code: '10002', func: this.onBtnViewClick },
              /* 编辑 */ { code: '10003', func: this.onBtnEditClick },
              /* 隐藏 */ { code: '10004', func: this.tempFn },
              /* 删除 */ { code: '10005', func: this.onBtnDeleteClick }
            ]
          }
        ],
        selectedBtnList: [
          /* 批量隐藏 */ { code: '10006', func: this.tempFn },
          /* 批量删除 */ { code: '10007', func: this.tempFn }
        ],
        toolbar: {
          btnList: [
            /* 发布新内容 el-icon-plus */{ code: '10001', click: this.onBtnAddClick }
          ]
        }
      }
    }
  },
  created () {
  },
  methods: {
    tempFn (item) {
      console.log(item)
    },
    onBtnAddClick () {
      this.$router.push({
        path: '/demo/demo_add'
      })
    },
    onBtnDeleteClick (item) {
      this.$refs.dialogDeleteRef.show(item, () => {
        console.log('确定删除', item)
      })
    },
    onBtnEditClick (item) {
      this.$router.push({
        path: `/demo/demo_edit/${item.id}`
      })
    },
    onBtnViewClick (item) {
      this.$router.push({
        path: `/demo/demo_view/${item.id}`
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>

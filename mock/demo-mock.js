import Mock from 'mockjs'
import urls from '@/config/urls'

Mock.mock(urls.{{moduleName}}.demoList, 'post', () => {
  return require('./json/demo-list')
})
Mock.mock(RegExp(urls.{{moduleName}}.demoDetails + '/.*'), 'get', () => {
  return require('./json/demo-details')
})

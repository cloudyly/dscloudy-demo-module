import Mock from 'mockjs'
import urls from '@/config/urls'

Mock.mock(urls.demo.demoList, 'post', () => {
  return require('./json/demo-list')
})
Mock.mock(RegExp(urls.demo.demoDetails + '/.*'), 'get', () => {
  return require('./json/demo-details')
})

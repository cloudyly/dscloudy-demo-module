import { get } from '@/base/axios'
import urls from '@/config/urls'

/** 查看详情 */
export const getDetails = id => get(`${urls.demo.demoDetails}/${id}`)

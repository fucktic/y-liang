import request from '@/utils/request'

// 查询杭州卫健人口
export const getHzsWjrkList = (params) => {
  return request({
    url: '/api-ylyx/dp/hzsWjrk/list',
    params
  })
}
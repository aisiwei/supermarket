//封装对首页的所有请求
import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/test/getBanners'
  });

}

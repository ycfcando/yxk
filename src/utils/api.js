import http from './http';

//mine接口
export function getMine(url, params) {
  return http.get('/api/lines/userrecommends', params);
}



export function getHotList(url, params) {
  return http.get('https://www.fastmock.site/mock/141b01ad0a4a46db6d5c4c5b1d9a899b/yxk/meet/hotlist', params);
}

export function getTopicList(url, params) {
  return http.get('https://www.fastmock.site/mock/141b01ad0a4a46db6d5c4c5b1d9a899b/yxk/meet/topiclist', params);
}

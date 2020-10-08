import http from './http';

//mine接口
export function getMine(url, params) {
  return http.get('https://www.fastmock.site/mock/7ae3547b41ba9b838aa668af3ad08107/mine/mine', params);
}
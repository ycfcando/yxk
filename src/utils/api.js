import http from './http';

//mine接口
export function getMine(url, params) {
  return http.get('/api/lines/userrecommends', params);
}
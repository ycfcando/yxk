import http from './http';

//mine接口
export function getMine(url, params) {
  return http.get('/api/lines/userrecommends', params);
}

//travel
export function getTravel(url, params) {
  return http.get('api/channel/around?sitecode=1&city_id=1', params);
}
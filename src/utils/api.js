import http from './http';

//mine接口
export function getMine(url, params) {
  return http.get('/api/lines/userrecommends', params);
}

<<<<<<< HEAD
//travel
export function getTravel(url, params) {
  return http.get('api/channel/around?sitecode=1&city_id=1', params);
}
=======
//index接口
export function getIndex(url, params) {
  return http.get('/api/index/part?sitecode=1&city_id=1&refreshCount=22'
  ,params);
}

export function getIcon(url, params) {
  return http.get('https://www.fastmock.site/mock/1d71d87c3a2d4152c68f482edea69d83/yxk/index/icon'
  ,params);
}

export function getFlow(url, params) {
  return http.get('/api/index/flowrecommend', params);
}


//travel
export function getTravel(url, params) {
  return http.get('/api/channel/around?sitecode=1&city_id=1'
  ,params);
}
>>>>>>> bdf93d8b9efe9e0b5b32c979eb23a4af9481b0bb

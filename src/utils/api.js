import http from "./http";

//mine接口
export function getMine(url, params) {
  return http.get("/api/lines/userrecommends", params);
}

//index接口
export function getIndex(url, params) {
  return http.get(
    "/api/index/part?sitecode=1&city_id=1&refreshCount=22",
    params
  );
}

export function getIcon(url, params) {
  return http.get(
    "https://www.fastmock.site/mock/1d71d87c3a2d4152c68f482edea69d83/yxk/index/icon",
    params
  );
}

export function getFlow(url, params) {
  return http.get("/api/index/flowrecommend", params);
}

export function getDetailInfo(url, params) {
  return http.get("/api/lines/lineStatus", params);
}

//travel
//同城游
export function getTravelT(url, params) {
  return http.get("/api/channel/around?sitecode=1&city_id=1", params);
}

//国内游
export function getTravelG(url, params) {
  return http.get("api/channel/cn?sitecode=1&city_id=1", params);
}
//出境游
export function getTravelC(url, params) {
  return http.get("api/channel/en?sitecode=1&city_id=1", params);
}

//遇见数据1
export function getHotList(url, params) {
  return http.get('https://www.fastmock.site/mock/141b01ad0a4a46db6d5c4c5b1d9a899b/yxk/meet/hotlist', params);
}
//遇见数据2
export function getTopicList(url, params) {
  return http.get('https://www.fastmock.site/mock/141b01ad0a4a46db6d5c4c5b1d9a899b/yxk/meet/topiclist', params);
}
// mine页面请求数据
export function getBanner(params) {
    return http.get('/api/lines/userrecommends', params)
}

//login
export function getYzm(params) {
  return http.post('http://www.pudge.wang:3001/register/getCode', params)
}

export function login(params) {
  return http.post('http://www.pudge.wang:3001/register', params)
}

// 社区
export function getComtabs(params) {
  return http.post('https://www.fastmock.site/mock/141b01ad0a4a46db6d5c4c5b1d9a899b/yxk/community', params)
}


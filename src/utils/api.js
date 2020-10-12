import http from './http';

// 我的页面请求数据
export function getBanner(params) {
    return http.get('/api/lines/userrecommends', params)
}
// 详情页数据
export function getDetailInfo(data) {
    return http.get('/api/lines/lineStatus', data)
}
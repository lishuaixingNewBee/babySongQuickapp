export function getNewsList(cid, page_token = 1) {
    const params = {
        app_id: 9567,
        cid: cid,
        page_token,
        c: 1,
    }
    return $http.get('/v2/article', params)
}
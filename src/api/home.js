export function getVideoList() {
    return $http.get('/v1/card_list', {
        label: `kid_kyy_video_baobaokan`
    })
}
export function getMusicList() {
    return $http.get('/v1/card_list', {
        label: `kid_kyy_video_baobaoting`
    })
}
export function appConfig(params) {
    return $http.get('/v1/flexibleConfig', {
        vcode: 9527,
        app_id: `b9527`
    })
}
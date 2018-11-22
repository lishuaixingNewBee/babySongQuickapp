export function getData(label, page_no = 1, page_size = 0) {
    const params = {
        page_no,
        page_size,
        label
    }
    return $http.get('/v1/card_list', params)
}
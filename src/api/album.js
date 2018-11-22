export function getAlbum(album_id, page_no = 1, page_size = 0) {
    const params = {
        album_id,
        page_no,
        page_size
    }
    return $http.get('/v1/album', params)
}
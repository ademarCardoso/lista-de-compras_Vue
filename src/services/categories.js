import http from './http'

export default {
  getAll: () => http.get('/categories'),
  getOne: id => http.get(`/categories/${id}`)
}

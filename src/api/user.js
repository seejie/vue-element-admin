import request from '@/utils/request'

export function login(data) {
  // todo
  return request({
    url: '/vue-element-admin/user/login',
    // url: 'user/Login' + data,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

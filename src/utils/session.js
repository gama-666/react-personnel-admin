const adminToken = 'adminToken'

//存储token
export function setToken(value) {
    sessionStorage.setItem(adminToken, value)
}
//获取token
export function getToken(value) {
   return sessionStorage.getItem(adminToken)
}
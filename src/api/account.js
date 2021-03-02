import service from "../utils/request";

/*
*登录接口
*/
export function Login(data = {}) {
    return service.request({
        url: `${process.env.REACT_APP_API}/login/`,
        method: "POST",
        data,  //请求类型为post时
        // params: data 请求类型为get时
    })
}
/*
*获取验证码
*/
export function GetSms(data = {}) {
    return service.request({
        url: `${process.env.REACT_APP_API}/getSms/`,
        method: "POST",
        data,
    })
}
/*
*注册
*/
export function Register(data = {}) {
    return service.request({
        url: `${process.env.REACT_APP_API}/register/`,
        method: "POST",
        data,
    })
}
import service from "../utils/request";

/*
*新增部门接口
*/
export function DepartmentAdd(data = {}) {
    return service.request({
        url: `${process.env.REACT_APP_API}/department/add/`,
        method: "POST",
        data,  //请求类型为post时
        // params: data 请求类型为get时
    })
}
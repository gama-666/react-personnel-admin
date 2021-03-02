
import React from 'react'
/*私有化路由组件 */

// 引入路由
import { Route, Redirect } from 'react-router-dom';
//获取token
import { getToken } from "../../utils/session"


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={(props) => (
            getToken() ? <Component {...props} /> : <Redirect to='/' />
        )
        } />
)

export default PrivateRoute; 
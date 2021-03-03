import { UserOutlined, } from '@ant-design/icons';
const Router = [
    {
        title: "控制台",
        icon: <UserOutlined />,
        key: "/index",
    },
    {
        title: "用户管理",
        icon: <UserOutlined />,
        key: "/index/user",
        child: [
            {
                title: "用户列表",
                icon: <UserOutlined />,
                key: "/index/user/list",
            },
            {
                title: "添加用户",
                icon: <UserOutlined />,
                key: "/index/user/add",
            }
        ]
    },
    {
        title: "部门管理",
        icon: <UserOutlined />,
        key: "/index/department",
        child: [
            {
                title: "用户列表",
                icon: <UserOutlined />,
                key: "/index/department/list",
            },
            {
                title: "添加用户",
                icon: <UserOutlined />,
                key: "/index/department/add",
            }
        ]
    },
    {
        title: "职位管理",
        icon: <UserOutlined />,
        key: "/index/position",
        child: [
            {
                title: "用户列表",
                icon: <UserOutlined />,
                key: "/index/position/list",
            },
            {
                title: "添加用户",
                icon: <UserOutlined />,
                key: "/index/position/add",
            }
        ]
    },
    {
        title: "请假",
        icon: <UserOutlined />,
        key: "/index/leave",
    },
    {
        title: "加班",
        icon: <UserOutlined />,
        key: "/index/work",
    },
]

export default Router;
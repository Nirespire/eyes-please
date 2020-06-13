import React from 'react'
import { Menu } from 'antd'


function Navbar() {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Pull Requests</Menu.Item>
            <Menu.Item key="2">Analytics</Menu.Item>
            <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
    )
}

export default Navbar;
import React from 'react'
import { Menu } from 'antd'
import {
    Link
} from "react-router-dom";


function Navbar() {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Pull Requests</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/analytics">Analytics</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/settings">Settings</Link></Menu.Item>
        </Menu>
    )
}

export default Navbar;
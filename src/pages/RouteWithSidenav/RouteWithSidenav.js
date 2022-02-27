import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Dashboard from "../Dashboard/Dashboard";
import Catalog from "../Catalog/Catalog";
import Environments from "../Environments/Environments";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Sidenav = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh', overflow: "hidden" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo" />
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Catalog
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                        Environments
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                        <NavLink to="/steps">
                            <div>Steps</div>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />}>
                            </Route>
                            <Route path="/catalog" element={<Catalog />}>
                            </Route>
                            <Route path="/environments" element={<Environments />}>
                            </Route>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );

}

export default Sidenav;
import {
	DesktopOutlined,
	PieChartOutlined, TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Dashboard from "../Dashboard/Dashboard";
import Environments from "../Environments/Environments";
import styles from './RouteWithSidenav.module.less';

const { Header, Content, Footer, Sider } = Layout;

const RouteWithSidenav = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout style={{ minHeight: '100vh', overflow: "hidden" }}>
			<Sider theme={'dark'} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
				<div className={styles.logo} />
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1" icon={<PieChartOutlined />}>
						<NavLink to="/dashboard">
							<div>Dashboard</div>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2" icon={<DesktopOutlined />}>
						<NavLink to="/catalog">
							<div>Catalog</div>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="3" icon={<TeamOutlined />}>
						<NavLink to="/environments">
							<div>Environments</div>
						</NavLink>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className={styles.siteLayoutBackground} style={{ padding: 0 }} />
				<Content className={styles.siteLayoutContent}>
					<div className={styles.siteLayoutBackground} style={{ padding: 24, minHeight: 360 }}>
						<Routes>
							<Route path="/dashboard" element={<Dashboard />}>
							</Route>
							<Route path="/catalog" element={<Catalog />}>
							</Route>
							<Route path="/environments" element={<Environments />}>
							</Route>
							<Route path="/*" element={<Dashboard />}>
							</Route>
						</Routes>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
}

export default RouteWithSidenav;
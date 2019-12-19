import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

function MainMenuClick(e) {
    localStorage.setItem('defaultOpenKeys', e.keyPath[1]);
}

const MainLinkMenu = withRouter(props => {
    const { location } = props;
    console.log('This is Location :', location);
    let openedSubMenu = localStorage.getItem('defaultOpenKeys') ? localStorage.getItem('defaultOpenKeys') : '';
    return (
        <Menu theme={'dark'} mode="inline" defaultOpenKeys={[openedSubMenu]} selectedKeys={[location.pathname]} onClick={(e) => MainMenuClick(e)}>
            <Menu.Item key={['/home']}>
                <Icon type="home" />
                <span>Home</span>
                <Link to="/home" />
            </Menu.Item>
            <Menu.Item key={"/dashboard"}>
                <Icon type="desktop" />
                <span>Dashboard</span>
                <Link to={'/dashboard'} />
            </Menu.Item>
            <SubMenu key={"adminSubMenu"}
                title={<span>
                    <Icon type="desktop" />
                    <span>Administration</span>
                </span>}>
                <Menu.Item key={"/client-management"}>
                    <Link to={'/client-management'}>Cleint Management</Link>
                </Menu.Item>
                <Menu.Item key={"/role-management"}>
                    <Link to={'/role-management'}>Role Management</Link>
                </Menu.Item>
                <Menu.Item key={"/manage-users"}>
                    <Link to={'/manage-users'}>User Management</Link>
                </Menu.Item>
                <Menu.Item key={"/manage-clusters"}>
                    <Link to={'/manage-clusters'}>Cluster Management</Link>
                </Menu.Item>
                <Menu.Item key={"/report-groups"}>
                    <Link to={'/report-groups'}>Report Groups</Link>
                </Menu.Item>
                <Menu.Item key={"/program-groups"}>
                    <Link to={'/program-groups'}>Program Groups</Link>
                </Menu.Item>
                <Menu.Item key={"/file-tracker-charts"}>
                    <Link to={'/file-tracker-charts'}>File Tracker</Link>
                </Menu.Item>
                <Menu.Item key={"/audit-logs"}>
                    <Link to={'/audit-logs'}>Audit Logs</Link>
                </Menu.Item>
                <Menu.Item key={"/manage-api-keys"}>
                    <Link to={'/manage-api-keys'}>Manage API keys</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key={"reportSubMenu"}
                title={<span>
                    <Icon type="desktop" />
                    <span>Reports</span>
                </span>}>
                <Menu.Item key={"/reports-management"}>
                    <Link to={'/reports-management'}>Reports Management</Link>
                </Menu.Item>
                <Menu.Item key={"/view-reports"}>
                    <Link to={'/view-reports'}>View Reports</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key={"caseSubMenu"}
                title={<span>
                    <Icon type="desktop" /><span>Case Management</span>
                </span>}>
                <Menu.Item key={"/reason-codes"}>
                    <Link to={'/reason-codes'}>Reason Codes</Link>
                </Menu.Item>
                <Menu.Item key={"/manage-alerts"}>
                    <Link to={'/manage-alerts'}>Manage Alerts</Link>
                </Menu.Item>
                <Menu.Item key={"/manage-cases"}>
                    <Link to={'/manage-cases'}>Cases</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key={"/bulk-extract"}>
                <Icon type="home" />
                <span>Bulk Extract</span>
                <Link to={'/bulk-extract'} />
            </Menu.Item>
            <SubMenu key={"WatchlistSubMenu"}
                title={<span>
                    <Icon type="desktop" /><span>Watchlist</span>
                </span>}>
                <Menu.Item key={"/account-watchlist"}>
                    <Link to={'/account-watchlist'}>Account</Link>
                </Menu.Item>
                <Menu.Item key={"/account-holder-watchlist"}>
                    <Link to={'/account-holder-watchlist'}>Account Holder</Link>
                </Menu.Item>
                <Menu.Item key={"/merchant-watchlist"}>
                    <Link to={'/merchant-watchlist'}>Merchant</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key={"/314-management"}>
                <Icon type="home" />
                <span>314(a) Management</span>
                <Link to={'/314-management'} />
            </Menu.Item>
            <Menu.Item key={"/program-matrix"}>
                <Icon type="home" />
                <span>Program matrix</span>
                <Link to={'/program-matrix'} />
            </Menu.Item>
            <SubMenu key="kycSubMenu"
                title={<span>
                    <Icon type="dashboard" theme="outlined" />
                    <span>KYC</span>
                </span>}>
                <Menu.Item key={"/kyc-validator"}>
                    <Link to={'/kyc-validator'}>KYC Validator</Link>
                </Menu.Item>
                <Menu.Item key={"/risk-indicators"}>
                    <Link to={'/risk-indicators'}>Risk Indicators</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
});

export default MainLinkMenu;
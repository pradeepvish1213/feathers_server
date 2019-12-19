import LOGO_IMG from './../assets/logo_transparent.png';
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Form } from 'antd';
import { HomeContainer, DashboardContainer } from './index';
import MainLinkMenu from '../components/LeftSideMenu';
const { Header, Content, Footer, Sider } = Layout;

class MainLayoutContainer extends Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Fragment>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo text-center padding-5">
                            <img width={65} src={LOGO_IMG} />
                        </div>
                        <MainLinkMenu />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <div style={{ margin: '16px 0' }}></div>
                            <div style={{ padding: 24, background: '#fff', minHeight: '84vh' }}>
                                <Route exact path="/home" component={HomeContainer} />
                                <Route exact path="/dashboard" component={DashboardContainer} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {}
}

const WrappedMainLayoutForm = Form.create({ name: '_main_layout' })(MainLayoutContainer);


const Container = connect(mapStateToProps)(WrappedMainLayoutForm);

export { Container as MainLayoutContainer };
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Layout, Avatar } from 'antd'

import SiderMenu from '../ui/sidermenu'
import Nav from "./nav"

const { Content, Sider } = Layout;

class BaseView extends Component {

    constructor(props) {

        super(props);

        // this.udpate = false;

        this.state = {
            pluginStatus: {}
        }

    }

    componentWillMount() {

        this.componentOnMount();

    }

    componentOnMount() {

    }

    updateSlider(pluginStatus) {

        this.setState({
            pluginStatus: pluginStatus
        });

    }

    renderSider() {

        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zIndex: 1 }}>
                <SiderMenu routepath={this.props.location.pathname} pluginStatus={this.state.pluginStatus} />
            </Sider>
        );

    }


    renderMain() {

        return ('');

    }

    render() {

        return (
            <div id="g_body" ref={(viewContainer) => { this.viewContainer = viewContainer }}>
                <Layout>
                    {this.renderSider()}
                    <Content style={{ paddingLeft: 200, minWidth: 1180 }}>
                        <Nav></Nav>
                        {this.renderMain()}
                    </Content>
                </Layout>
            </div>
        );
    }
}

BaseView.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = BaseView;
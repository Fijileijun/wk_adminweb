import '../node_modules/antd/dist/antd.css'

import '../less/private.less'

import BaseApp from './core/app.base'

class App extends BaseApp {
    constructor(props) {

        super(props);

        this.config = {
            routes: [
                {
                    path: __mei_wei__.env.basepath + '/',
                    getComponents(nextState, cb) {
                        require.ensure([], (require) => {
                            var page = require('./views/general/dashboard.js');
                            cb(null, page)
                        }, 'views/general/dashboard')
                    },
                },
                // 用户管理路由

                {
                    path: __mei_wei__.env.basepath + '/user_manager/user_list',
                    getComponents(nextState, cb) {
                        require.ensure([], (require) => {
                            var page = require('./views/user_manager/user_list/index.js');
                            cb(null, page)
                        }, 'views/user_manager/user_list')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/user_manager/operation_log',
                    getComponents(nextState, cb) {
                        require.ensure([], (require) => {
                            var page = require('./views/user_manager/operation_log');
                            cb(null, page)
                        }, 'views/user_manager/operation_log')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/login',
                    getComponents(nextState, cb) {
                        require.ensure([], (require) => {
                            var page = require('./views/login.js');
                            cb(null, page)
                        }, 'views/login')
                    },
                },

                {
                    path: __mei_wei__.env.basepath + '/general/dashboard',//概况
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/general/dashboard.js');
                            cb(null, page)
                        }, 'views/general/dashboard')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/plugin_manager/plugin_general',//插件概况
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/plugin_manager/plugin_general.js');
                            cb(null, page)
                        }, 'views/plugin_manager/plugin_general')
                    },
                },

                {
                    path: __mei_wei__.env.basepath + '/router_manager/host_manage',//host管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/router_manager/host_manage.js');
                            cb(null, page)
                        }, 'views/router_manager/host_manage')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/router_manager/gateway_manage',//网关管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/router_manager/gateway_manage/');
                            cb(null, page)
                        }, 'views/router_manager/gateway_manage')
                    },
                },

                {
                    path: __mei_wei__.env.basepath + '/router_manager/route_group',//api路由组管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/router_manager/route_group.js');
                            cb(null, page)
                        }, 'views/router_manager/route_group')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/router_manager/gray_divide',//AB分流器
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/router_manager/gray_divide.js');
                            cb(null, page)
                        }, 'views/router_manager/gray_divide')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/plugin_manager/firewall',//防火墙管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/plugin_manager/firewall.js');
                            cb(null, page)
                        }, 'views/plugin_manager/firewall')
                    },
                }, {
                    path: __mei_wei__.env.basepath + '/plugin_manager/firewall_isolated',//防火墙选择器管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/plugin_manager/firewall_isolated.js');
                            cb(null, page)
                        }, 'views/plugin_manager/firewall_isolated')
                    },
                },
                {
                    path: __mei_wei__.env.basepath + '/plugin_manager/property_ratelimit',//特征限速管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/plugin_manager/property_ratelimit.js');
                            cb(null, page)
                        }, 'views/plugin_manager/property_ratelimit')
                    },
                }, {
                    path: __mei_wei__.env.basepath + '/plugin_manager/property_isolated',//特征限速管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/plugin_manager/property_isolated.js');
                            cb(null, page)
                        }, 'views/plugin_manager/property_isolated')
                    },
                }, {
                    path: __mei_wei__.env.basepath + '/plugin_manager/anti_sql_injection',//特征限速管理
                    getComponents(nextState, cb) {

                        require.ensure([], (require) => {
                            var page = require('./views/plugin_manager/anti_sql_injection.js');
                            cb(null, page)
                        }, 'views/plugin_manager/anti_sql_injection')
                    },
                },


            ],

            rooter: 'appview',
            routerType: "browser"
        }

    }
}


/**
 * 增加一个图片资源路径，解决img 中引用图片的资源图片的问题
 * */
__mei_wei__ && __mei_wei__["env"] && (function () {

    var env = __mei_wei__["env"];

    if (env.environment.toLowerCase() == "dev") {
        env["imgPath"] = location.origin + "/public/static/img/";
    }

})();

var app = new App();

app.start();

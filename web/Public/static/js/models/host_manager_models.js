import BaseModel from '../core/model.base'

/*
    hsot 列表
 */
class HostListModel extends BaseModel {
    constructor(props) {
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'host/query';
        this.method = 'GET';
    }
}

class HostQPSModel extends BaseModel {
    constructor(props) {
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'host/set_limit_count';
        this.method = 'POST';
    }
}

/*
    gateway 列表
 */
class GatewayListModel extends BaseModel {
    constructor(props) {
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'gateway/query';
        this.method = 'GET';
    }
}

/*
    启禁用
 */
class ToggleStatusModel extends BaseModel {
    constructor(props) {
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'host/enable';
        this.method = 'POST';
    }
}

module.exports = {
    HostListModel: HostListModel,
    GatewayListModel: GatewayListModel,
    ToggleStatusModel: ToggleStatusModel,
    HostQPSModel: HostQPSModel
};
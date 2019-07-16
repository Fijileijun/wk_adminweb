import BaseModel  from '../core/model.base'
/*
	防火墙列表
*/
class FirewallListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/query_waf' ;
		this.method = 'GET';

	}
}

/*
	删除防火墙
*/
class DelFirewallModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/delete_waf' ;

	}

}
/*
	新增防火墙
	
*/
class AddFirewallModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/create_waf' ;

	}

}

/*
	编辑防火墙
	
*/
class EditFirewallModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/update_waf' ;

	}

}

/*
	启禁用防火墙

*/
class UpdateEnableModel extends BaseModel {

    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'waf/update_enable' ;

    }

}

/*
	查询防火墙规则列表
	
*/
class FwRuleListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/query_condition' ;
		this.method = 'GET';

	}

}
/*
	新增防火墙规则列表
	
*/
class AddFwRuleModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/create_condition';

	}

}
/*
	编辑防火墙规则列表
	
*/
class EditFwRuleModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/updated_condition';

	}

}
/*
	删除防火墙规则列表  跟据条件ID
	
*/
class DelFwRuleModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/delete_condition_by_id' ;

	}

}
/*
	删除防火墙规则列表 跟据防火墙ID
	
*/
class DelFwRuleByFwIdModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/delete_condition_by_waf_id' ;

	}

}

/*
	查看某一天防火墙拒绝记录
	
*/
class IsolatedByFwModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'waf/query_judge_record' ;
		this.method = 'GET';

	}

}




module.exports = {
	FirewallListModel: FirewallListModel,
	DelFirewallModel: DelFirewallModel,
	AddFirewallModel: AddFirewallModel,
	EditFirewallModel: EditFirewallModel,
	IsolatedByFwModel: IsolatedByFwModel,

	FwRuleListModel: FwRuleListModel,
	AddFwRuleModel: AddFwRuleModel,
	EditFwRuleModel: EditFwRuleModel,
	DelFwRuleModel: DelFwRuleModel,
	DelFwRuleByFwIdModel: DelFwRuleByFwIdModel,
    UpdateEnableModel:UpdateEnableModel

};
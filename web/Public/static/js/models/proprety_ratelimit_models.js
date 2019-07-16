import BaseModel  from '../core/model.base'
/*
	特征限速列表
*/
class PropretyListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/query';
		this.method = 'GET';

	}

}

/*
	查询被阻止访问的特征列表
*/
class BlockedListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/blocked/list';
		this.method = 'GET';

	}

}

/*
	查询被限速访问的特征列表
*/
class LimitListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/limit/list';
		this.method = 'GET';

	}

}



/*
	添加特征限速
*/
class AddPropretyLimitModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/add';

	}

}

/*
	删除特征限速
*/
class DelPropretyLimitModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/delete';

	}

}

/*
	编辑特征限速
	
*/
class EditPropretyLimitModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/update';

	}

}

/*
	启禁用特征防刷
*/
class UpdateEnableModel extends BaseModel {

    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/update_enable';

    }

}

// 删除特征信息接口
class DeleteRespTemplate extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/delete_detail';

	}

}

// 增加特征信息接口
class AddRespTemplate extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/add_detail'

	}

}

// 编辑特征信息接口
class EditRespTemplate extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'property_rate_limit/update_detail'

	}

}

module.exports = {
	PropretyListModel: PropretyListModel,
	DelPropretyLimitModel: DelPropretyLimitModel,
	AddPropretyLimitModel: AddPropretyLimitModel,
	EditPropretyLimitModel: EditPropretyLimitModel,

	BlockedListModel: BlockedListModel,
	LimitListModel: LimitListModel,
    UpdateEnableModel:UpdateEnableModel,

	DeleteRespTemplate,
	AddRespTemplate,
	EditRespTemplate
};
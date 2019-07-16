import BaseModel  from '../core/model.base'
/*
	路由组列表
*/
class ApiGroupListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'api_router/query_api_group' ;
		this.method = 'GET';

	}

}

class SimpleGroupQueryModel extends BaseModel{
    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'api_router/query_simple_group_info' ;
        this.method = 'GET';

    }
}

/*
	路由组列表（带限速信息）
*/
class ApiGroupRateListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'api_router/query_api_group_rate_limit' ;
		this.method = 'GET';

	}

}

/*
	删除路由组
*/
class DelApiGroupModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'api_router/delete_api_group' ;

	}

}
/*
	新增路由组
	
*/
class AddApiGroupModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'api_router/add_api_group' ;

	}

}

/*
	编辑路由组
	
*/
class EditApiGroupModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'api_router/update_api_group' ;

	}

}

/*
	编辑路由组

*/
class EnableApiGroupModel extends BaseModel {


    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'api_router/enable_api_group' ;

    }

}

/*
	查询路由组限速列表
	
*/
class ApiGroupRateLimitListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'group_rate_limit/get/' ;
		this.method = 'GET';

	}

}
/*
	新增路由组限速列表
	
*/
class AddGroupRateLimitModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'group_rate_limit/add' ;

	}

}
/*
	编辑路由组限速列表
	
*/
class EditGroupRateLimitModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'group_rate_limit/update';

	}

}
/*
	删除路由组限速列表
	
*/
class DelGroupRateLimitModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'group_rate_limit/delete'

	}

}

class AddGroupTargetModel extends BaseModel {
	constructor(props) {
		super(props)
		this.url = __mei_wei__.env.restfulapi + 'api_router/add_target'
	}
}

class UpdateGroupTargetModel extends BaseModel {
	constructor(props) {
		super(props)
		this.url = __mei_wei__.env.restfulapi + 'api_router/update_target'
	}
}

class DeleteGroupTargetModel extends BaseModel {
	constructor(props) {
		super(props)
		this.url = __mei_wei__.env.restfulapi + 'api_router/delete_target'
	}
}

/*
	启禁用target
*/
class EnableTargetModel extends BaseModel {


    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'api_router/enable_target' ;

    }

}

module.exports = {
	ApiGroupListModel: ApiGroupListModel,
	ApiGroupRateListModel: ApiGroupRateListModel,
	DelApiGroupModel: DelApiGroupModel,
	AddApiGroupModel: AddApiGroupModel,
	EditApiGroupModel: EditApiGroupModel,
    EnableApiGroupModel:EnableApiGroupModel,
    SimpleGroupQueryModel:SimpleGroupQueryModel,

	ApiGroupRateLimitListModel: ApiGroupRateLimitListModel,
	AddGroupRateLimitModel: AddGroupRateLimitModel,
	EditGroupRateLimitModel: EditGroupRateLimitModel,
	DelGroupRateLimitModel: DelGroupRateLimitModel,

	AddGroupTargetModel,
	UpdateGroupTargetModel,
	DeleteGroupTargetModel,
    EnableTargetModel
};
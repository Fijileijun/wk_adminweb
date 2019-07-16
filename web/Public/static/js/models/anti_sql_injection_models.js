import BaseModel  from '../core/model.base'

/*
	sql防控列表
*/
class AntiSqlInjectionListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/query';
		this.method = 'GET';

	}

}

/*
	sql防控创建
*/
class AntiSqlInjectionCreateModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/create';
		this.method = 'POST';

	}

}

/*
	sql 防控更新
*/
class AntiSqlInjectionUpdateModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/update';
		this.method = 'POST';

	}

}



/*
	sql 防控删除
*/
class AntiSqlInjectionDeleteModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/delete';

	}

}

/*
	sql 防控启禁用
*/
class AntiSqlInjectionUpdateEnableModel extends BaseModel {

    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/update_enable';

    }

}

/*
	防控参数添加
*/
class ASICOParameterCreateModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/co_parameter/create';

	}

}

/*
	防控参数修改
	
*/
class ASICOParameterUpdateModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/co_parameter/update';

	}

}

/*
	防控参数删除
*/
class ASICOParameterDeleteModel extends BaseModel {

    constructor(props) {

        super(props);

        this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/co_parameter/delete';

    }

}

// 删除特征信息接口
class ASICOParameterQueryModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'anti_sql_injection/co_parameter/query';

	}

}

module.exports = {
    AntiSqlInjectionListModel: AntiSqlInjectionListModel,
    AntiSqlInjectionCreateModel: AntiSqlInjectionCreateModel,
    AntiSqlInjectionUpdateModel: AntiSqlInjectionUpdateModel,
    AntiSqlInjectionDeleteModel: AntiSqlInjectionDeleteModel,
    AntiSqlInjectionUpdateEnableModel:AntiSqlInjectionUpdateEnableModel,

    ASICOParameterCreateModel: ASICOParameterCreateModel,
    ASICOParameterUpdateModel: ASICOParameterUpdateModel,
    ASICOParameterDeleteModel:ASICOParameterDeleteModel,
    ASICOParameterQueryModel:ASICOParameterQueryModel
};
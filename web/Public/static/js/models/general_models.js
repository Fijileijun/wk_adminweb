import BaseModel  from '../core/model.base'
/*
	概况报表
*/
class DashboardListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'dashboard/show' ;
		this.method = 'GET';

	}

}

/*
	登陆接口
*/
class LoginModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'login' ;
		// this.method = 'GET';

	}

}




module.exports = {
	DashboardListModel:DashboardListModel,
	LoginModel:LoginModel
};
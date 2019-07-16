import BaseModel  from '../core/model.base'
/*
	插件列表
*/
class PluginListModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi + 'plugins' ;
		this.method = 'GET';

		this.notParallelism = false;

	}

}

/*
	切换插件状态
*/
class TogglePluginEnableModel extends BaseModel {

	constructor(props) {

		super(props);

		this.url = __mei_wei__.env.restfulapi;

	}

}


module.exports = {
	PluginListModel:PluginListModel,
	TogglePluginEnableModel:TogglePluginEnableModel
};
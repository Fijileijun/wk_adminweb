import BaseModel from '../core/model.base'

/*
	用户查询列表
*/
export class LogListModel extends BaseModel {

  constructor(props) {

    super(props);

    this.url = __mei_wei__.env.restfulapi + 'query_user_log';
    this.method = 'GET';

  }

}
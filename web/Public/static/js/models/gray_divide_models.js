import BaseModel from '../core/model.base'


class GrayDivideQueryModel extends BaseModel {
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'gray_divide/query';
        this.method = 'GET';
    }
}


class GrayDivideAdddModel extends BaseModel {
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'gray_divide/add';
        //this.contentType ="application/json";

        this.method = 'POST';
    }
}


class GrayDivideUpdateModel extends BaseModel {
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'gray_divide/update';
        this.method = 'POST';
    }
}

class GrayDivideDeleteModel extends BaseModel {
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'gray_divide/delete';
        this.method = 'POST';
    }
}


class GrayDivideEnableModel extends BaseModel {
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'gray_divide/enable';
        this.method = 'POST';
    }
}


class TargetsQueryModel extends BaseModel {
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'api_router/query_target';
        this.method = 'GET';
    }
}

class ConditionAddModel extends BaseModel{
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'selector_condition/add';
        this.method = 'POST';
    }
}

class ConditionUpdateModel extends BaseModel{
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'selector_condition/update';
        this.method = 'POST';
    }
}

class ConditionDeleteModel extends BaseModel{
    constructor(props){
        super(props);
        this.url = __mei_wei__.env.restfulapi + 'selector_condition/delete_by_id';
        this.method = 'POST';
    }
}

module.exports={
    GrayDivideQueryModel:GrayDivideQueryModel,
    GrayDivideAdddModel:GrayDivideAdddModel,
    GrayDivideUpdateModel:GrayDivideUpdateModel,
    GrayDivideDeleteModel:GrayDivideDeleteModel,
    GrayDivideEnableModel:GrayDivideEnableModel,
    TargetsQueryModel:TargetsQueryModel,
    ConditionAddModel:ConditionAddModel,
    ConditionUpdateModel:ConditionUpdateModel,
    ConditionDeleteModel:ConditionDeleteModel
};
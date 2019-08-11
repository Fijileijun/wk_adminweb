import {HttpAuthInfoStore} from '../store/business.store'

const httpAuthInfoStore = HttpAuthInfoStore.getInstance();


/*
	获取用户的登陆信息
*/

function getHttpAuth(success,faild){

	const authInfo = httpAuthInfoStore.getData() || {};

	if(authInfo.auth){
		success(authInfo.auth);
	}else{
		if(faild){
			faild();
		}else{
			gotoPage('/login?urlpath=' + location.pathname)
		}
	}

}

function gotoPage(urlPath){

	location.href = urlPath;

}

/*
	format参数，去除前后空格，	
*/
function formatObj(obj){

	var newObj = {};

	for(var k in obj){
		if(obj[k] instanceof Array){
            newObj[k] = obj[k];
		}else{
            newObj[k] = obj[k].toString().replace(/(^\s*)|(\s*$)/g,"");
		}
	}

	return newObj

}

export {
	getHttpAuth,
	gotoPage,
	formatObj
}





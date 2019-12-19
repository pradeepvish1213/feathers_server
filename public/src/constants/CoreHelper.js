export const CoreHelper = {
    getApiMessage,
    setSeetionLocalStorageData,
    isReadWriteAdminPermission
}

function isReadWriteAdminPermission(params,a,b,c) {
    return true;
    
}

function setSeetionLocalStorageData(params) { 
    localStorage.setItem('user-token',params.accessToken);
    localStorage.setItem('user-data',JSON.stringify(params.user));
}

function getApiMessage(params) {
    console.log(params);
    let resData = {}
    if (params.data.status === 'NET_ERROR') {
        if (params.data.message.response === undefined) {
            resData = {
                'code': 401,
                'message': params.data.message.message
            }
        } else if (params.data.message.response.status===401) {
            resData = {
                'code': 401,
                'message': params.data.message.response.data.message
            }
        }else if(params.data.message.response.status===400){
            let errorArray = params.data.message.response.data.errors;
            let message = errorArray.map(item=>item.message);
            resData = {
                'code': 400,
                'message': message
            }
        }
    } else if (params.status === 201) {
        resData = {
            'code': 200,
            'message': params.data
        }
    }
    return resData;
}
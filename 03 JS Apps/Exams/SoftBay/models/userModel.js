const userModel = function () {

    const register = function (params) {
        let data = {
            username: params.username,
            password: params.password
        };

        let url = `/user/${storage.appKey}`;

        let auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        let authString = `Basic ${auth}`;

        let headers = {
            body: JSON.stringify(data),
            headers: {
                Authorization: authString
            }
        };

        return requester.post(url, headers);
    };

    const login = function (params) {

        let url = `/user/${storage.appKey}/login`;

        let auth = btoa(`${params.username}:${params.password}`);
        let authString = `Basic ${auth}`;

        let headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify({...params})
        };

        return requester.post(url, headers);
    };

    const logout = function () {
    
        let url = `/user/${storage.appKey}/_logout`;
        let headers = {
            headers: {}
        };
        
        return requester.post(url, headers);
    };

    const getUser=function(id){
        let url=`/user/${storage.appKey}/${id}`;
        let headers = {
            headers: {}
        };

        return requester.get(url, headers);

    };

    const editUser=function(id,user){
        let url=`/user/${storage.appKey}/${id}`;
      let data={
          ...user
      }
      if(user.boughtProducts){

      data.boughtProducts=Number(user.boughtProducts)+1;
      }else{
          data.boughtProducts=1;
      }
        
        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };

    return {
        register,
        login,
        logout,
        getUser,
        editUser
    }
}();
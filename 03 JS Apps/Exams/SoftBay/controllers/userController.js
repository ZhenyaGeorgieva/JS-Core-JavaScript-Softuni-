const userController = function () {

    const getRegister = function (context) {

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/register.hbs')
        })
    };

    const postRegister = function (context) {
        
        let isPassCorrect=helper.passwordCheck(context.params);
        if(isPassCorrect){
        userModel.register(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                homeController.getHome(context);
            })
        }else{
            console.log('Error: wrong repeat password!')
            homeController.getHome(context);
        }
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/login.hbs')
        })
    };

    const postLogin = function (context) {

        userModel.login(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const logout = function (context) {

        userModel.logout()
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };

    const buyProduct=async function(context){
        let currentUserId=JSON.parse(storage.getData('userInfo'))._id;
        let response=await userModel.getUser(currentUserId);
        let user=await response.json();
        
        await userModel.editUser(JSON.parse(storage.getData('userInfo'))._id,user)
    };

    const showUser=async function(context){
        const loggedIn = storage.getData('userInfo') !== null;

    if (loggedIn) {
        const username = JSON.parse(storage.getData('userInfo')).username;
        const id= JSON.parse(storage.getData('userInfo'))._id;
        context.loggedIn = loggedIn;
        context.username=username;
        let response=await userModel.getUser(id);
        let user=await response.json();
        if(user.boughtProducts){
            let bought=user.boughtProducts;
            context.bought=Number(bought);
        }else{
            context.bought=0;
        }
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/userProfile.hbs')
        })


    }
}

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout,
        buyProduct,
        showUser
    }
}();
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

        let isPassCorrect = helper.passwordCheck(context.params);//проверка дали имената на параметрите са password и rePassword -ако не промяна на password check функцията;
        if (isPassCorrect) {
            userModel.register(context.params)
                .then(helper.handler)
                .then((data) => {
                    storage.saveUser(data);
                    homeController.getHome(context);
                })
        } else {
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

    const getMyProfile = async function (context) {
        const userId = JSON.parse(storage.getData('userInfo'))._id;

        let response = await userModel.getUser(userId);
        let user = await response.json();
        console.log(user);

        let memeResponse = await objectModel.getUserMemes(userId);
        let userMemes = await memeResponse.json();
        console.log(userMemes)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        if (userMemes) {
            context.memes = userMemes;
        }
        Object.keys(user).forEach((key) => {
            context[key] = user[key];
        })
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/user/userProfile.hbs')
        })
    };

    const postDeleteUser = async function (context) {

        userModel.deleteUser(context.params.userId)
            .then(helper.handler)
            .then((data) => {
                storage.deleteUser();
                homeController.getHome(context);
            })
    };
    const getUserProfile = async function (context) {
    
        let response = await objectModel.getMeme(context.params.memeId);
        let meme = await response.json();

        let currentMemeCreatorId=meme._acl.creator;
        let responseUser=await userModel.getUser(currentMemeCreatorId);
        let user=await responseUser.json();

        let memeResponse = await objectModel.getUserMemes(currentMemeCreatorId);
        let userMemes = await memeResponse.json();
        console.log(userMemes)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username1 = JSON.parse(storage.getData('userInfo')).username;
            context.username1 = username1;
            context.loggedIn = loggedIn;
        }
        if (userMemes) {
            context.memes = userMemes;
        }
        Object.keys(user).forEach((key) => {
            context[key] = user[key];
        })
        console.log(context)
        context.loadPartials({
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/user/userProfile2.hbs')
        })
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout,
        getMyProfile,
        postDeleteUser,
        getUserProfile
    }
}();
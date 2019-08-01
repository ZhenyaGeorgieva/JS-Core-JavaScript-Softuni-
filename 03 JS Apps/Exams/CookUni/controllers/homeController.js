const homeController = function () {

    const getHome = async function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const firstName = JSON.parse(storage.getData('userInfo')).firstName;
            const lastName = JSON.parse(storage.getData('userInfo')).lastName;
            context.firstName = firstName;
            context.lastName = lastName;
            context.loggedIn=true;
            let response = await objectModel.getAllRecipies();
            let recipies = await response.json();
            recipies = recipies.sort((a, b) => b.likesCounter - a.likesCounter)
            context.recipies=recipies;

        }
    

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            registeredUsers:"../views/home/registeredUsers.hbs"
        }).then(function () {
            this.partial('../views/home/homePage.hbs')
        })
    };
    return {
        getHome
    }
}();


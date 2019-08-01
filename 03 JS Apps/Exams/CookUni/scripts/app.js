const app = Sammy("#rooter", function () { // проверка за името на основния елемент в html-a

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    //Object
    this.get('#/createRecipe', objectController.getCreateRecipe);
    this.post('#/createRecipe', objectController.postCreateRecipe);


    this.get('#/recipeDetails/:recipeId', objectController.getDetailsRecipe);

    this.get('#/editRecipe/:recipeId', objectController.getEditRecipe);
    this.post('#/editRecipe/:recipeId', objectController.postEditRecipe);
    
    this.get('#/deleteRecipe/:recipeId', objectController.postDeleteRecipe);

    this.get('#/likeRecipe/:recipeId', objectController.postLikeRecipe);

});

(() => {
    app.run('#/home');
})();




// this.get('#/myEvents',eventController.getMyEvents);

// this.get('#/joinEvent/:eventId', eventController.postJoinEvent);

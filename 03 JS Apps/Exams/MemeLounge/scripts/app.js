const app = Sammy("#container", function () { // проверка за името на основния елемент в html-a

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    //Memes
    this.get('#/createMeme', objectController.getCreateMeme);
    this.post('#/createMeme', objectController.postCreateMeme);

    this.get('#/details/:memeId', objectController.getDetailsMeme);

    this.get('#/edit/:memeId', objectController.getEditMeme);
    this.post('#/edit/:memeId', objectController.postEditMeme);

    this.get('#/delete/:memeId', objectController.postDeleteMeme);

    this.get('#/myProfile',userController.getMyProfile);

    this.get('#/deleteUser/:userId', userController.postDeleteUser);

    this.get('#/userProfile/:memeId',userController.getUserProfile);


});

(() => {
    app.run('#/home');
})();


// this.get('#/myEvents',eventController.getMyEvents);

// this.get('#/joinEvent/:eventId', eventController.postJoinEvent);

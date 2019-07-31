const app = Sammy("#rootElement", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    //Movies
    this.get('#/cinema', movieController.getAllMovies);

    this.get('#/createMovie', movieController.getCreateMovie);
    this.post('#/createMovie', movieController.postCreateMovie);

    this.get('#/buyTicket/:movieId', movieController.postBuyTicket);

    this.get('#/detailsMovie/:movieId', movieController.getDetailsMovie);

    this.get('#/myMovies', movieController.getMyMovies);

    this.get('#/editMovie/:movieId', movieController.getEditMovie);
    this.post('#/editMovie/:movieId', movieController.postEditMovie);
    
    this.get('#/deleteMovie/:movieId', movieController.getDeleteMovie);
    this.post('#/deleteMovie/:movieId', movieController.postDeleteMovie);
});

(() => {
    app.run('#/home');
})();
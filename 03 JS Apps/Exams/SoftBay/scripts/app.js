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

    //Offer
    this.get('#/create', objectController.getCreateOffer);
    this.post('#/create', objectController.postCreateOffer);

    this.get('#/dashboard', objectController.getDashboard);

    this.get('#/edit/:productId', objectController.getEditProduct);
    this.post('#/edit/:productId', objectController.postEditProduct);

    this.get('#/delete/:productId', objectController.getDeleteProduct);
    this.post('#/delete/:productId', objectController.postDeleteProduct);

    this.get('#/details/:productId', objectController.getDetailsProduct);

    this.get('#/buy', userController.buyProduct);

    this.get('#/userProfile', userController.showUser)

});

(() => {
    app.run('#/home');
})();


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

    //Cars
    this.get('#/carListing', objectController.getCarListing);

    this.get('#/createCar', objectController.getCreateCar);
    this.post('#/createCar', objectController.postCreateCar);

    this.get('#/details/:carId', objectController.getDetailsCar);

    this.get('#/edit/:carId', objectController.getEditCar);
    this.post('#/edit/:carId', objectController.postEditCar);

    this.get('#/delete/:carId', objectController.postDeleteCar);
   
    this.get('#/myCars', objectController.getMyCars);
});

(() => {
    app.run('#/home');
})();




//

// this.get('#/myEvents',eventController.getMyEvents);

// this.get('#/joinEvent/:eventId', eventController.postJoinEvent);

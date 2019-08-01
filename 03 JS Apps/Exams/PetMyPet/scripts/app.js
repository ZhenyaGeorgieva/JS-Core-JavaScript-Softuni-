const app = Sammy("#site-content", function () { // проверка за името на основния елемент в html-a

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.logout);

    //Pets
    this.get('#/dashboard', objectController.getAllPetsNotByUser);

    this.get('#/addPet', objectController.getCreatePet);
    this.post('#/addPet', objectController.postCreatePet);

    this.get('#/showAll', objectController.getAllPets);
    this.get('#/showCats', objectController.getAllCats);
    this.get('#/showDogs', objectController.getAllDogs);
    this.get('#/showParrots', objectController.getAllParrots);
    this.get('#/showReptiles', objectController.getAllReptiles);
    this.get('#/showOther', objectController.getAllOthers);

    this.get('#/myPets', objectController.getMyPets);

    this.get('#/details/:petId', objectController.getEditPet);
    this.post('#/details/:petId', objectController.postEditPet);


    this.get('#/delete/:petId', objectController.getDeletePet);
    this.post('#/delete/:petId', objectController.postDeletePet);

    this.get('#/like/:petId', objectController.postLikePet);

});

(() => {
    app.run('#/home');
})();





// this.get('#/myEvents',eventController.getMyEvents);



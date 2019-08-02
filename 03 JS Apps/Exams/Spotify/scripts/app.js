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

    //Songs

    this.get('#/allSongs', objectController.getAllSongs);

    this.get('#/createSong', objectController.getCreateSong);
    this.post('#/createSong', objectController.postCreateSong);

    this.get('#/like/:songId', objectController.postLikeSong);
    this.get('#/listen/:songId', objectController.postListenSong);

    this.get('#/delete/:songtId', objectController.postDeleteSong);

    this.get('#/mySongs',objectController.getMySongs);

});

(() => {
    app.run('#/home');
})();


// //Object
// this.get('#/createEvent', eventController.getCreateEvent);
// this.post('#/createEvent', eventController.postCreateEvent);

// this.get('#/eventDetails/:eventId', eventController.getDetailsEvent);

// this.get('#/editEvent/:eventId', eventController.getEditEvent);
// this.post('#/editEvent/:eventId', eventController.postEditEvent);

// this.get('#/deleteEvent/:eventId', eventController.postDeleteEvent);

// this.get('#/myEvents',eventController.getMyEvents);

// this.get('#/joinEvent/:eventId', eventController.postJoinEvent);

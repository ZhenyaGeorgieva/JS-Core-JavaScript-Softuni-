const objectController = function () {

    const getCarListing = async function (context) {
        let response = await objectModel.getAllCars();
        let cars = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        if (cars) {
            for (let car of cars) {
                let currentCarCreatorId = car._acl.creator;
                let currentUserId = JSON.parse(storage.getData('userInfo'))._acl.creator;
                if (currentCarCreatorId === currentUserId) {
                    car.isCreator = true;
                } else {
                    car.isCreator = false;
                }
            }
            context.cars = cars;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/cars/carListing.hbs')
        })
    };

    const getCreateCar = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/cars/createCar.hbs')
        })
    };

    const postCreateCar = function (context) {

        objectModel.createCar(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const getDetailsCar = async function (context) {
        let response = await objectModel.getCar(context.params.carId);
        let car = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            context.isCreator = JSON.parse(storage.getData('userInfo')).username === car.seller;//проверка дали текущия user е организатор
            Object.keys(car).forEach((key) => {
                context[key] = car[key]
            });//добавяме към контекста всички пропъртита на получения event
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/cars/carDetails.hbs')
        })
    };

    const getEditCar = async function (context) {
        let response = await objectModel.getCar(context.params.carId);
        let car = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            Object.keys(car).forEach((key) => {
                context[key] = car[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/cars/editCar.hbs')
        })
    };

    const postEditCar = function (context) {
        objectModel.editCar(context.params)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };


    const postDeleteCar= function (context) {
        objectModel.deleteCar(context.params.carId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const getMyCars = async function (context) {
    let response = await objectModel.getUserCars();
    let cars = await response.json();

    const loggedIn = storage.getData('userInfo') !== null;

    if (loggedIn) {
        const username = JSON.parse(storage.getData('userInfo')).username;
        context.username = username;
        context.loggedIn = loggedIn;
    }
    if (cars) {
        context.cars=cars;
    }
    context.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/cars/myCars.hbs')
    })
}


    return {
        getCarListing,
        getCreateCar,
        postCreateCar,
        getDetailsCar,
        getEditCar,
        postEditCar,
        postDeleteCar,
        getMyCars
    }
}();




// const getMyEvents = async function (context) {
//     let response = await eventModel.getUserEvents();
//     let events = await response.json();
//     console.log(events);

//     const loggedIn = storage.getData('userInfo') !== null;

//     if (loggedIn) {
//         const username = JSON.parse(storage.getData('userInfo')).username;
//         context.username = username;
//         context.loggedIn = loggedIn;
//     }
//     if (events) {
//         context.isOrganizer = true;
//         context.eventsCount = events.length;
//         context.events = events;
//     }
//     context.loadPartials({
//         header: '../views/common/header.hbs',
//         footer: '../views/common/footer.hbs'
//     }).then(function () {
//         this.partial('../views/user/userPage.hbs')
//     })
// }

// const postJoinEvent = async function (context) {//ТУК БЯХА ВКЛЮЧЕНИ В КОНТЕКСТА НА ФОРМАТА PEOPLE INTERESTED IN И ORGANIZER;
//     let response = await eventModel.getEvent(context.params.eventId);
//     let event = await response.json();
//     let peopleInterested = Number(event.peopleInterestedIn);
//     peopleInterested++;
//     event.peopleInterestedIn = peopleInterested;
//     let join = await eventModel.joinEvent(context.params.eventId, event)
//     console.log(join)

//     const loggedIn = storage.getData('userInfo') !== null;

//     if (loggedIn) {
//         const username = JSON.parse(storage.getData('userInfo')).username;
//         context.username = username;
//         context.loggedIn = loggedIn;
//     }
//     homeController.getHome(context);
// }



// const getMyMovies = async function (context) {
//     let response = await movieModel.getUserMovies();
//     let movies = await response.json();
//     console.log(movies);

//     const loggedIn = storage.getData('userInfo') !== null;

//     if (loggedIn) {
//         const username = JSON.parse(storage.getData('userInfo')).username;
//         context.username = username;
//         context.loggedIn = loggedIn;
//     }
//     if (movies) {
//         context.movies = movies;
//     }
//     context.loadPartials({
//         header: '../views/common/header.hbs',
//         footer: '../views/common/footer.hbs'
//     }).then(function () {
//         this.partial('../views/movies/myMovies.hbs')
//     })
// };
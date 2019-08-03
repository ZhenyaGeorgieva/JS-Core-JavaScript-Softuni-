const objectController = function () {

    const getCreateMeme = function (context) {

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
            this.partial('../views/memes/createMeme.hbs')
        })
    };

    const postCreateMeme = function (context) {

        objectModel.createMeme(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const getDetailsMeme = async function (context) {
        let response = await objectModel.getMeme(context.params.memeId);
        let meme = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            let memeCreator = meme.creator;
            if (memeCreator == username) {
                context.isCreator = true;//проверка дали текущия user е организатор
            } else {
                context.isCreator = false;
            }
            Object.keys(meme).forEach((key) => {
                context[key] = meme[key]
            });//добавяме към контекста всички пропъртита на получения event
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/memes/details.hbs')
        })
    };

    const getEditMeme = async function (context) {
        let response = await objectModel.getMeme(context.params.memeId);
        let meme = await response.json();


        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            Object.keys(meme).forEach((key) => {
                context[key] = meme[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/memes/editMeme.hbs')
        })
    };

    const postEditMeme = function (context) {
        objectModel.editMeme(context.params)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const postDeleteMeme = function (context) {
        objectModel.deleteMeme(context.params.memeId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };



    return {
        getCreateMeme,
        postCreateMeme,
        getDetailsMeme,
        getEditMeme,
        postEditMeme,
        postDeleteMeme
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
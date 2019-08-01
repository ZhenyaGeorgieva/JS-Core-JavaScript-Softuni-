const objectController = function () {

    const getCreateRecipe = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const firstName = JSON.parse(storage.getData('userInfo')).firstName;
            const lastName = JSON.parse(storage.getData('userInfo')).lastName;
            context.firstName = firstName;
            context.lastName = lastName;
            context.loggedIn = true;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/recipe/createRecipe.hbs')
        })
    };

    const postCreateRecipe = function (context) {

        objectModel.createRecipe(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const getDetailsRecipe = async function (context) {
        let response = await objectModel.getRecipe(context.params.recipeId);
        let recipe = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const firstName = JSON.parse(storage.getData('userInfo')).firstName;
            const lastName = JSON.parse(storage.getData('userInfo')).lastName;
            context.firstName = firstName;
            context.lastName = lastName;
            context.loggedIn = loggedIn;
            context.isCreator = JSON.parse(storage.getData('userInfo'))._id === recipe._acl.creator;//проверка дали текущия user е организатор
            Object.keys(recipe).forEach((key) => {
                context[key] = recipe[key]
            });//добавяме към контекста всички пропъртита на получения event
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/recipe/recipeDetails.hbs')
        })
    };

    const getEditRecipe = async function (context) {
        let response = await objectModel.getRecipe(context.params.recipeId);
        let recipe = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const firstName = JSON.parse(storage.getData('userInfo')).firstName;
            const lastName = JSON.parse(storage.getData('userInfo')).lastName;

            context.firstName = firstName;
            context.lastName = lastName;
            context.loggedIn = loggedIn;
            Object.keys(recipe).forEach((key) => {
                context[key] = recipe[key];
            })
        }


        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/recipe/editRecipe.hbs')
        })
    };

    const postEditRecipe = function (context) {

        objectModel.editRecipe(context.params)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };
    const postDeleteRecipe = function (context) {
        objectModel.deleteRecipe(context.params.recipeId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const postLikeRecipe = async function (context) {
    let response = await objectModel.getRecipe(context.params.recipeId);
    let recipe = await response.json();
    let likes = Number(recipe.likesCounter);
    likes++;
    recipe.likesCounter = likes;
    let join = await objectModel.likeEvent(context.params.recipeId, recipe)

    const loggedIn = storage.getData('userInfo') !== null;

    if (loggedIn) {
        const firstName = JSON.parse(storage.getData('userInfo')).firstName;
        const lastName = JSON.parse(storage.getData('userInfo')).lastName;
        context.firstName = firstName;
        context.lastName = lastName;
        context.loggedIn = loggedIn;
    }
    homeController.getHome(context);
}

    return {
        getCreateRecipe,
        postCreateRecipe,
        getDetailsRecipe,
        getEditRecipe,
        postEditRecipe,
        postDeleteRecipe,
        postLikeRecipe
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

// const postJoinEvent = async function (context) {
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
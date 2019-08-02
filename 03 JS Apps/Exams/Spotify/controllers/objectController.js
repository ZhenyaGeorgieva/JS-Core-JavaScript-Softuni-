const objectController = function () {
    const getAllSongs = async function (context) {
        let response = await objectModel.getAllSongs();
        let songs = await response.json();
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        for (let song of songs) {
            let currentSongCreatorID = song._acl.creator;
            let currentUserId = JSON.parse(storage.getData('userInfo'))._acl.creator;
            if (currentSongCreatorID === currentUserId) {
                song.isCreator = true;
            } else {
                song.isCreator = false;
            }
        }
        context.songs = songs;
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/songs/AllSongs.hbs')
        })

    };

    const getCreateSong = function (context) {

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
            this.partial('../views/songs/createSong.hbs')
        })
    };

    const postCreateSong = function (context) {

        objectModel.createSong(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const postLikeSong = async function (context) {
        let response = await objectModel.getSong(context.params.songId);
        let song = await response.json();
        let likes = Number(song.likes);
        likes++;
        song.likes = likes;
        let join = await objectModel.likeSong(context.params.songId, song)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        homeController.getHome(context);
    };

    const postListenSong = async function (context) {
        let response = await objectModel.getSong(context.params.songId);
        let song = await response.json();
        let listened = Number(song.listened);
        listened++;
        song.listened = listened;
        let join = await objectModel.listenSong(context.params.songId, song)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        homeController.getHome(context);
    };


    const postDeleteSong = function (context) {
        objectModel.deleteSong(context.params.songtId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const getMySongs = async function (context) {
        let response = await objectModel.getUserSongs();
        let songs = await response.json();
        console.log(songs)
       
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        if (songs) {
            songs=songs.sort((a,b)=>b.likes-a.likes||b.listened-a.listened);
            console.log(songs)
            context.songs=songs;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/songs/mySongs.hbs')
        })
    }


    return {
        getAllSongs,
        getCreateSong,
        postCreateSong,
        postLikeSong,
        postListenSong,
        postDeleteSong,
        getMySongs

    }
}();

// const getCreateEvent = function (context) {

//     const loggedIn = storage.getData('userInfo') !== null;

//     if (loggedIn) {
//         const username = JSON.parse(storage.getData('userInfo')).username;
//         context.loggedIn = loggedIn;
//         context.username = username;
//     }

//     context.loadPartials({
//         header: '../views/common/header.hbs',
//         footer: '../views/common/footer.hbs'
//     }).then(function () {
//         this.partial('../views/event/createEvent.hbs')
//     })
// };

// const postCreateEvent = function (context) {

//     eventModel.createEvent(context.params)
//         .then(helper.handler)
//         .then((data) => {
//             //notify
//             homeController.getHome(context);
//         })
// };

// const getDetailsEvent = async function (context) {
//     let response = await eventModel.getEvent(context.params.eventId);
//     let event = await response.json();

//     const loggedIn = storage.getData('userInfo') !== null;

//     if (loggedIn) {
//         const username = JSON.parse(storage.getData('userInfo')).username;
//         context.username = username;
//         context.loggedIn = loggedIn;
//         context.isCreator = JSON.parse(storage.getData('userInfo')).username === event.organizer;//проверка дали текущия user е организатор
//         Object.keys(event).forEach((key) => {
//             context[key] = event[key]
//         });//добавяме към контекста всички пропъртита на получения event
//     }

//     context.loadPartials({
//         header: '../views/common/header.hbs',
//         footer: '../views/common/footer.hbs'
//     }).then(function () {
//         this.partial('../views/event/detailsEvent.hbs')
//     })
// };

// const getEditEvent = async function (context) {
//     let response = await eventModel.getEvent(context.params.eventId);
//     let event = await response.json();

//     const loggedIn = storage.getData('userInfo') !== null;

//     if (loggedIn) {
//         const username = JSON.parse(storage.getData('userInfo')).username;
//         context.username = username;
//         context.loggedIn = loggedIn;
//         Object.keys(event).forEach((key) => {
//             context[key] = event[key];
//         })
//     }
//     context.loadPartials({
//         header: '../views/common/header.hbs',
//         footer: '../views/common/footer.hbs'
//     }).then(function () {
//         this.partial('../views/event/editEvent.hbs')
//     })
// };

// const postEditEvent = function (context) {
//     eventModel.editEvent(context.params)
//         .then(helper.handler)
//         .then((data) => {
//             homeController.getHome(context);
//         })
// };



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
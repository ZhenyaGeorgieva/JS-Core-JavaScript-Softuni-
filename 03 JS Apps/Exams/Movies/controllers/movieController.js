const movieController = function () {

    const getAllMovies = async function (context) {
        const response = await movieModel.getMovies();
        let movies = await response.json();
        movies=movies.sort((a,b)=>b.tickets-a.tickets);
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
            context.movies = movies;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/movies/cinema.hbs')
        })
    }

    const getCreateMovie = function (context) {

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
            this.partial('../views/movies/createMovie.hbs')
        })
    };

    const postCreateMovie = function (context) {

        movieModel.createMovie(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const postBuyTicket = async function (context) {
        let response = await movieModel.getMovie(context.params.movieId);
        let movie = await response.json();
        let ticketsAvailable = Number(movie.tickets);
        ticketsAvailable--;
        movie.tickets = ticketsAvailable;
        let buy = await movieModel.buyTicket(context.params.movieId, movie)
        console.log(buy)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        homeController.getHome(context);
    };

    const getDetailsMovie = async function (context) {
        let response = await movieModel.getMovie(context.params.movieId);
        let movie = await response.json();
        console.log(movie)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }

        Object.keys(movie).forEach((key) => {
            context[key] = movie[key]
        });//добавяме към контекста всички пропъртита на полученот MOVIE/EVENT/t.n

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/movies/detailsMovie.hbs')
        })
    };

    const getMyMovies = async function (context) {
        let response = await movieModel.getUserMovies();
        let movies = await response.json();
        console.log(movies);

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        if (movies) {
            context.movies = movies;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/movies/myMovies.hbs')
        })
    };

    const getEditMovie = async function (context) {
        let response = await movieModel.getMovie(context.params.movieId);
        let movie = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            Object.keys(movie).forEach((key) => {
                context[key] = movie[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/movies/editMovie.hbs')
        })
    };

    const postEditMovie = function (context) {
        movieModel.editMovie(context.params)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const getDeleteMovie = async function (context) {
        let response = await movieModel.getMovie(context.params.movieId);
        let movie = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            Object.keys(movie).forEach((key) => {
                context[key] = movie[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/movies/deleteMovie.hbs')
        })
    };

    const postDeleteMovie = function (context) {
        movieModel.deleteMovie(context.params.movieId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };


    return {
        getAllMovies,
        getCreateMovie,
        postCreateMovie,
        postBuyTicket,
        getDetailsMovie,
        getMyMovies,
        getEditMovie,
        postEditMovie,
        getDeleteMovie,
        postDeleteMovie
    }
}();











const movieModel = function () {

    const getMovies = function () {
        let url = `/appdata/${storage.appKey}/movies`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const createMovie = function (params) {
        let data = {
            ...params,//закача на обекта всички пропъртита,които са подадени през формата
        };

        let url = `/appdata/${storage.appKey}/movies`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);

    };

    const getMovie = function (id) {
        let url = `/appdata/${storage.appKey}/movies/${id}`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const buyTicket = function (id, movie) {
        let url = `/appdata/${storage.appKey}/movies/${id}`;
        let data = {
            ...movie
        };

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };

    const getUserMovies = function () {
        let organizerId = JSON.parse(storage.getData('userInfo'))._id;
        let key = '_acl.creator';
        let obj = JSON.stringify({ [key]: organizerId });

        url = `/appdata/${storage.appKey}/movies?query=${obj}`;

        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const editMovie = function (params) {

        let url = `/appdata/${storage.appKey}/movies/${params.movieId}`;//първо сетваме URL, за да използваме eventId

        delete params.movieId;//трием eventId, за да не го вложим и него в контекста
        let data = {
            ...params
        };

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };
    
    const deleteMovie = function (id) {
        console.log(id)
        let url = `/appdata/${storage.appKey}/movies/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    }

    return {
        getMovies,
        createMovie,
        getMovie,
        buyTicket,
        getUserMovies,
        editMovie,
        deleteMovie
    }
}();








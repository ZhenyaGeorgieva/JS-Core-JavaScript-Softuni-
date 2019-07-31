const eventModel = function () {

    const createEvent = function (params) {
        let data = {
            ...params,//закача на обекта всички пропъртита,които са подадени през формата
            peopleInterestedIn: 0,//допълнително проп извън формата
            organizer: JSON.parse(storage.getData('userInfo')).username // взимаме името на създателя от локал сторидж
        };

        let url = `/appdata/${storage.appKey}/events`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);

    };

    const getAllEvents = function () {
        let url = `/appdata/${storage.appKey}/events`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const getEvent = function (id) {
        let url = `/appdata/${storage.appKey}/events/${id}`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const editEvent = function (params) {

        let url = `/appdata/${storage.appKey}/events/${params.eventId}`;//първо сетваме URL, за да използваме eventId

        delete params.eventId;//трием eventId, за да не го вложим и него в контекста
        let data = {
            ...params
        };

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    }

    const deleteEvent = function (id) {
        console.log(id)
        let url = `/appdata/${storage.appKey}/events/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    }

    const getUserEvents = function () {
        let organizerId = JSON.parse(storage.getData('userInfo'))._id;
        let key = '_acl.creator';
        let obj = JSON.stringify({ [key]: organizerId });

        url = `/appdata/${storage.appKey}/events?query=${obj}`;

        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    }

    const joinEvent=function(id,event){
        let url = `/appdata/${storage.appKey}/events/${id}`;
        let data = {
            ...event
        };

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    }


    return {
        createEvent,
        getAllEvents,
        getEvent,
        editEvent,
        deleteEvent,
        getUserEvents,
        joinEvent
    }
}();
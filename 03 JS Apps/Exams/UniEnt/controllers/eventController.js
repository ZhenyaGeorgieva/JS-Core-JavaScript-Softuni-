const eventController = function () {

    const getCreateEvent = function (context) {

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
            this.partial('../views/event/createEvent.hbs')
        })
    };

    const postCreateEvent = function (context) {

        eventModel.createEvent(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const getDetailsEvent = async function (context) {
        let response = await eventModel.getEvent(context.params.eventId);
        let event = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            context.isCreator = JSON.parse(storage.getData('userInfo')).username === event.organizer;//проверка дали текущия user е организатор
            Object.keys(event).forEach((key) => {
                context[key] = event[key]
            });//добавяме към контекста всички пропъртита на получения event
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/event/detailsEvent.hbs')
        })
    };

    const getEditEvent = async function (context) {
        let response = await eventModel.getEvent(context.params.eventId);
        let event = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
            Object.keys(event).forEach((key) => {
                context[key] = event[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/event/editEvent.hbs')
        })
    };

    const postEditEvent = function (context) {
        eventModel.editEvent(context.params)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const postDeleteEvent = function (context) {
        eventModel.deleteEvent(context.params.eventId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    }

    const getMyEvents = async function (context) {
        let response = await eventModel.getUserEvents();
        let events = await response.json();
        console.log(events);

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        if (events) {
            context.isOrganizer = true;
            context.eventsCount = events.length;
            context.events = events;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/user/userPage.hbs')
        })
    }

    const postJoinEvent = async function (context) {
        let response = await eventModel.getEvent(context.params.eventId);
        let event = await response.json();
        let peopleInterested = Number(event.peopleInterestedIn);
        peopleInterested++;
        event.peopleInterestedIn = peopleInterested;
        let join = await eventModel.joinEvent(context.params.eventId, event)
        console.log(join)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        homeController.getHome(context);



    }

    return {
        getCreateEvent,
        postCreateEvent,
        getDetailsEvent,
        getEditEvent,
        postEditEvent,
        postDeleteEvent,
        getMyEvents,
        postJoinEvent
    }
}();
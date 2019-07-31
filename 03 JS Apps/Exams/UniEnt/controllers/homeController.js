const homeController = function () {

    const getHome = async function (context) {
        let response = await eventModel.getAllEvents();
        let events = await response.json();
        events = events.sort((a, b) => b.peopleInterestedIn - a.peopleInterestedIn)
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
            context.events = events;
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            eventView: "../views/event/eventView.hbs"
        }).then(function () {
            this.partial('../views/home/homePage.hbs')
        })
    };

    return {
        getHome
    }
}();
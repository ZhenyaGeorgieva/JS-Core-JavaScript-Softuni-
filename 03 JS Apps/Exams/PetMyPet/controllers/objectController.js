const objectController = function () {

    const getAllPetsNotByUser = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            let currentCreatorID = JSON.parse(storage.getData('userInfo'))._id;
            console.log(currentCreatorID)
            pets = pets.filter(x => x._acl.creator != currentCreatorID);
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };

    const getCreatePet = function (context) {

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
            this.partial('../views/pets/createPet.hbs')
        })
    };

    const postCreatePet = function (context) {

        objectModel.createPet(context.params)
            .then(helper.handler)
            .then((data) => {
                //notify
                homeController.getHome(context);
            })
    };

    const getAllPets = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };

    const getAllCats = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            pets = pets.filter(a => a.category == "Cat");
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };

    const getAllDogs = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            pets = pets.filter(a => a.category == "Dog");
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };
    const getAllParrots = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            pets = pets.filter(a => a.category == "Parrot");
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };
    const getAllReptiles = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            pets = pets.filter(a => a.category == "Reptile");
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };

    const getAllOthers = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await objectModel.getPets();
            let pets = await response.json();
            pets = pets.filter(a => a.category == "Other");
            pets = pets.sort((a, b) => b.likes - a.likes)
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashBoard.hbs')
        })

    };

    const getMyPets = async function (context) {
        let response = await objectModel.getUserPets();
        let pets = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        if (pets) {
            context.pets = pets;
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/pets/myPets.hbs')
        })
    };

    const getEditPet = async function (context) {
        let response = await objectModel.getPet(context.params.petId);
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

        let currentCreatorID = JSON.parse(storage.getData('userInfo'))._id;
        let currentObjectCreatorID = event._acl.creator;

        if (currentCreatorID == currentObjectCreatorID) {
            context.isCreator = true;
        } else {
            context.isCreator = false;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/pets/edit.hbs')
        })
    };

    const postEditPet = function (context) {
        objectModel.editPet(context.params)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const getDeletePet = async function (context) {
        let response = await objectModel.getPet(context.params.petId);
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

        let currentCreatorID = JSON.parse(storage.getData('userInfo'))._id;
        let currentObjectCreatorID = event._acl.creator;

        if (currentCreatorID == currentObjectCreatorID) {
            context.isCreator = true;
        } else {
            context.isCreator = false;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/pets/deletePet.hbs')
        })
    };

    const postDeletePet = function (context) {
        objectModel.deletePet(context.params.petId)
            .then(helper.handler)
            .then((data) => {
                homeController.getHome(context);
            })
    };

    const postLikePet = async function (context) {
        let response = await objectModel.getPet(context.params.petId);
        let event = await response.json();
        let likes = Number(event.likes);
        likes++;
        event.likes = likes;
        let join = await objectModel.likePet(context.params.petId, event)

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.loggedIn = loggedIn;
        }
        homeController.getHome(context);
    };

    return {
        getAllPetsNotByUser,
        getCreatePet,
        postCreatePet,
        getAllPets,
        getAllCats,
        getAllDogs,
        getAllParrots,
        getAllReptiles,
        getAllOthers,
        getMyPets,
        getEditPet,
        postEditPet,
        getDeletePet,
        postDeletePet,
        postLikePet
    }
}();










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
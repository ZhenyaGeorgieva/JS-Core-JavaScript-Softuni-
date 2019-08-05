const objectController = function () {

    const getCreateOffer = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            context.loggedIn = loggedIn;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/offers/createOffer.hbs')
        })
    };

    const postCreateOffer = function (context) {

        if (context.params.product
            && context.params.description
            && context.params.price
            && context.params.pictureUrl) {
            objectModel.createOffer(context.params)
                .then(helper.handler)
                .then((data) => {
                    objectController.getDashboard(context)
                })
        } else {
            console.log('Error: all input fields must be filled-in!')
            homeController.getHome(context);

        }
    };

    const getDashboard = async function (context) {
        let response = await objectModel.getAllOffers();
        let offers = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        for (let offer of offers) {
            let currentOfferCreatorId = offer._acl.creator;
            let currentUserId = JSON.parse(storage.getData('userInfo'))._id;
            if (currentOfferCreatorId === currentUserId) {
                offer.isCreator = true;
            } else {
                offer.isCreator = false;
            }
        }

        if (loggedIn) {
            context.loggedIn = loggedIn;
            context.offers = offers
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/common/dashboard.hbs')
        })
    };

    const getEditProduct = async function (context) {
        let response = await objectModel.getProduct(context.params.productId);
        let product = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            context.loggedIn = loggedIn;
            Object.keys(product).forEach((key) => {
                context[key] = product[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/offers/editOffer.hbs')
        })
    };

    const postEditProduct = function (context) {
        objectModel.editProduct(context.params)
            .then(helper.handler)
            .then((data) => {
                objectController.getDashboard(context)
            })
    };

    const getDeleteProduct =async function (context) {
        let response = await objectModel.getProduct(context.params.productId);
        let product = await response.json();

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            context.loggedIn = loggedIn;
            Object.keys(product).forEach((key) => {
                context[key] = product[key];
            })
        }
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/offers/deleteOffer.hbs')
        })
    }

    const postDeleteProduct = function (context) {
        objectModel.deleteProduct(context.params.productId)
            .then(helper.handler)
            .then((data) => {
                objectController.getDashboard(context);
            })
    }

    const getDetailsProduct = async function (context) {
    let response = await objectModel.getProduct(context.params.productId);
    let product = await response.json();

    const loggedIn = storage.getData('userInfo') !== null;

    if (loggedIn) {
        context.loggedIn = loggedIn;
        Object.keys(product).forEach((key) => {
            context[key] = product[key]
        });
    }

    context.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/offers/detailsOffer.hbs')
    })
};

    return {
        getCreateOffer,
        postCreateOffer,
        getDashboard,
        getEditProduct,
        postEditProduct,
        getDeleteProduct,
        postDeleteProduct,
        getDetailsProduct
    }
}();




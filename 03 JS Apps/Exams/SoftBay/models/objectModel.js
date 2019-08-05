const objectModel = function () {

    const createOffer = function (params) {
        let data = {
            ...params
        };

        let url = `/appdata/${storage.appKey}/exam`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);

    };

    const getAllOffers = function () {
        let url = `/appdata/${storage.appKey}/exam`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const getProduct = function (id) {
        let url = `/appdata/${storage.appKey}/exam/${id}`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const editProduct = function (params) {

        let url = `/appdata/${storage.appKey}/exam/${params.productId}`;

        delete params.productId;
        let data = {
            ...params
        };


        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };

    const deleteProduct = function (id) {
        console.log(id)
        let url = `/appdata/${storage.appKey}/exam/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    };

    return {
        createOffer,
        getAllOffers,
        getProduct,
        editProduct,
        deleteProduct
    }
}();


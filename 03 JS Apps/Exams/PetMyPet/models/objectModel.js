const objectModel = function () {

    const getPets = function () {
        let url = `/appdata/${storage.appKey}/pets`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const createPet = function (params) {
        let data = {
            ...params,//закача на обекта всички пропъртита,които са подадени през формата
            likes: 0,//допълнително проп извън формата
        };

        let url = `/appdata/${storage.appKey}/pets`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);

    };

    const getUserPets = function () {
        let organizerId = JSON.parse(storage.getData('userInfo'))._id;
        let key = '_acl.creator';
        let obj = JSON.stringify({ [key]: organizerId });

        url = `/appdata/${storage.appKey}/pets?query=${obj}`;

        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const getPet = function (id) {
        let url = `/appdata/${storage.appKey}/pets/${id}`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const editPet = async function (params) {//В СЛУЧАЙ ЧЕ ИМА ПРОПЪРТИТА, КОИТО НЕ СА ВКЛЮЧЕНИ В EDIT ФОРМАТА, В СЛУЧАЯ ЛАЙКОВЕ И ИЗОБРАЖЕНИЯ НА КАТЕГОРИИ
        let currentObj = await objectModel.getPet(params.petId);
        let responceCurrent = await currentObj.json();
        let likes = responceCurrent.likes;
        let url = `/appdata/${storage.appKey}/pets/${params.petId}`;//първо сетваме URL, за да използваме eventId

        delete params.petId;//трием eventId, за да не го вложим и него в контекста
        let data = {
            ...params
        };
        data.likes = Number(likes);
        data.imageURL = responceCurrent.imageURL;
        data.name = responceCurrent.name;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };


    const deletePet = function (id) {
        console.log(id)
        let url = `/appdata/${storage.appKey}/pets/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    };


    const likePet = function (id, event) {
        let url = `/appdata/${storage.appKey}/pets/${id}`;
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
        getPets,
        createPet,
        getUserPets,
        getPet,
        editPet,
        deletePet,
        likePet
    }
}();


// const editEvent = function (params) {//В СЛУЧАЙ ШЕ ВСИЧКИ ПРОПЪРИТА НА ОБЕКТА СА ВЪВ ФОРМАТА ЗА EDIT

//     let url = `/appdata/${storage.appKey}/exam/${params.eventId}`;//първо сетваме URL, за да използваме eventId

//     delete params.eventId;//трием eventId, за да не го вложим и него в контекста
//     let data = {
//         ...params
//     };


//     let headers = {
//         body: JSON.stringify(data),
//         headers: {}
//     };

//     return requester.put(url, headers);
// }



// const joinEvent=function(id,event){
//     let url = `/appdata/${storage.appKey}/exam/${id}`;
//     let data = {
//         ...event
//     };

//     let headers = {
//         body: JSON.stringify(data),
//         headers: {}
//     };

//     return requester.put(url, headers);
// }

// const getUserMovies = function () {
//     let organizerId = JSON.parse(storage.getData('userInfo'))._id;
//     let key = '_acl.creator';
//     let obj = JSON.stringify({ [key]: organizerId });

//     url = `/appdata/${storage.appKey}/exam?query=${obj}`;

//     let headers = {
//         headers: {}
//     }

//     return requester.get(url, headers)
// };
const objectModel = function () {
    const getAllMemes = function () {
        let url = `/appdata/${storage.appKey}/memes`;
        let headers = {
            headers: {}
        }
        return requester.get(url, headers)
    };

    const createMeme = function (params) {
        let data = {
            ...params,//закача на обекта всички пропъртита,които са подадени през формата
            creator: JSON.parse(storage.getData('userInfo')).username //извън формата,взимаме името на създателя от локал сторидж
        };

        let url = `/appdata/${storage.appKey}/memes`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);

    };

    const getMeme = function (id) {
        let url = `/appdata/${storage.appKey}/memes/${id}`;
        let headers = {
            headers: {}
        }

        return requester.get(url, headers)
    };

    const editMeme = async function (params) {//В СЛУЧАЙ ЧЕ ИМА ПРОПЪРТИТА, КОИТО НЕ СА ВКЛЮЧЕНИ В EDIT ФОРМАТА, В СЛУЧАЯ ЛАЙКОВЕ И ИЗОБРАЖЕНИЯ НА КАТЕГОРИИ
        let currentObj = await objectModel.getMeme(params.memeId);
        let responceCurrent = await currentObj.json();
        let creator = responceCurrent.creator;

        let url = `/appdata/${storage.appKey}/memes/${params.memeId}`;//първо сетваме URL, за да използваме eventId

        delete params.memeId;//трием eventId, за да не го вложим и него в контекста
        let data = {
            ...params
        };
        data.creator = creator;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };

    const deleteMeme = function (id) {
        console.log(id)
        let url = `/appdata/${storage.appKey}/memes/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    };

    const getUserMemes = function (id) {
    let key = '_acl.creator';
    let obj = JSON.stringify({ [key]: id });

    url = `/appdata/${storage.appKey}/memes?query=${obj}`;

    let headers = {
        headers: {}
    }

    return requester.get(url, headers)
}



    return {
        getAllMemes,
        createMeme,
        getMeme,
        editMeme,
        deleteMeme,
        getUserMemes
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



// const deleteEvent = function (id) {
//     console.log(id)
//     let url = `/appdata/${storage.appKey}/exam/${id}`;

//     let headers = {
//         headers: {}
//     };

//     return requester.del(url, headers);
// }

// const getUserEvents = function () {
//     let organizerId = JSON.parse(storage.getData('userInfo'))._id;
//     let key = '_acl.creator';
//     let obj = JSON.stringify({ [key]: organizerId });

//     url = `/appdata/${storage.appKey}/exam?query=${obj}`;

//     let headers = {
//         headers: {}
//     }

//     return requester.get(url, headers)
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
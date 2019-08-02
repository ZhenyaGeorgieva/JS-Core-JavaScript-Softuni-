const objectModel = function () {

   
    return {
        
    }
}();

// const createEvent = function (params) {
//     let data = {
//         ...params,//закача на обекта всички пропъртита,които са подадени през формата
//         peopleInterestedIn: 0,//допълнително проп извън формата
//         organizer: JSON.parse(storage.getData('userInfo')).username //извън формата,взимаме името на създателя от локал сторидж
//     };

//     let url = `/appdata/${storage.appKey}/exam`;

//     let headers = {
//         body: JSON.stringify(data),
//         headers: {}
//     };

//     return requester.post(url, headers);

// };

// const getAllEvents = function () {
//     let url = `/appdata/${storage.appKey}/exam`;
//     let headers = {
//         headers: {}
//     }

//     return requester.get(url, headers)
// };

// const getEvent = function (id) {
//     let url = `/appdata/${storage.appKey}/exam/${id}`;
//     let headers = {
//         headers: {}
//     }

//     return requester.get(url, headers)
// };

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

// const editRecipe = async function (params) {//В СЛУЧАЙ ЧЕ ИМА ПРОПЪРТИТА, КОИТО НЕ СА ВКЛЮЧЕНИ В EDIT ФОРМАТА, В СЛУЧАЯ ЛАЙКОВЕ И ИЗОБРАЖЕНИЯ НА КАТЕГОРИИ
//     let currentObj = await objectModel.getRecipe(params.recipeId);
//     let responceCurrent = await currentObj.json();
//     let likes = responceCurrent.likesCounter;
//     console.log(likes)

//     let url = `/appdata/${storage.appKey}/recipies/${params.recipeId}`;//първо сетваме URL, за да използваме eventId

//     delete params.recipeId;//трием eventId, за да не го вложим и него в контекста
//     let data = {
//         ...params
//     };
//     data.ingredients = params.ingredients.split(', ');
//     data.likesCounter = likes;

//     if (params.category == "Vegetables and legumes/beans") {
//         data.categoryImageURL = 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg';
//     } else if (params.category == "Grain Food") {
//         data.categoryImageURL = 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg';
//     } else if (params.category == "Fruits") {
//         data.categoryImageURL = 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg';
//     } else if (params.category == 'Milk, cheese, eggs and alternatives') {
//         data.categoryImageURL = 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg';
//     } else if (params.category == 'Lean meats and poultry, fish and alternatives') {
//         data.categoryImageURL = 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg';
//     }
//     console.log(data)

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
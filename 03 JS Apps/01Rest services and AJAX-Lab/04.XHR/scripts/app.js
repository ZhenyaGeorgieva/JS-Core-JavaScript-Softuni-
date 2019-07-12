function loadRepos() {
   let resultElement = document.getElementById('res');

   const statusChecker = {
      isSuccess: (status) => status === 200,
   };

   const toDomElement = ({ name, link }) => {
      const listItem = document.createElement('li');
      const linkItem = document.createElement('a');
      linkItem.href = link;
      linkItem.innerHTML = name;
      listItem.appendChild(linkItem);
      return listItem;
   };

   const parseRepo = ({ html_url, full_name }) => {
      return { link: html_url, name: full_name };
   }

   // function handleResponse() {
   //    if (this.readyState < 4) {
   //       return;
   //    }
   //    if (!statusChecker.isSuccess(this.status)) {
   //       return;
   //    }
   //    JSON.parse(this.response);
   // }
      
      // repos.map(parseRepo)
      //    .map(toDomElement)
      //    .forEach(x => {
      //       resultElement.appendChild(x)
      //    });
      fetch('https://api.github.com/users/testnakov/repos')
         .then(response => response.json())
         .then(repos => {
            repos.map(parseRepo)
               .map(toDomElement)
               .forEach(el => {
                  resultElement.appendChild(el)
               })
         })


   // const xhr = new XMLHttpRequest();
   // xhr.onreadystatechange = handleResponse;
   // xhr.open("GET",
   //    "https://api.github.com/users/testnakov/repos", true);
   // xhr.send();

}
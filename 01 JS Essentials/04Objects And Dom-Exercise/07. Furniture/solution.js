function solve() {

  let textAreaElements = document.getElementsByTagName('textarea');
  let buttonsElement = document.getElementsByTagName('button');
  document.getElementsByTagName('input')[0].disabled = false;
  buttonsElement[0].addEventListener('click', generate);
  buttonsElement[1].addEventListener('click', buy);
  let table = document.getElementsByClassName('table')[0];

  function generate() {

    let furnitureListInput = JSON.parse(textAreaElements[0].value);
    let arrayFromFurnitureList = Array.from(furnitureListInput);
  
    for (let furniture of arrayFromFurnitureList) {
      let row = table.insertRow();
      let cell = row.insertCell();
      let img = document.createElement('img');
      img.setAttribute('src', furniture.img);
      cell.appendChild(img);
      cell = row.insertCell();

      let name = document.createElement('p');
      name.innerHTML = furniture.name;
      cell.appendChild(name);
      cell = row.insertCell();

      let price = document.createElement('p');
      price.innerHTML = Number(furniture.price);
      cell.appendChild(price);
      cell = row.insertCell();

      let decFactor = document.createElement('p');
      decFactor.innerHTML = Number(furniture.decFactor);
      cell.appendChild(decFactor);
      cell = row.insertCell();

      let checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      cell.appendChild(checkBox);
      cell = row.insertCell();
    }
  }

  function buy() {
    let furniture = [];
    let totalPrice = 0;
    let averageFactor = 0;
    let checkbox = Array.from(document.getElementsByTagName('input'));
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        let tableElements = checkbox[i].parentElement.parentElement;
        let name = tableElements.getElementsByTagName('p')[0].textContent;
        furniture.push(name);
        let price = tableElements.getElementsByTagName('p')[1].textContent;
        totalPrice += +price;
        let decFactor = tableElements.getElementsByTagName('p')[2].textContent;
        averageFactor += +decFactor;
      }
    }
    document.getElementsByTagName('textarea')[1].textContent += `Bought furniture: ${furniture.join(', ')}\n`;
    document.getElementsByTagName('textarea')[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    document.getElementsByTagName('textarea')[1].textContent += `Average decoration factor: ${averageFactor / furniture.length}`;
  }
}
function addItem() {
    let list=document.getElementById('items');
    let newElementText=document.getElementById('newItemText').value;
    let newListElement=document.createElement('li');
    newListElement.textContent=newElementText;
    list.appendChild(newListElement);
  }
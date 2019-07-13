function addItem() {
  let text = document.getElementById('newItemText').value;
  let value = document.getElementById('newItemValue').value;

  let menu = document.getElementById('menu');

  let newOptionElement = document.createElement('option');

  newOptionElement.textContent = text;
  newOptionElement.value = value;

  menu.appendChild(newOptionElement);
  document.getElementById('newItemText').value = '';
  document.getElementById('newItemValue').value = '';
}
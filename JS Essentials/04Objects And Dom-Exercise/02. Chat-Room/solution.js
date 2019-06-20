function solve() {

   let myButton = document.getElementById('send');
   myButton.addEventListener('click', writeMessage);

   function writeMessage() {
      let boxElement = document.getElementById('chat_input');
      let boxContent = boxElement.value;

      let divElement = document.createElement('div');
      divElement.className = 'message my-message';
      divElement.textContent = boxContent;

      let chatMessagesElement = document.getElementById('chat_messages');
      chatMessagesElement.appendChild(divElement);

      boxElement.value = '';
   }
}



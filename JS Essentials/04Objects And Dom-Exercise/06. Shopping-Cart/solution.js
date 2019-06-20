function solve() {
  
   let buttons = document.getElementsByTagName('button');
   let arrayOfButtons = Array.from(buttons);
   let productsList = [];
   let totalPrice = 0;
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkout=false;
   for (let index = 0; index < arrayOfButtons.length-1; index++) {
      let button = arrayOfButtons[index];
      button.addEventListener('click',my)};

       function my(e){
         let productButton = e.target;
         let fatherNode = productButton.parentNode;
         let grandfatherNode = fatherNode.parentNode;
         let productTitle = grandfatherNode.getElementsByClassName('product-title');
         let productName = productTitle[0].innerHTML;
         let productPrice = grandfatherNode.getElementsByClassName('product-line-price');
         let price = Number(productPrice[0].innerHTML);
         console.log(productName);
         console.log(price);
         totalPrice+=price;
         console.log(totalPrice);
         if (!productsList.includes(productName)) {
            productsList.push(productName);
            
            console.log(productsList);
            
         }
         textArea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
      };
   
   let checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click',my1)
   function my1(){
      let list = productsList.join(', ');
      textArea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
      for (let index = 0; index < arrayOfButtons.length-1; index++) {
         let button=arrayOfButtons[index];
         button.removeEventListener('click',my)
       } 
       checkoutButton.removeEventListener('click',my1)
   }
}







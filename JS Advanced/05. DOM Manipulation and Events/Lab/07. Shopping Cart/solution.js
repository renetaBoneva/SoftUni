function solve() {


   let addBtn = document.getElementsByClassName('add-product');
   addBtn = Array.from(addBtn);
   let textarea = document.querySelector('textarea');
   let checkoutBtn = document.getElementsByClassName('checkout')[0];
   let totalPrice = 0;
   let totalListProducts = [];

   for (let btn of addBtn) {
      btn.addEventListener('click', function addProduct() {
         let product = btn.parentNode.parentNode;
         let name = product.getElementsByClassName('product-title')[0].textContent;
         let price = product.getElementsByClassName('product-line-price')[0].textContent;
         price = Number(price);

         totalPrice += price;
         if (!totalListProducts.includes(name)) {
            totalListProducts.push(name)
         }
         textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      })
   }

   checkoutBtn.addEventListener('click', function shoppingEnd() {
      for (let btn of addBtn) {
         btn.disabled = true;
      }
      textarea.value += `You bought ${totalListProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
      checkoutBtn.disabled = true;
   })
}

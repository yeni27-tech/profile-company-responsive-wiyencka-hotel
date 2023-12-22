//loading//
const loadText = document.querySelector("loading");
const background = document.querySelector("body");

let load = 0;
let int = setInterval(blurring, 40);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100,);
  background.style.filter = `blur(${scale(load, 0, 100,40,0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
//selesai//



//slide menu//
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//selesai//



//slider//
let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => slide(i));
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   if (onSlide)
      return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   if (toIndex > itemActiveIndex) {
      // check if toIndex exceeds the number of carousel items
      if (toIndex >= itemsArray.length) {
         toIndex = 0;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else {
      // check if toIndex exceeds the number of carousel items
      if (toIndex < 0) {
         toIndex = itemsArray.length - 1;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, {
      once: true
   });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   const dotActive = document.querySelector(".carousel_dot__active");
   const newDotActive = dots[toIndex];

   dotActive.classList.remove("carousel_dot__active");
   newDotActive.classList.add("carousel_dot__active");
}
//selesai//



//register//
//-->input//
 function updateItemPrice() {
      const selectedItem = document.getElementById("itemName");
      const selectedOption = selectedItem.options[selectedItem.selectedIndex];
      const price = parseFloat(selectedOption.getAttribute("data-price"));

      
      selectedItem.setAttribute("data-calculated-price", price.toFixed(2));
    }

    function calculateAndRedirect() {
      const customerName = document.getElementById("customerName").value;
      const customerAddress = document.getElementById("customerAddress").value;
      const itemName = document.getElementById("itemName").value;
      const quantity = parseInt(document.getElementById("quantity").value);

     
      const calculatedPrice = parseFloat(document.getElementById("itemName").getAttribute("data-calculated-price"));

      
      const subtotal = calculatedPrice * quantity;

     
      sessionStorage.setItem("orderDetails", JSON.stringify({
        customerName: customerName,
        customerAddress: customerAddress,
        itemName: itemName,
        itemPrice: calculatedPrice, 
        quantity: quantity,
        subtotal: subtotal,
     
      }));

      
      window.location.href = "./html/output-register.html";
    }
    //output-->//
      
    const storedOrderDetails = sessionStorage.getItem("orderDetails");
    const orderDetails = JSON.parse(storedOrderDetails);

    
    document.getElementById("output").innerHTML = `
      <p><strong>Customer Name:</strong>  ${orderDetails.customerName}</p>
      <p><strong>Customer Address:</strong>  ${orderDetails.customerAddress}</p>
      <p><strong>Item Name:</strong>  ${orderDetails.itemName}</p>
      <p><strong>Item Price:</strong> Rp ${orderDetails.itemPrice.toFixed(2)}</p>
      <p><strong>Quantity:</strong>  ${orderDetails.quantity}</p>
      <hr class="dashed-inline"><br>
      <p><strong>Subtotal:</strong>Rp  ${orderDetails.subtotal.toFixed(2)}</p>
    `;
    //selesai//

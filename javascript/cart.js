//Shop-Basket
$(".shop-icon").on("click", function () {
  $('.cart-sidebar').addClass('active'),
    $('body').css('overflow-y', 'hidden'),
    $('.off_canvars_overlay').addClass('active')

});
$('.cart-close').on("click", function () {
  $('.cart-sidebar').removeClass('active'),
    $('body').css('overflow-y', 'scroll'),
    $('.off_canvars_overlay').removeClass('active')

});

// $(".cart-delete").click(function () {
//   $(".cart-list").remove();
//   console.log("Hello")
// })


$(".action-plus").on("click", (function () {
  var e = $(this).closest(".product-action").children(".action-input").get(0).value++,
    i = $(this).closest(".product-action").children(".action-minus");
  e > 0 && i.removeAttr("disabled")
})), $(".action-minus").on("click", (function () {
  2 == $(this).closest(".product-action").children(".action-input").get(0).value-- && $(this).attr("disabled", "disabled")
}))


'use strict';

let cart = (JSON.parse(localStorage.getItem('cart')) || []);
const cartDOM = document.querySelector('.shopping-cart .myCart .cart-list');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
const cartTotalQuantity = document.querySelector('.cart-total-quantity');
if (cart.length > 0) {
  cart.forEach(cartItem => {
    const product = cartItem;
    insertItemToDOM(product);

    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
      const productDOM = addToCartButtonDOM.parentNode.parentNode;
      if (productDOM.querySelector('.product__name').innerText === product.name) {
        handleActionButtons(addToCartButtonDOM, product);
      }
    });

  });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
  addToCartButtonDOM.addEventListener('click', () => {
    const productDOM = addToCartButtonDOM.parentNode.parentNode;
    const product = {
      image: productDOM.querySelector('.product__image').getAttribute('src'),
      name: productDOM.querySelector('.product__name').innerText,
      price: productDOM.querySelector('.product__price').innerText,
      quantity: 1,
    };
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Məhsul səbətə əlavə olundu',
      showConfirmButton: false,
      timer: 1500
    })

    const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

    if (!isInCart) {
      insertItemToDOM(product);
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      handleActionButtons(addToCartButtonDOM, product);
    }
  });
});

function insertItemToDOM(product) {
  cartDOM.insertAdjacentHTML('beforeend', `
    <li class="cart__item cart-item">
        <div class="cart-media">
        <a href="#">
          <img class="cart__item__image" src="${product.image}" alt="${product.name}">
        </a>
        <button class="cart-delete cart__item--removed"  data-action="REMOVE_ITEM"><i class="far fa-trash-alt"></i></button>
        </div>
        <div class="cart-info-group">
            <div class="cart-info">
                <h6><a class="cart__item__name" href="product-single.html">${product.name}</a></h6>
                <p >Qiymət - ₼<span class="cart__item__price"> ${product.price* product.quantity}</span></p>
            </div>
            <div class="cart-action-group">
                <div class="product-action">
                    <button class="action-minus ${(product.quantity === 1 ? ' btn-danger' : '')}" title="Quantity Minus" data-action="DECREASE_ITEM">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input class="action-input cart__item__quantity" title="Quantity Number"  name="quantity"
                        value="${product.quantity}" >
                    <button class="action-plus" data-action="INCREASE_ITEM" title="Quantity Plus" >
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                
            </div>
        </div>
    </li>

  `);

  addCartFooter();
}

function handleActionButtons(addToCartButtonDOM, product) {
  addToCartButtonDOM.innerText = 'Səbətdə';
  addToCartButtonDOM.disabled = true;

  const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');

  cartItemsDOM.forEach(cartItemDOM => {
    if (cartItemDOM.querySelector('.cart__item__name').innerText.toLowerCase() === product.name.toLowerCase()) {
      cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
      cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
      cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
    }
  });
}

function increaseItem(product, cartItemDOM) {
  cart.forEach(cartItem => {
    if (cartItem.name === product.name) {
      console.log("salam")
      cartItemDOM.querySelector('.cart__item__quantity').value = ++cartItem.quantity;
      cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn-danger');
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(product.price)
      console.log(cartItem.quantity)
      cartItemDOM.querySelector(".cart__item__price").innerText = Number(product.price) * Number(cartItem.quantity);
      cartTotalQuantity.innerText = cartItem.quantity.valueOf()
    }
  });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
  cart.forEach(cartItem => {
    if (cartItem.name === product.name) {
      if (cartItem.quantity > 1) {
        cartItemDOM.querySelector('.cart__item__quantity').value = --cartItem.quantity;
        cartTotalQuantity.innerText = (cartItem.quantity).valueOf()

        localStorage.setItem('cart', JSON.stringify(cart));
        cartItemDOM.querySelector(".cart__item__price").innerText = product.price * cartItem.quantity

      } else {
        removeItem(product, cartItemDOM, addToCartButtonDOM);
      }

      if (cartItem.quantity === 1) {
        cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn-danger');
        cartItemDOM.querySelector(".cart__item__price").innerText = product.price * cartItem.quantity
        cartt.innerText = (cartItem.quantity).valueOf()

      }
    }
  });
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
  console.log(cartItemDOM)
  cartItemDOM.classList.add('cart__item--removed');
  setTimeout(() => cartItemDOM.remove(), 250);
  cart = cart.filter(cartItem => cartItem.name !== product.name);
  localStorage.setItem('cart', JSON.stringify(cart));
  addToCartButtonDOM.innerText = 'Add To Cart';
  addToCartButtonDOM.disabled = false;

  if (cart.length < 1) {
    document.querySelector('.cart-footer').remove();
  }
}

function addCartFooter() {
  if (document.querySelector('.cart-footer') === null) {
    cartDOM.insertAdjacentHTML('afterend', `
      <div class="cart-footer">
        <button class="btn btn-danger" data-action="CLEAR_CART">Clear Cart</button>
        <a style="margin-top: 10px;" class="cart-checkout-btn" href="checkout.html">
        <span class="checkout-label">Təsdiq edin</span>
        <span class="checkout-price">₼369.78</span>
    </a>
      </div>
      
    `);

    document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
  }
}

function clearCart() {
  cartDOM.querySelectorAll('.cart__item').forEach(cartItemDOM => {
    cartItemDOM.classList.add('cart__item--removed');
    setTimeout(() => cartItemDOM.remove(), 250);
  });

  cart = [];
  localStorage.removeItem('cart');
  document.querySelector('.cart-footer').remove();

  addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.innerText = 'Add To Cart';
    addToCartButtonDOM.disabled = false;
  });
}

function checkout() {

}
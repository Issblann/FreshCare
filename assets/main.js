// Iteracion de landing page FreshCare con JavasCript
// Llamar a los elementos del index.html

// contenedor de las categorias
const containerCategories = document.querySelector(".containerCategories");
// botones de las categorias (lista de filtrado)
const buttonCategory = document.querySelectorAll(".buttonCategory");
// contenedor de los productos
const productsContainer = document.querySelector(".products-container");
// boton añadir mas
const btnAddMore = document.querySelector(".verMas");
// boton agregar al carrito
const btnAddToCart = document.querySelector(".btn-add");
// boton user
const btnUser = document.querySelector(".user-icon");
// boton menu
const btnMenu = document.querySelector(".menu-icon");
// boton carrito
const btnCart = document.querySelector(".cart-icon");
// contenedor user
const userMenu = document.querySelector(".user-container");
// lista del navbar
const menuList = document.querySelector(".navbar-list");
// carrito contenedor
const cart = document.querySelector(".cart-container");
// burbuja del carrito
const bubbleCart = document.querySelector(".cart-bubble");
// contenedor de las cards del carrito
const cardContainer = document.querySelector(".card-container");
// precio total en carrito
const priceTotal = document.querySelector(".total");
// boton comprar ahora
const btnBuyCart = document.querySelector("#btn-cart-buy");
// boton vaciar carrito
const btnCleanCart = document.querySelector("#btn-cart-clear");
// overlay
const overlay = document.querySelector(".overlay");
// successModal para el mensaje
const successModal = document.querySelector(".add-modal");

// Crear localStorage del carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// Guardar localStorage del carrito
const saveLocalStorage = (cartList) => {
  localStorage.setItem("carrito", JSON.stringify(cartList));
};

// Producto renderizado
const renderProduct = (product) => {
  const { id, name, price, cardImg } = product;
  return `
    <div class="product">
    <img
      src= ${cardImg}
      alt=""
    />
    <div class="product-info">
      <div class="product-top">
        <h3>${name}</h3>
      </div>

      <div class="product-bot">
        <div class="product-price">
          <p><span>$</span>${price}</p>
        </div>
        <div><button class="btn-add" data-id=${id} data-name=${name} data-price=${price}  data-img=${cardImg} >Agregar al carrito</button></div>
      </div>
    </div>
  </div>
  `;
};

// Renderizar productos divididos
const renderProductsDivided = (index = 0) => {
  productsContainer.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join("");
};
// Renderizar los productos
const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderProductsDivided(index);
    return;
  }
  renderProductsFiltered(category);
};

// Renderizar productos filtrados
const renderProductsFiltered = (category) => {
  const productsFiltered = dataProducts.filter((product) => {
    return product.category === category;
  });
  productsContainer.innerHTML = productsFiltered.map(renderProduct).join("");
};

// ultimo index de los productos
const lastIndexProducts = () => {
  return (
    productsController.nextProductsIndex === productsController.productsLimit
  );
};

// añadir mas productos con boton
const addMoreProductsBtn = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (lastIndexProducts()) {
    btnAddMore.classList.add("hidden");
  }
};

// ocultar boton "añadir mas" si hay categoria

const changeAddMoreBtn = (category) => {
  if (!category) {
    btnAddMore.classList.remove("hidden");
    return;
  }
  btnAddMore.classList.add("hidden");
};

// cambiar status del boton de categoria
const changeStateButtonCategory = (selectedCategory) => {
  const categoriesList = [...buttonCategory];
  categoriesList.forEach((button) => {
    if (button.dataset.category !== selectedCategory) {
      button.classList.remove("active");
      return;
    }
    button.classList.add("active");
  });
};

// cambiar estado de los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeStateButtonCategory(selectedCategory);
  changeAddMoreBtn(selectedCategory);
};

// aplicar los filtros a las diferentes categorias
const applyFilter = (e) => {
  if (!e.target.classList.contains("buttonCategory")) {
    return;
  } else {
    changeFilterState(e);
  }
  if (!e.target.dataset.category) {
    productsContainer.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
    productsController.nextProductsIndex = 1;
  }
};

// toggle del carrito, mostrar y ocultar

const toggleCart = () => {
  cart.classList.toggle("open-cart");
  if (menuList.classList.contains("open-menu")) {
    menuList.classList.remove("open-menu");
    return;
  }
  if (userMenu.classList.contains("open-user")) {
    userMenu.classList.remove("open-user");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// toggle del menu, mostrar y ocultar

const toggleMenu = () => {
  menuList.classList.toggle("open-menu");
  if (cart.classList.contains("open-cart")) {
    cart.classList.remove("open-cart");
    return;
  }
  if (userMenu.classList.contains("open-user")) {
    userMenu.classList.remove("open-user");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// toggle del user, iniciar sesion y registrarse

const toggleUser = () => {
  userMenu.classList.toggle("open-user");

  if (cart.classList.contains("open-cart")) {
    cart.classList.remove("open-cart");
    return;
  }
  if (menuList.classList.contains("open-menu")) {
    menuList.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// cerrar las ventanas al scrollear
const closeOnScroll = () => {
  if (
    !menuList.classList.contains("open-menu") &&
    !cart.classList.contains("open-cart") &&
    !userMenu.classList.contains("open-user")
  ) {
    return;
  }
  menuList.classList.remove("open-menu");
  cart.classList.remove("open-cart");
  userMenu.classList.remove("open-user");
  overlay.classList.remove("show-overlay");
};

// cerrar las ventanas al dar click al overlay
const closeOnOverlayClick = () => {
  menuList.classList.remove("open-menu");
  cart.classList.remove("open-cart");
  userMenu.classList.remove("open-user");
  overlay.classList.remove("show-overlay");
};

// cerrar el menu al darle a alguna seccion
const closeOnClickMenu = () => {
  menuList.classList.remove("open-menu");
  cart.classList.remove("open-cart");
  userMenu.classList.remove("open-user");
  overlay.classList.remove("show-overlay");
};

// renderizar la card en el carrito
const renderCardProduct = (card) => {
  const { price, name, id, quantity, cardImg } = card;
  return `
<div class="cart-item">
            <img src=${cardImg}   alt="imagen" /> 

          <div class="item-info">
              <h3 class="item-title">${name}</h3>
              <p class="item-price">${price}</p>
            </div>
            <div class="item-handler">
              <span class="quantity-handler down" data-id= ${id}>-</span>
              <span class="item-quantity">${quantity}</span>
              <span class="quantity-handler up" data-id= ${id}>+</span>
            </div>
          </div> `;
};

// renderizar la card anterior o mostrar un mensaje
// si el carro esta vacio.
const renderCart = () => {
  if (!carrito.length) {
    cardContainer.innerHTML = `<p>No hay productos en el carrito.</p>`;
    return;
  }
  cardContainer.innerHTML = carrito.map(renderCardProduct).join("");
};

// parte logica del precio total del carrito
const getCardTotal = () => {
  return carrito.reduce((acc, cur) => {
    return acc + Number(cur.price) * cur.quantity;
  }, 0);
};

// renderizar el total en el carrito
const showTotal = () => {
  priceTotal.innerHTML = `${getCardTotal().toFixed(2)}`;
};

// renderizar cantidad de productos en la burbuja del carrito
const renderCartBubble = () => {
  bubbleCart.textContent = carrito.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
};

// deshabilitar boton si no hay nada en el carrito (parte visual)
const disableBtn = (btn) => {
  if (!carrito.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

// Checa el estado del carrito
const checkCartState = () => {
  saveLocalStorage(carrito);
  renderCart();
  showTotal();
  disableBtn(btnBuyCart);
  disableBtn(btnCleanCart);
  renderCartBubble();
};

// agregar al carrito productos
const addToCart = (e) => {
  if (!e.target.classList.contains("btn-add")) {
    return;
  }
  const { id, name, price, cardImg } = e.target.dataset;

  const product = productData(id, name, price, cardImg);

  if (isExistingCardProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    createCardProduct(product);
    showSuccessModal("El producto ha sido agregado al carrito");
  }

  checkCartState();
};

// pasar la data del producto a un objeto
const productData = (id, name, price, cardImg) => {
  return { id, name, price, cardImg };
};

// si existe el producto en el carrito
const isExistingCardProduct = (product) => {
  return carrito.find((item) => {
    return item.id === product.id;
  });
};

// agregar otra unidad del mismo producto si esta en el carrito
// o agregar el producto directamente
const addUnitToProduct = (product) => {
  carrito = carrito.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

// modal para la confirmacion de producto agregado
const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

// se crea la card del producto
const createCardProduct = (product) => {
  carrito = [
    ...carrito,
    {
      ...product,
      quantity: 1,
    },
  ];
};

// funcionalidad boton sustraer producto del carrito
const holdMinusBtnEvent = (id) => {
  const cardProductExisting = carrito.find((item) => {
    return item.id === id;
  });

  if (cardProductExisting.quantity === 1) {
    if (window.confirm("Desea eliminar el producto del carrito?")) {
      removeProductFromCard(cardProductExisting);
    }
    return;
  }
  substractProductUnit(cardProductExisting);
};

// eliminar producto del carrito
const removeProductFromCard = (cardProductExisting) => {
  carrito = carrito.filter((product) => product.id !== cardProductExisting.id);
  checkCartState();
};

// sustraer una unidad del carrito
const substractProductUnit = (cardProductExisting) => {
  carrito = carrito.map((product) => {
    return product.id === cardProductExisting.id
      ? {
          ...product,
          quantity: Number(product.quantity) - 1,
        }
      : product;
  });
};

// agregar una unidad mas al producto del carrito
const holdPlusBtnEvent = (id) => {
  const cardProductExisting = carrito.find((item) => {
    return item.id === id;
  });

  addUnitToProduct(cardProductExisting);
};

// funcion para sustraer o sumar cantidad al producto del carrito
const holdQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    holdMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    holdPlusBtnEvent(e.target.dataset.id);
  }

  checkCartState();
};

// resetear carrito
const resetCartItems = () => {
  carrito = [];
  checkCartState();
};

// saltar mensaje cuando se complete o se vacie un carrito
const completeCartAction = (confirmMsg, successMsg) => {
  if (!carrito.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

// para boton de comprar
const completeBuy = () => {
  completeCartAction("Desea completar su compra?", "Gracias por su compra!");
};

// para boton de vaciar
const deleteCart = () => {
  completeCartAction("Desea eliminar su carrito?", "Carrito eliminado :)");
};

const init = () => {
  renderProducts();
  btnAddMore.addEventListener("click", addMoreProductsBtn);
  containerCategories.addEventListener("click", applyFilter);
  btnCart.addEventListener("click", toggleCart);
  btnMenu.addEventListener("click", toggleMenu);
  btnUser.addEventListener("click", toggleUser);
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
  menuList.addEventListener("click", closeOnClickMenu);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  renderCartBubble();
  disableBtn(btnBuyCart);
  disableBtn(btnCleanCart);
  btnBuyCart.addEventListener("click", completeBuy);
  btnCleanCart.addEventListener("click", deleteCart);
  productsContainer.addEventListener("click", addToCart);
  cardContainer.addEventListener("click", holdQuantity);
};

init();

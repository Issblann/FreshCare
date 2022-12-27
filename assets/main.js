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
        <div><button class="btn-add" data-id="${id}" data-name="${name}" data-img="${cardImg}" >Agregar al carrito</button></div>
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
  // categoriesList.push(buttonCategory);
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

const init = () => {
  renderProducts();
  btnAddMore.addEventListener("click", addMoreProductsBtn);
  containerCategories.addEventListener("click", applyFilter);
};

init();

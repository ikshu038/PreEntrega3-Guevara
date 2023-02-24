// Clase para construir productos
class Products {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

// Variable donde se almacenan
let products = [];

// Obtengo el carrito
const cart = document.querySelector(".carrito-productos");

// Obtener productos del LS
const getProducts = () => {
    
    // Obtengo el LS
    let LSproducts = localStorage.getItem("products");

    // Si no me devuelve null (que seria que hay algo) ejecuto el if
    if (LSproducts !== null) {

        // Parseo los objetos del JSON
        const JSONproducts = JSON.parse(LSproducts);

        // Recorro cada objeto y lo agrego nuevamente a la variable products utilizando la clase
        products = JSONproducts.map(JSONproducts => new Products(JSONproducts.name, JSONproducts.price, JSONproducts.img));
    }

    // Retorno productos
    return products;
}

const renderProducts = () => {

    // Borro lo que hay (para no renderizar lo mismo)
    cart.innerHTML = "";

    // Todo lo que se ejecuta para agregar un producto (por eso el forEach)
    products.forEach(product => {;
        // Creacion de los elementos, ponerle las clases y algunos atributos
        const productDOM = document.createElement("div")
        productDOM.className = "carrito-producto d-flex align-items-center justify-content-between";

        const img = document.createElement("img");
        img.className = `carrito-producto__img`;
        img.setAttribute ("src", `${product.img}`);


        const title = document.createElement("div");
        title.className = "carrito-producto-titulo";

        const price = document.createElement("div");
        price.className = "carrito-producto-precio";

        const smallTitle = document.createElement("small");
        const smallPrice = document.createElement("small");

        smallTitle.innerText = "Producto";
        smallPrice.innerText = "Precio";

        const pTitle = document.createElement("p");
        const pPrice = document.createElement("p");

        pTitle.className = "fs-3";
        pPrice.className = "fs-3";

        pTitle.innerText = product.name;
        pPrice.innerText = product.price;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger";
        deleteButton.innerText = `Eliminar ${product.name}`;

        // Le agrego la funcionalidad al boton de eliminar
        deleteButton.addEventListener("click", () => {
            // Busco índice donde está el elemento en el array
            const indexDelete = products.findIndex((productForDelete) => productForDelete.name === product.name);

            // Borro el producto utilizando el índice del array obtenido en lo anterior
            products.splice(indexDelete, 1);

            updateLS();

            // Renderizo el array nuevamente
            renderProducts();
        });

        // Agrego todo al DOM
        title.append(smallTitle);
        title.append(pTitle);

        price.append(smallPrice);
        price.append(pPrice);

        productDOM.append(img);
        productDOM.append(title);
        productDOM.append(price);
        productDOM.append(deleteButton);

        cart.append(productDOM);
    });

    // Ejecuto la funcion de renderizar totales asi se actualiza simultaneamente con los productos
    renderFinalPrices();
}

// Renderizar totales
const renderFinalPrices = () => {
    // Obtengo todo el div de los totales
    const totals = document.querySelector (".totales")

    // Si es 0 (lo que significa que no hay nada) que no se muestren los totales
    if (products.length === 0) {
        totals.className = "totales d-none"
    } 
    
    // Filtro los productos en arrays por separado
    const herb = products.filter ((product) => product.name.includes ("Yerba"))
    const lightbulb = products.filter ((product) => product.name.includes ("Bombilla"))
    const mate = products.filter ((product) => product.name.includes ("Mate"))

    // Todos los valores, con sus respectiva operacion
    const herbPrice = herb.reduce ((acumulador, productHerb) => acumulador + productHerb.price, 0)
    const lightbulbPrice = lightbulb.reduce ((acumulador, productLightbulb) => acumulador + productLightbulb.price, 0)
    const matePrice = mate.reduce ((acumulador, productmate) => acumulador + productmate.price, 0)
    const iva = parseInt((herbPrice + lightbulbPrice + matePrice) * 0.21)
    const total = herbPrice + lightbulbPrice + matePrice + iva

    // Obtengo los p del DOM (Donde se almacenan los totales)
    const pHerbPrice = document.querySelector (".precio-total-yerbas")
    const pLightbulbPrice = document.querySelector (".precio-total-bombillas")
    const pMatePrice = document.querySelector (".precio-total-mates")
    const pIva = document.querySelector (".precio-total-iva")
    const pTotal = document.querySelector (".precio-total-total")

    // Les cambio los textos y les pongo los valores correspondientes
    pHerbPrice.innerText = herbPrice
    pLightbulbPrice.innerText = lightbulbPrice
    pMatePrice.innerText = matePrice
    pIva.innerText = iva
    pTotal.innerText = total
}


// Actualizar LS
const updateLS = () => {
    localStorage.setItem("products", JSON.stringify(products));
}

// Obtengo y renderizo los productos
getProducts();
renderProducts();

// Clase para construir productos
class Products {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

// Variable donde se almacenan
let products = []

// Obtengo el carrito
const cart = document.querySelector(".carrito-productos")

const renderProducts = () => {

    products.forEach(product => {
        const productDOM = document.createElement("div")
        productDOM.className = "carrito-producto d-flex align-items-center"

        const img = document.createElement("img")
        img.className = "carrito-producto__img"

        const title = document.createElement("div")
        title.className = "carrito-producto-titulo"

        const price = document.createElement("div")
        price.className = "carrito-producto-precio"

        const smallTitle = document.createElement("small")
        const smallPrice = document.createElement("small")

        smallTitle.innerText = "Titulo"
        smallPrice.innerText = "Precio"

        const pTitle = document.createElement("p")
        const pPrice = document.createElement("p")

        pTitle.className = "fs-3"
        pPrice.className = "fs-3"

        pTitle.innerText = product.name
        pPrice.innerText = product.price

        title.append(smallTitle)
        title.append(pTitle)

        price.append(smallPrice)
        price.append(pPrice)

        productDOM.append(img)
        productDOM.append(title)
        productDOM.append(price)


        console.log(productDOM)

        cart.append(productDOM)
    });
}

// Actualizar LS
const updateLS = () => {
    localStorage.setItem("products", JSON.stringify(products))
}

getProducts()
renderProducts()
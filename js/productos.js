// Clase para construir productos
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Variable donde se almacenan
let products = []

// Obtengo todos los botones
const herbTraditionalButton = document.querySelector(".button-1")
const herbUruguayanButton = document.querySelector(".button-2")
const herbOrganicButton = document.querySelector(".button-3")
const herbBarbecueButton = document.querySelector(".button-4")
const herbTerereButton = document.querySelector(".button-5")
const herbSoftButton = document.querySelector(".button-6")
const matePumpkinButton = document.querySelector(".button-7")
const mateWoodButton = document.querySelector(".button-8")
const mateAlpacaButton = document.querySelector(".button-9")
const mateSilverButton = document.querySelector(".button-10")
const mateSiliconeButton = document.querySelector(".button-11")
const mateGlassButton = document.querySelector(".button-12")
const lightbulbMetalButton = document.querySelector(".button-13")
const lightbulbSteelButton = document.querySelector(".button-14")
const lightbulbAlpacaButton = document.querySelector(".button-15")
const lightbulbSilverButton = document.querySelector(".button-16")
const lightbulbBronzeButton = document.querySelector(".button-17")
const lightbulbGoldButton = document.querySelector(".button-18")

// Ventana del popup
const added = document.querySelector("#added")

// Mostrar popup con el nombre y el precio del producto
const showPopup = (name, price) => {
    // Mostrar la ventana emergente
    added.style.display = 'block';

    // Ponerle el texto al popup
    added.innerHTML = `<p>Se agrego ${name} - ${price}</p>`

    // Ocultar la ventana emergente después de 2 segundos
    setTimeout(() => {
        added.style.display = 'none';
    }, 1000);
}

// Pushear el producto a la variable productos
const pushProductosToTheVar = (name, price) => {
    products.push(new Products(name, price))
    updateLS()
}

// Pushear y mostrar el popup
const pushProductosAndShowPopup = (name, price) => {
    pushProductosToTheVar(name, price)
    showPopup(name, price)
}

// Actualizar LS
const updateLS = () => {
    localStorage.setItem("products", JSON.stringify(products))
}

// Botones con el esuchador de eventos, ejecutando la funcion de agregar y mostrar popup
herbTraditionalButton.addEventListener("click", () => pushProductosAndShowPopup("Yerba tradicional", 4321, "../imgs/yerba-tradicional.png"))
herbUruguayanButton.addEventListener("click", () => pushProductosAndShowPopup("Yerba uruguaya", 856, "../imgs/yerba-uruguaya.png"))
herbOrganicButton.addEventListener("click", () => pushProductosAndShowPopup("Yerba organica", 4213, "../imgs/yerba-organica.png"))
herbBarbecueButton.addEventListener("click", () => pushProductosAndShowPopup("Yerba barbacua", 3940, "../imgs/yerba-barbacua.png"))
herbTerereButton.addEventListener("click", () => pushProductosAndShowPopup("Yerba terere", 234, "../imgs/yerba-terere.png"))
herbSoftButton.addEventListener("click", () => pushProductosAndShowPopup("Yerba suave", 1645, "../imgs/yerba-suave.png"))
matePumpkinButton.addEventListener("click", () => pushProductosAndShowPopup("Mate calabaza", 2345, "../imgs/yerba-tradicional.png")) // me quede aca
mateWoodButton.addEventListener("click", () => pushProductosAndShowPopup("Mate madera", 452, "../imgs/yerba-tradicional.png"))
mateAlpacaButton.addEventListener("click", () => pushProductosAndShowPopup("Mate alpaca", 6194, "../imgs/yerba-tradicional.png"))
mateSilverButton.addEventListener("click", () => pushProductosAndShowPopup("Mate plata", 4296, "../imgs/yerba-tradicional.png"))
mateSiliconeButton.addEventListener("click", () => pushProductosAndShowPopup("Mate silicona", 254, "../imgs/yerba-tradicional.png"))
mateGlassButton.addEventListener("click", () => pushProductosAndShowPopup("Mate vidrio", 9123, "../imgs/yerba-tradicional.png"))
lightbulbMetalButton.addEventListener("click", () => pushProductosAndShowPopup("Bombilla metal", 127, "../imgs/yerba-tradicional.png"))
lightbulbSteelButton.addEventListener("click", () => pushProductosAndShowPopup("Bombilla acero", 7245, "../imgs/yerba-tradicional.png"))
lightbulbAlpacaButton.addEventListener("click", () => pushProductosAndShowPopup("Bombilla alpaca", 1834, "../imgs/yerba-tradicional.png"))
lightbulbSilverButton.addEventListener("click", () => pushProductosAndShowPopup("Bombilla plata", 274, "../imgs/yerba-tradicional.png"))
lightbulbBronzeButton.addEventListener("click", () => pushProductosAndShowPopup("Bombilla bronce", 1920, "../imgs/yerba-tradicional.png"))
lightbulbGoldButton.addEventListener("click", () => pushProductosAndShowPopup("Bombilla oro", 439, "../imgs/yerba-tradicional.png"))

getProducts()
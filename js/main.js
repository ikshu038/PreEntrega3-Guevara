const getProducts = () => {
    // Obtengo el LS
    let LSproducts = localStorage.getItem("products");

    // Si me devuelve algo (que seria el distinto a null) lo parseo y lo asigno a la variable global productos
    if (LSproducts !== null) {

        // Parseo los objetos literales del JSON
        const JSONproducts = JSON.parse(LSproducts);

        // Recorro cada objeto literal e instancio un nuevo objeto de la clase Producto
        products = JSONproducts.map(JSONproducts => new Products(JSONproducts.name, JSONproducts.price));
    }

    return products;
}




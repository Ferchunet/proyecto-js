const productos = {
    pelelaNena: {
        nombre: 'Pelelanena.png',
        precio: 2700,
        id: 1
    },
    pelelaNene: {
        nombre: 'Pelela Nene',
        precio: 2500,
        id: 2
    },
    andarinNene: {
        nombre: 'Andarin Nene',
        precio: 9500,
        id: 3
    },
    andarinNena: {
        nombre: 'Andarin Nena',
        precio: 9500,
        id: 4
    }
}



const botonesParaAgregar = document.querySelectorAll('.addToCart');
const itemsContainer = document.querySelector('.shoppingCartItemsContainer');
const shoppingTotal = document.querySelector('.shoppingCartTotal');

const productosComprados = [];
let precioTotal = 0;

botonesParaAgregar.forEach(el => {
    el.addEventListener('click', (e) => {
        const productoAComprar = productos[e.target.id];
        
        productosComprados.push(productoAComprar);

        /* mandamos el item al carrito */
        const itemCart = `
            <div class="shoppingCartItem">
                    <p>${productoAComprar.nombre}</p>
                    <p>$${productoAComprar.precio}</p>
                    <p>1</p>
            </div>
        `

        itemsContainer.innerHTML = itemsContainer.innerHTML + itemCart;

        /* actualizamos el precio */
        precioTotal = precioTotal + productoAComprar.precio;
        shoppingTotal.innerText = `$${precioTotal}`
    });
});


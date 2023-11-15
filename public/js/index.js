//Lado del cliente
const socket = io()

const containerProducts = document.getElementById('containerProducts')
const containerForm = document.getElementById('containerForms')
const addButton = document.getElementById('addButton')
const inputTitle = document.getElementById('inputTitle')
const inputDescription = document.getElementById('inputDescription')
const inputPrice = document.getElementById('inputPrice')
const inputThumbnail = document.getElementById('inputThumbnail')
const inputCode = document.getElementById('inputCode')
const inputStock = document.getElementById('inputStock')

socket.on ('products', (store) => {
    containerProducts.innerHTML += ''

    store.forEach(p => {
        containerProducts.innerHTML +=
        `
        <div class="product">
                <h3 class="productTitle">${p.title}</h3>
                <p class="productPrice">${p.description}</p>
                <p class="productPrice">$${p.price}</p>
        </div>
        `
    })

    addButton.addEventListener('click', (event) => {
        const newProduct = {
            title: inputTitle.value,
            description: inputDescription.value,
            price: inputPrice.value,
            thumbnail: inputThumbnail.value,
            code: inputCode.value,
            stock: inputStock.value,
        };

        socket.emit('newProduct', newProduct);
    })
})


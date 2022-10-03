let buscador = document.getElementById("buscador")
let producto = document.querySelectorAll(".producto")
let botonCarrito = document.querySelectorAll(".añadir-carrito")


buscador.addEventListener("keyup", (e)=> {

    document.querySelectorAll(".titulo-producto").forEach(fruta=> {
        if (fruta.textContent.toLowerCase().includes(buscador.value.toLowerCase())) {
            fruta.parentNode.classList.remove("filtro")
        } else {
            fruta.parentNode.classList.add("filtro")
        }
    })
})

for (let i=0; i < botonCarrito.length; i++) {   // hacemos un for porque son varios elementos
    botonCarrito[i].addEventListener("click", ()=> {
        botonCarrito[i].classList.add("agregado")
        botonCarrito[i].textContent = "Agregado"
    })
}


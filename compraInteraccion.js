function hola(id){
    window.location.href = "/subPaginas/compra.html"
    console.log("hola mundo")
    console.log(id)
    localStorage.setItem('img',id)
}

function mostrar(){
    const img = localStorage.getItem('img')
    console.log('Esto es lo que trae: '+img)
    
}

window.onload = function(){//cuando cargue la pagina hacer lo siguiente
    const imagen = document.getElementById("miImagen")
    const img = localStorage.getItem('img')
    return imagen.src = img //actualizamos el src de la imagen
}

function borrar(){
    localStorage.clear()
}
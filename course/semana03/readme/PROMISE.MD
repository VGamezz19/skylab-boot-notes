
//PROMISE --> mirar capeta FETCH de upstream/develop

En el punto THEN solo podra pasar al siguiente se le pasamos OTRA PROMISE.

new Promise -> (resolve, reject) {
    setTimeout(()=> console.log("Run me async"),1000)
}

//puedes concatenar THEN de strings y numbers. pero si rompes el then con alguna otra funcion ya no.
a no ser que esa funcion devuelva otra promise.

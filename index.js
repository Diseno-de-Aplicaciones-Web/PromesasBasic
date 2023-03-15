const parrafo = document.querySelector("p")
const boton = document.querySelector("button")

boton.addEventListener("click",buscarInformacion)

function callbackSeFunciona (datos) {
    parrafo.innerHTML=datos
}

function callbackSeError(error) {
    parrafo.innerHTML="Esto ha sido un error"
}

function argumentoPromesa (resolve, reject) {
    setTimeout(()=>{
        if ( Date.now()%2 === 0 )
            resolve("Estos son os datos")
        else
            reject("Errorrrrrr!")
    }, 3000)
}

function buscarInformacion() {
    parrafo.innerHTML="Esperando..."
    const resposta = new Promise(argumentoPromesa)
    resposta
        .then( callbackSeFunciona )
        .catch( callbackSeError )
}

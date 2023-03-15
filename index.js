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
        if ( Math.random() > 0.5 )
            resolve("Estos son os datos")
        else
            reject("Errorrrrrr!")
    }, 1000)
}

function buscarInformacion() {
    parrafo.innerHTML="Esperando..."
    const resposta = new Promise(argumentoPromesa)
    resposta
        .then( callbackSeFunciona )
        .catch( callbackSeError )
}

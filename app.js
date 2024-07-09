const esconderBotonCopiar = document.querySelector('.botonExtra');
esconderBotonCopiar.style.display = 'none';

const miTextarea = document.getElementById('salida');
miTextarea.style.display = 'none';

const esconderImagen = document.querySelector('.contenedorImagen');
const esconderAlertas = document.querySelector('.alertas');

function encriptacion() {

    esconderBotonCopiar.style.display = 'flex';
    miTextarea.style.display = 'block';
    esconderImagen.style.display = 'none';
    esconderAlertas.style.display = 'none';

    let texto = document.getElementById("entrada").value;
    let encriptar = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    
    document.getElementById("salida").innerText = encriptar;

}

function desencriptacion () {

    esconderBotonCopiar.style.display = 'flex';
    miTextarea.style.display = 'block';
    esconderImagen.style.display = 'none';
    esconderAlertas.style.display = 'none';
    
    let textoIngresado = document.getElementById("entrada").value;
    let desencriptar = textoIngresado.replace(/enter/g, "e")
                                        .replace(/imes/g, "i")
                                        .replace(/ai/g, "a")
                                        .replace(/ober/g, "o")
                                        .replace(/ufat/g, "u");
    
    document.getElementById("salida").innerHTML = desencriptar;

}

function copiar () {
    let copiarTexto = document.getElementById("salida");
    copiarTexto.select();

    document.execCommand('copy');
}

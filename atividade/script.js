function explorarUniverso() {
    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}


function mostrarHistoria() {

    const texto = document.getElementById("textoExtra");

    if (texto.innerHTML === "") {

        texto.innerHTML =
            "A astronomia está relacionada a diversas áreas da ciência, incluindo o estudo da formação e evolução das estrelas, dos planetas, das galáxias e de outros fenômenos cósmicos. A observação do céu continua sendo uma importante ferramenta para compreender nossa posição no universo.";

    } else {

        texto.innerHTML = "";

    }
}


const curiosidades = [

    "A Via Láctea é a galáxia onde está localizado o Sistema Solar.",

    "A luz do Sol leva aproximadamente 8 minutos para chegar até a Terra.",

    "Estrelas podem apresentar diferentes tamanhos, temperaturas e cores.",

    "O Sistema Solar possui oito planetas que orbitam o Sol.",

    "Os telescópios permitem observar objetos que estão extremamente distantes da Terra.",

    "As galáxias podem possuir bilhões de estrelas reunidas pela gravidade."
];


let indiceCuriosidade = 0;


function novaCuriosidade() {

    const texto =
        document.getElementById("curiosidadeTexto");

    texto.innerHTML =
        curiosidades[indiceCuriosidade];

    indiceCuriosidade++;

    if (indiceCuriosidade >= curiosidades.length) {
        indiceCuriosidade = 0;
    }
}


function mudarTema() {

    document.body.classList.toggle("modo-espacial");

}

function alternarCorTema() {
    document.body.classList.toggle("tema-azul");
}
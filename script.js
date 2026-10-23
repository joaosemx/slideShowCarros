
import carros from "./carros.js";
let carroAtual = 0;
let idSlideShow;

document.getElementById("imgCarro").addEventListener("mouseover", pauseSlideShow);
document.getElementById("imgCarro").addEventListener("mouseout", playSlideShow);
document.getElementById("tempo").addEventListener("change", exibirAlert);

function exibirAlert() {
    alert(tempo.value);
}


function exibirCarro() {
    document.getElementById("imgCarro").src = `./imagens/${carros[carroAtual].src}`;
    document.getElementById("nome").innerHTML = carros[carroAtual].nome;
    document.getElementById("potencia").innerHTML = carros[carroAtual].potencia;
}

function atualizarCarro() {
    exibirCarro();
    if (carroAtual < carros.length - 1) carroAtual++;
    else carroAtual = 0;
    exibirCarro();
}

function playSlideShow() {
    idSlideShow = setInterval(atualizarCarro, 1000);
}

function pauseSlideShow() {
    clearInterval(idSlideShow);
}

function main() {
    exibirCarro();
    playSlideShow();
}

main();
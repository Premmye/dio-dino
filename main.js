const dino = document.querySelector(".dino");
let pulando = false;
var posicao = 0;
const background = document.querySelector(".background");
document.addEventListener('keyup', handleKeyUp);

function handleKeyUp(event) {
    if(event.keyCode === 32 && pulando === false){
        pular();
    }
}

function pular() {
   pulando = true;

   let upInterval = setInterval(() => {
    if(posicao >= 150){
        clearInterval(upInterval);

        let downInterval = setInterval(() => {
        
            dino.style.bottom = posicao + 'px';
            posicao -= 20;
        if(posicao <= 0){
        pulando = false;
        clearInterval(downInterval);
        }
        },30);

    }else{
    posicao += 20;
    dino.style.bottom = posicao + 'px';
    }
   },30);
}

function criarCactus() {
    let posicaoDoCactus = 1000;
    let tempoAleatorio = Math.random()* 6000;
    const cactus = document.createElement('div');
    cactus.classList.add("cactus");
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus)

    let leftinterval = setInterval(() => {
        
        if(posicaoDoCactus < -60) {
            clearInterval(leftinterval);
            background.removeChild(cactus);
        }else if(posicaoDoCactus > 0 && posicaoDoCactus < 60 && posicao < 60 ){
            clearInterval(leftinterval);
			document.body.innerHTML = "<h1 class='game-Over'> Fim de Jogo </h1>";
        }else{
            posicaoDoCactus -= 10;
            cactus.style.left = posicaoDoCactus + 'px';
        }
    },20);

    setTimeout(criarCactus,tempoAleatorio);
} 

criarCactus();
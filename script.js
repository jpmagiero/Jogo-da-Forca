onload = init;
var guesses = [];
var nPalavras = 3;
var erros = 0;
var acertos = 0;
var palavraAdivinhar;
var fim = false;
//Função chamada ao carregar o HTML;
function init() {
	palavraAdivinhar = getWord();
	drawLetters(palavraAdivinhar, guesses);
	document.body.addEventListener("keypress", keyListener);
	console.log(palavraAdivinhar);
}

function keyListener(event){
	if(fim){return}
	guesses.push(event.key);
	drawLetters(palavraAdivinhar, guesses);
	verifica(palavraAdivinhar, event.key);

	switch(erros){
		case 1:
		drawHead();
		break;

		case 2:
		drawArm1();
		break;

		case 3:
		drawArm2();
		break;

		case 4:
		drawBody();
		break;

		case 5:
		drawLeg1();
		break;

		case 6:
		drawLeg2();
		fim = true;
		alert("YOU DIED.")
		break;
	}
	if(acertos == palavraAdivinhar.length){
		fim = true;
		alert("YOU WIN!.")
	}
	console.log(erros , acertos);
}

//Função que retorna uma palavra aleatória do vetor de palavras;
function getWord() {
	var words = ["casa","ogro","rpg"]
	return words[Math.trunc(Math.random()*nPalavras)]; 
}

//Função que "desenha" letras escondidas e descobertas
function drawLetters(w,g){
	var write = document.getElementById("word");
	write.innerHTML = "";

	for (var i = 0; i < w.length; i++){
		if(descoberto(w[i],g)){
			write.innerHTML += w[i];
		}else{
			write.innerHTML += " _ ";
		}
	}
}

//Função que verifica se C é igual a algum dos valores no vetor G;
function descoberto(c,g) {
	for (var i = 0; i < g.length; i++){
		if(c == g[i]){
			return true;
		}
	}
	return false;
}

//Função que pontua o chute do usuário, caso correto, e adiciona um erro caso contrário;
function verifica(m,c) {
	var acertou = false;
	for (var i = 0; i < m.length; i++){
		if(m[i] == c){
			acertos++;
			acertou = true;
		}
	}
	if(!acertou){
		erros++;
	}
	return acertou;
}

//função que exibe as letras já chutadas;
function desenhaChutes() {
	// body...
}

//Funções de desenho do corpo
function drawHead() {
	document.getElementById("head").innerHTML = " o";
}
function drawBody() {
	document.getElementById("body").innerHTML = "|";
}
function drawArm1() {
	document.getElementById("arm1").innerHTML = "-";
}
function drawArm2() {
	document.getElementById("arm2").innerHTML = "-";
}
function drawLeg1() {
	document.getElementById("leg1").innerHTML = "/ ";
}
function drawLeg2() {
	document.getElementById("leg2").innerHTML = "\\";
}
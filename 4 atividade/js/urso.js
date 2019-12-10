const larguraDaTela = window.screen.availWidth;
let position = 0;
let animacaoFrame = 0;
const animacaoUrso = ['img/chara-1.png','img/chara-2.png','img/chara-3.png'];
setInterval(function(){
	
	document.getElementById("urso").src = animacaoUrso[animacaoFrame];
	document.getElementById("urso").style = "left: " + position + "px;";
	
	
	position +=4;
	
	animacaoFrame++;
	if(animacaoFrame > 2) {
		animacaoFrame = 0;
	}
	}, 200);

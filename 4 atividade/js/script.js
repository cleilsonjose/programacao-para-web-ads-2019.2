function ligar (){
    document.getElementById("lampada").src="img/lampada-on.jpg";
}
function desligar (){
    document.getElementById("lampada").src="img/lampada.jpg";
}


function adicionaLinha(idTabela) {
    let tabela = document.getElementById(idTabela);
    let numeroLinhas = tabela.rows.length;
    let linha = tabela.insertRow(numeroLinhas);
   	let coluna1 = linha.insertCell(0);
    let coluna2 = linha.insertCell(1);   
    let coluna3 = linha.insertCell(2); 
    let coluna4 = linha.insertCell(3); 

  
    coluna1.innerHTML = 'produto '+ Math.floor((Math.random() * 100) + 1); 
    coluna2.innerHTML = 'R$ '+ Math.floor((Math.random() * 100) + 1)+', '+Math.floor((Math.random() * 100) + 1); 
    coluna3.innerHTML = 'empresa'+ Math.floor((Math.random() * 100) + 1); 
	coluna4.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}
            
            // funcao remove uma linha da tabela
function removeLinha(linha) {
	var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tabela').deleteRow(i);
}    


	




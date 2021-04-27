function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function page(){
    window.open("http://www.google.com");
    window.location.href = "http://www.google.com"
}

function trocar(elemento){
    //document.getElementById("mousemove")
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert ("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove")
    elemento.innerHTML = "Passe o mouse aqui";
} 

function load(){
    alert("Pagina Carregada");
}

function functionChange(elemento){
    console.log(elemento.value)
}

/*
function soma (n1,n2){
    return n1 + n2;
}

var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade ?")
console.log(validaIdade(idade));
*/
/*
var d = new Date();
console.log(d.getDate(),d.getMonth(),d.getFullYear());
*/
/*
var idade = prompt("Qual sua idade ?");
if (idade >= 18){
    alert ("maior de idade");
}else{
    alert ("menor de idade");
};
*/
/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
};
*/
/*
var count;

for (count=0; count <=5; count++){
    alert (count);
}
*/
//var nome = "Gabryell Cavalcante";
//var n1 = 25;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert (idade +  idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão","Brasil"));
//console.log(n1 + n2);
//console.log(n1 - n2);
//console.log(n1 * n2);
//console.log(n1 / n2);

//var lista = ["maçã","pêra","laranja"]
//lista.push("uva")
//console.log(lista);
//lista.pop("uva")
//console.log(lista);

//console.log(lista.reverse());
//console.log(lista.length);
//console.log(lista.lowerCase);
//console.log(lista.upperCase);
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//var frutas = [{nome:"maça",cor:"vermelho"},{nome:"uva",cor:"roxa"}]
//console.log(frutas[1].nome);
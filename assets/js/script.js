
// Ingreso de notas por asignatura
var nota1html = +prompt("Ingrese la nota 1 de HMTL", "")
var nota2html = +prompt("Ingrese la nota 2 de HMTL", "")
var nota3html = +prompt("Ingrese la nota 3 de HMTL", "")
var notapromediohtml = ((nota1html + nota2html + nota3html)/3).toFixed(1);

var nota1css = +prompt("Ingrese la nota 1 de CSS", "")
var nota2css = +prompt("Ingrese la nota 2 de CSS", "")
var nota3css = +prompt("Ingrese la nota 3 de CSS", "")
var notapromediocss = ((nota1css + nota2css + nota3css)/3).toFixed(1);


var nota1js = +prompt("Ingrese la nota 1 de JS", "")
var nota2js = +prompt("Ingrese la nota 2 de JS", "")
var nota3js = +prompt("Ingrese la nota 3 de JS", "")
var notapromediojs = ((nota1js+nota2js+nota3js)/3).toFixed(1);



// Notas html
var html1 = document.getElementById("html1");
html1.innerHTML = nota1html;

var html2 = document.getElementById("html2");
html2.innerHTML = nota2html;

var html3 = document.getElementById("html3");
html3.innerHTML = nota3html;

var promediohtml =document.getElementById("promediohtml");
promediohtml.innerHTML=notapromediohtml;

//Notas css
var css1 = document.getElementById("css1");
css1.innerHTML = nota1css;

var css2 = document.getElementById("css2");
css2.innerHTML = nota2css;

var css3 = document.getElementById("css3");
css3.innerHTML = nota3css;

var promediocss =document.getElementById("promediocss");
promediocss.innerHTML=notapromediocss;

//Notas js
var js1 = document.getElementById("js1");
js1.innerHTML = nota1js;

var js2 = document.getElementById("js2");
js2.innerHTML = nota2js;

var js3 = document.getElementById("js3");
js3.innerHTML = nota3js;

var promediojs =document.getElementById("promediojs");
promediojs.innerHTML=notapromediojs;
function suma(){
    let n1= parseInt(document.getElementById("num1").value);
    let n2= parseInt(document.getElementById("num2").value);
    let sum=n1+n2;
      document.getElementById("respuesta").innerHTML=sum;
 }
 
 function saludar(){
    let nombre=document.getElementById("nom").value;
     alert("Bienvenido a las funciones "+nombre);
 }
 
function resta(){
  let n1= parseInt(document.getElementById("num1").value);
  let n2= parseInt(document.getElementById("num2").value);
  let rest=n1-n2;
    document.getElementById("respuesta").innerHTML=rest; 
} 
function multiplicaion(){
  let n1= parseInt(document.getElementById("num1").value);
  let n2= parseInt(document.getElementById("num2").value);
  let multi=n1*n2;
    document.getElementById("respuesta").innerHTML=multi;
}
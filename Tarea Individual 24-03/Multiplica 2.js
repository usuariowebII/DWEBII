var numero1=5
var numero2=6;
if (numero1>numero2){
  console.log("No es posible procesar la petición");
}else{
  console.log("-----------------------");
  console.log("Tabla del "+numero1);
  console.log("-----------------------");
  for (var i = 1; i <=10; i++) {
    console.log(numero1+"x"+i+"="+(numero1*i));
  }
  console.log("=================================");
  console.log("-----------------------");
  console.log("Tabla del "+numero2);
  console.log("-----------------------");
  for (var j= 1; j <=10; j++) {
    console.log(numero2+"x"+j+"="+(numero2*j));
  }
  console.log("=================================");
}
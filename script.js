window.onload = iniciar;

function iniciar () {

const btnsumar = document.getElementById("btnsuma");
btnsumar.addEventListener("click",clickbtnsuma);

const btnresta = document.getElementById("btnresta");
btnresta.addEventListener("click",clickbtnresta);

const btnmultiplicar = document.getElementById("btnmultiplicar");
btnmultiplicar.addEventListener("click",clickbtnmultiplicar)



}

function clickbtnsuma() {

   //sumar()

   //alert("sumar" + sumar() )

   const resultado = document.getElementById("respuesta");

   resultado.append("la suma: " + sumar() );

} 

function clickbtnresta () {

const txtnum1 = document.getElementById("txtnumero1").value;
const txtnum2=document.getElementById("txtnumero2").value;
const txtnum3=document.getElementById("txtnumero3").value;

const suma= parseInt(txtnum1) - parseInt(txtnum2) - parseInt(txtnum3)

alert("la resta es: " + suma)

    

}


function clickbtnmultiplicar() {

const txtnum1 = document.getElementById("txtnumero1").value;
const txtnum2=document.getElementById("txtnumero2").value;
const txtnum3=document.getElementById("txtnumero3").value;

const suma= parseInt(txtnum1) * parseInt(txtnum2) * parseInt(txtnum3)

alert("la multiplicacion es: " + suma)


}

function sumar (){

    const txtnum1 = document.getElementById("txtnumero1").value;
    const txtnum2=document.getElementById("txtnumero2").value;
    const txtnum3=document.getElementById("txtnumero3").value;
    
    const sumar = parseInt(txtnum1) + parseInt(txtnum2)+ parseInt(txtnum3)
    
    
    return (sumar);
    
}


function resta () {

    
}
    

   
     


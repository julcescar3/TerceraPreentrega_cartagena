//Simulador de costos de productos comprados 
//se establecen que cantidad de productos se van a comprar,
//agregandolos al carrito
//luego en el simulador abajo se establece en cuantas cuotas se
//van a comprar siendo hasta 3 cuotas sin interes
//desde la 4 es un 8% de interes por cuota agregada
//quedando en 6 cuotas 48% de interes y en 12 cuotas 96% de interes.


//***************USO DE STORAGE*******************
localStorage.setItem("equipo1",JSON.stringify({nombre:"dispenser",precio:48000}));
localStorage.setItem("equipo2",JSON.stringify({nombre:"dispenser2",precio:27000}));
localStorage.setItem("equipo3",JSON.stringify({nombre:"dispenser3",precio:45000}));

let var1=0, var2=0, var3=0;
   
let prod1 = JSON.parse(localStorage.getItem("equipo1"));
let prod2 = JSON.parse(localStorage.getItem("equipo2"));
let prod3 = JSON.parse(localStorage.getItem("equipo3"));



//primer producto    
const carrito2 = document.querySelector("#form1");  
carrito2.addEventListener('submit',funct2);
function funct2(e){
    e.preventDefault();
    let formulario=e.target;
    var1 = prod1.precio*parseInt(formulario.children[1].value);
}

//segundo producto
const carrito3 = document.querySelector("#form2");  
carrito3.addEventListener('submit',funct3);
    
function funct3(e){
    e.preventDefault();
    let formulario=e.target;
    var2 = prod2.precio*parseInt(formulario.children[1].value);
}

//tercer producto
const carrito4 = document.querySelector("#form3");  
carrito4.addEventListener('submit',funct4);
    
function funct4(e){
    e.preventDefault();
    let formulario=e.target;
    var3 = prod3.precio*parseInt(formulario.children[1].value);
}

//calcula costo total en base a la cantidad de cuotas

const carrito = document.querySelector("#form4");  
carrito.addEventListener('submit',funct);
    
function funct(e){
    e.preventDefault();
    let formulario=e.target;
    let CuotaMensual=0;
    let PagoContado=0;
    let numCuotas=parseInt(formulario.children[1].value); 
    CostoContado=var1+var2+var3;
    if(numCuotas==1){
        const parrafo = document.querySelector('.qwe');
        parrafo.innerHTML = "DEBERAS PAGAR: " + CostoContado + " AL CONTADO";
    }else if(numCuotas>1 && numCuotas<=3){
            CuotaMensual=CostoContado/numCuotas;
            const parrafo = document.querySelector('.qwe');
            parrafo.innerHTML = "LA CUOTA MENSUAL SERIA: " + CuotaMensual + " SIN INTERES";
    }
    else{
//las cuotas tendran un 8% de interes...
            CuotaMensual=((8/100*numCuotas*CostoContado)+CostoContado)/numCuotas;
            const parrafo = document.querySelector('.qwe');
            parrafo.innerHTML = "LA CUOTA MENSUAL SERIA: " + CuotaMensual + " CON UN INTERES DE %" + 8*numCuotas;
          
        
    }
}
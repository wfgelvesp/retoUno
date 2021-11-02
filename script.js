//Campos de letras
const letters=document.getElementById("letters");
const numbers=document.getElementById("numbers");

let letras = ["a","b","c","d","e","f","g","h","i","j"];
let numeros = [1,2,3,4,5,6,7,8,9,0];

let secuencia = [0,0,0,0,0,0,0,0,0,0];
let secuenciaNum = [0,0,0,0,0,0,0,0,0,0];

let flag=false;

//botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");



//Funcion Validar Letra


const validarLe =(l)=>{
   
    let i=0;
    //ciclo
    while(i<=9){
        //Condicion para el mejor de los casos
         if(l==="a" && secuencia[i]===0){
        secuencia[i]=1;
        console.log(secuencia[0]);
        return true;
    }
        
        if(letras[i]===l){
            //condicion para controlar cuando ya he digitado una letra
            if(secuencia[i]==1){
                return false;
            }
            //condicion para controlar cuando se agg todas las letras
            if(letras[i]==="j"){
                flag=true;
            }
            secuencia[i]=1;
            return true;
        }
        //Condicion para controlar cuando digito una letra sin orden
        if(secuencia[i]===0&&letras[i]!=l){
            return false;
        }
        //incrmento i para seguir ciclo
        if(secuencia[i]===1){
            i++;
        }
        
        console.log(i);
    }
    return false;
}

// Funcion Validar numero

  const validarNum =(n)=>{
    let i=0;
    //ciclo
    while(i<=9){
        //Condicion para el mejor de los casos
         if(n===1 && secuenciaNum[i]===0){
        secuenciaNum[i]=1;
        console.log(secuenciaNum[0]);
        return true;
    }
        
        if(numeros[i]===n){
            //condicion para controlar cuando ya he digitado una letra
            if(secuenciaNum[i]==1){
                return false;
            }
            //condicion para controlar cuando se agg todas las letras
            if(numeros[i]===0){
                flag=true;
            }
            secuenciaNum[i]=1;
            return true;
        }
        //Condicion para controlar cuando digito una letra sin orden
        if(secuenciaNum[i]===0&&numeros[i]!=n){
            return false;
        }
        //incrmento i para seguir ciclo
        if(secuenciaNum[i]===1){
            i++;
        }
        
        console.log(i);
    }
    return false;

}

 


//Funciones
const fnA1 = () =>{
   // let validarL = validarLe("a");
   // console.log(validarL);
   
     if(flag===false){
        let validarL = validarLe("a");
        console.log(validarL);
       if(validarL==true){
        letters.innerHTML+="A";
       }
       else{
           alert("No puede presionar esa tecla");
       }
   }
    
   
   
    else{
    let validarN = validarNum(1);
    console.log(validarN);
   if(validarN==true){
    numbers.innerHTML+="1"
   }
   else{
       alert("No puede presionar esa tecla");
   }
   }
    
   
   
};
const fnB2 = () =>{
   // let validarL = validarLe("b");
   //console.log(validarL);
   console.log("bandera letra b "+flag)
   if(flag===false){
    
    let validarL = validarLe("b");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="B";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(2);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="2"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnC3 = () =>{
    //let validarL = validarLe("c");
   //console.log(validarL);
   if(flag===false){
    
    let validarL = validarLe("c");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="C";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(3);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="3"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnD4 = () =>{
    //let validarL = validarLe("d");
   //console.log(validarL);
   if(flag===false){
    
    let validarL = validarLe("d");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="D";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(4);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="4"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnE5 = () =>{
   // let validarL = validarLe("e");
   //console.log(validarL);
  
   if(flag===false){
    
    let validarL = validarLe("e");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="E";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(5);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="5"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnF6 = () =>{
    //let validarL = validarLe("f");
   //console.log(validarL);

   if(flag===false){
    
    let validarL = validarLe("f");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="F";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(6);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="6"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnG7 = () =>{
    //let validarL = validarLe("g");
   //console.log(validarL);

   if(flag===false){
    
    let validarL = validarLe("g");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="G";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(7);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="7"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnH8 = () =>{
    //let validarL = validarLe("h");
   //console.log(validarL);

   if(flag===false){
    letters.innerHTML+="H";  
    let validarL = validarLe("h");
    console.log(validarL);
   if(validarL==true){

   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(8);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="8"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnI9 = () =>{
   // let validarL = validarLe("i");
   //console.log(validarL);

   if(flag===false){
    letters.innerHTML+="I";    
    let validarL = validarLe("i");
    console.log(validarL);
   if(validarL==true){

   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(9);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="9"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnJ0 = () =>{
    //let validarL = validarLe("j");
   //console.log(validarL);

   if(flag===false){
    
    let validarL = validarLe("j");
    console.log(validarL);
   if(validarL==true){
    letters.innerHTML+="J";
   }
   else{
       alert("No puede presionar esa tecla");
   }
}

else{
let validarN = validarNum(0);
console.log(validarN);
if(validarN==true){
    numbers.innerHTML+="0"
}
else{
   alert("No puede presionar esa tecla");
}
}
};
const fnCL = () =>{
  letters.innerHTML=" " ;
  secuencia = [0,0,0,0,0,0,0,0,0,0];
  flag=false;
};
const fnCN = () =>{
    numbers.innerHTML=" ";
    secuenciaNum = [0,0,0,0,0,0,0,0,0,0];
    

};

//Eventos
a1.onclick=()=>{
    fnA1();
};
b2.onclick=()=>{
    fnB2(); 
};
c3.onclick=()=>{
    fnC3(); 
};
d4.onclick=()=>{
    fnD4(); 
};
e5.onclick=()=>{
    fnE5();
};
f6.onclick=()=>{
    fnF6();
};
g7.onclick=()=>{
    fnG7();
};
h8.onclick=()=>{
    fnH8();
};
i9.onclick=()=>{
    fnI9();
};
j0.onclick=()=>{
    fnJ0();
};
cl.onclick=()=>{
    fnCL();
};
cn.onclick=()=>{
    fnCN();
};
function Calculadora(numero1, numero2, operacion){
    let res=null;
    if(typeof numero1=='number' && typeof numero2=="number"){
        switch(operacion){
            case "suma":
                res=numero1+numero2;
                break;
            case "resta":
                res=numero1-numero2;
                break;
            case "multiplicacion":
                res=numero1*numero2;
                break;
            case "division":
                res=numero1/numero2;
            default:
                console.log("La operacion es incorrecta");
        }
    }
    else {
        console.log("Los numeros no son validos");
    }
    return res;
}

let n1 = Number(prompt("Ingresa un valor"));
let n2 = Number(prompt("Ingresa otro valor"));

let op = prompt("Ingresa la operacion deseada")

if(n1==null || n2==null || op==null){
    console.log("Datos invalidos");
}
else console.log("resultado: ", Calculadora(n1, n2, op));

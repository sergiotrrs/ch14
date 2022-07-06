let opcionElegida = 0; 

switch (opcionElegida) {
    //los casos deben ser del mismo tipo de dato que el declarado en la variable
    case 0:{
        console.log("Accedió a ventas");
        let submenu = 2;
        switch (submenu) {
            case 0:
                console.log("Acá aamos los dinos");
                break;
                default:
                    console.log("Págame");
        }
        break;
    }
    case 1:{
        console.log("Accedió a crédito");
        break;
    }
    case 2: {
        console.log("Accedió a cobranza");
        break;
    }
    case 9:
        case 3:
        case 4:
        case 5:
        console.log("Se transfiere con un humano");
        break;
    default:
        console.log("Opción inválida");
        break;8
}
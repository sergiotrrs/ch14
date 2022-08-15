package org.generation;

import java.util.Scanner;

public class Ciclos {

	public static void main(String[] args) {
		//int edad = 25;
		//while (edad<30) {
			//System.out.println("Eres joven con "+ edad + " años");
			//edad++;
		//}
		
		//tipoDato nombreVar = Asignación(tipo de clase a usar)
//		Scanner sc = new Scanner(System.in);
		//Cajero automático
//	int opcionElegida = 0;
//		while (opcionElegida<9) {
//			System.out.println("*-*-*-*-*-Banco delaCH14-*-*-*-*-*");
//			System.out.println("Opción 1, retirar dinero");
//			System.out.println("Opción 2, hacer un depósito");
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, salir del cajero");
//			System.out.println("Seleccione la opción deseada:");
//			opcionElegida =sc.nextInt();
//			
//			switch(opcionElegida) {	
//				case 1: 
//					System.out.println("Entró opción 1, retirar dinero");
//					break;
//				case 2: 
//					System.out.println("Entró opción 2, hacer un depósito");
//					break;
//				case 3: 
//					System.out.println("Entró opción 3, estado de cuenta");
//					break;
//				case 9: 
//					System.out.println("Entró opción 9, salir del cajero");
//					break;
//				default:
//					System.out.println("Opción no existe, vuelve a intentar");
//			}
//		}
//		System.out.println("Fin del Banco Banquito, su dinero está asegurado");
//		
//		//Ciclo do-while
//		int opcionElegida;
//		int opcionIncorrecta=0;
//		do {
//			System.out.println("-----Banco banquito--------");		
//			System.out.println("Opción 1, retirar dinero ");
//			System.out.println("Opción 2, hacer un deposito");
//			System.out.println("Opción 3, estado de cuenta ");
//			System.out.println("Opción 9, Salir de cajero ");
//			System.out.println("Por favor seleccione la opción deseada:");
//			opcionElegida= sc.nextInt();
//			
//			switch(opcionElegida) {
//			
//			case 1:
//				System.out.println("Entró opción 1, retirar dinero ");
//				break;
//			case 2:
//				System.out.println("Entró opción 2, hacer un depósito");
//				break;
//			case 3:
//				System.out.println("Entró opción 3, estado de cuenta ");
//				break;
//			case 9:
//				System.out.println("Entró opción 9, salir de cajero ");
//				break;
//			default:
//				System.out.println("Opción no valida ");
//				break;	
//				//opcionIncorrecta++;
//				if (++opcionIncorrecta>=3) opcionElegida = 9;
//			}
//		}while(opcionElegida!=9);
//		System.out.println("Fin de banco banquito, su dinero esta seguro ");
	
		//Loop for
	
//		for (int edad = 25 ; edad<30 ; edad++) {
//			if (edad == 28) continue;
//			System.out.println("Eres joven con "+edad+ " años");
//		}
//		
//	//Arbolito de navidad
//		int i;
//		int espacios;
//		int asteriscos;
//		System.out.println("Ingrese cuán alto quiere su arbolito de navidad");
//		Scanner sc = new Scanner(System.in);
//		int filas = sc.nextInt();
//		
//	//Copa depende del tamaño de filas más las filas a la mitad 
//        for(i=1; i<filas+(filas/2); i++){
//            for(espacios=filas+(filas/2); espacios>i; espacios--){
//                System.out.print(" ");}
//            
//            for(asteriscos=1; asteriscos<=2*i-1; asteriscos++){
//                System.out.print("*");}
//            System.out.println("");
//        }
//        //Tronco
//        for(i=1; i<filas-(filas/2); i++){
//            for(espacios=filas+(filas/2); espacios>1; espacios--){
//                System.out.print(" ");}
//            
//            for(asteriscos=filas/2; asteriscos<=(filas/2)+1; asteriscos++){
//                System.out.print("*");}
//            System.out.println("");
//        }
		
		Scanner valor= new Scanner(System.in);
        System.out.println("¿Cuantas filas quieres?");
        int renglon=valor.nextInt();
        int asterisco=1,espacio;
        int tronco, mitad,maceta;
        
        //copa del arbol
        espacio=renglon;
        for(int i=1;i<=renglon;i++) {//es el numero de renglones
            for(int j=1;j<=espacio-1;j++)System.out.print(" ");//es el número de espacios
            for(int k=1;k<=asterisco;k++)System.out.print("*");
            asterisco+=2;//Aumenta los asteriscos cada dos
            espacio--;//Disminulle el espacio cada 1
            
            System.out.println(""); //Imprimimos el salo de linea
        }    
        
        //Tronco
        tronco=2*renglon/3;
        mitad=renglon/2;
        
        
            
        
        
        for(int i=1;i<=mitad;i++) {
            for(int j=1;j<=tronco;j++)System.out.print(" ");
            for(int k=1;k<=mitad;k++)System.out.print("*");
            System.out.println("");        
        }
        System.out.println(mitad);
        
//        Maceta
        maceta=(2*renglon/3)+2;
        for(int i=1;i<=mitad-2;i++) {
            for(int j=1;j<=tronco-2;j++)System.out.print(" ");
            for(int k=1;k<=mitad;k++)System.out.print("*");
            System.out.println("");        
        }

    }
}



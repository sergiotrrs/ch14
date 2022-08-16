package org.generation;

import java.util.Scanner;

public class Ciclos {

	public static void main(String[] args) {

		
		//tipoDato nombreVar = Asignación (tipo de clase a usar), instanciar la clase (new Sacnner)
		Scanner sc = new Scanner (System.in);
		
//		//Cajero automático
//		int opcionElegida = 0;
//		while (opcionElegida<9) {
//			System.out.println("*-*-*-*-*-Banco Banquito-*-*-*-*-*");
//			System.out.println("Opción 1, retirar dinero");
//			System.out.println("Opción 2, hacer un déposito");
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, salir del cajero"); 
//			System.out.println("¿Por favor, seleccione la opción deseada?");
//			opcionElegida= sc.nextInt();
//
//			switch(opcionElegida) {
//				case 1: 
//					System.out.println("Entró opción 1, retirar dinero");
//					break;
//				case 2: 
//					System.out.println("Entró opción 2, hacer un déposito");
//					break;
//				case 3: 
//					System.out.println("Entró opción 3, estado de cuenta");
//					break;
//				case 9: 
//					System.out.println("Entró opción 9, salir del cajero");
//					break;
//				default: 
//					System.out.println("Entró opción no existente, vuelva a intentar");
//			
//		}
//		}
//		System.out.println("Fin de Banco Banquito, su dinero está seguro");
		
//		int opcionElegida;
//		int opcionIncorrecta = 0; 
//		do {
//			System.out.println("*-*-*-*-*-Banco Banquito-*-*-*-*-*");
//			System.out.println("Opción 1, retirar dinero");
//			System.out.println("Opción 2, hacer un déposito");
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, salir del cajero"); 
//			System.out.println("¿Por favor, seleccione la opción deseada?");
//			opcionElegida= sc.nextInt();
//
//			switch(opcionElegida) {
//				case 1: 
//					System.out.println("Entró opción 1, retirar dinero");
//					break;
//				case 2: 
//					System.out.println("Entró opción 2, hacer un déposito");
//					break;
//				case 3: 
//					System.out.println("Entró opción 3, estado de cuenta");
//					break;
//				case 9: 
//					System.out.println("Entró opción 9, salir del cajero");
//					break;
//				default: 
//					System.out.println("Entró opción no existente, vuelva a intentar");
//					//opciónIncorrecta++
//					if(opcionIncorrecta>=3) opcionElegida = 9;
//					
//			}		
//		}while(opcionElegida!=9);
//			
//			
//		System.out.println("Fin de Banco Banquito, su dinero está seguro");
	
		
//		int edad = 25;
//		while (edad<30) {
//			System.out.println("Eres joven con " + edad + " años");
//			edad ++;
//		}
		
		for(int edad = 25; edad<30; edad++) {
			System.out.println("Eres joven con " + edad + " años");
		}
		
	}
	
}
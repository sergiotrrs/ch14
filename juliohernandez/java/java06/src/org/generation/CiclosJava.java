package org.generation;

import java.util.*; //Se importan todas las clases
//import java.util.Scanner; //Pero no disminuye el rendimiento pq el compilador importa las que se usan

public class CiclosJava {

	public static void main(String[] args) {

//		Scanner consoleLog = new Scanner (System.in);
//		
//		//Cajero automático
//		int opcionElegida = 1;
//		while (opcionElegida < 9) {
//			
//			System.out.println("\n*-*-*-*-*Banco Banquito-*-*-*-*-*");
//			System.out.println("Opción 1: retirar efectivo");
//			System.out.println("Opción 2: hacer un depósito");
//			System.out.println("Opción 3: estado de cuenta");
//			System.out.println("Opción 9: salir del cajero");
//			
//			System.out.println("\nIngrese su opción: ");
//			opcionElegida = consoleLog.nextInt();
//			
//			switch (opcionElegida) {
//			case 1:
//				System.out.println("Opción 1: retirar efectivo");
//				break;
//			case 2:
//				System.out.println("Opción 2: hacer un depósito");
//				break;
//			case 3:
//				System.out.println("Opción 3: estado de cuenta");
//				break;
//			case 9:
//				System.out.println("Opción 9: salir del cajero");
//				break;
//				default:
//					System.out.println("Por favor, seleccione la opción deseada");
//			}
//			
//		}

		// While contra for
//		int edad = 25;
//		while (edad < 30) {
//			System.out.println("Eres joven con " + edad++ + " años");
//		}

		for (int edad=25; edad<30;edad++) {
			System.out.println("Eres joven con "+edad +"años");
		}
		
		
		
		
		//For con 'break' y 'continue'
		for (int edad=25; edad<30;edad++) {
			if (edad==28)break; //No imprime 28 en adelante
			System.out.println("Eres joven con "+edad +"años");
		}
		
		System.out.println("\n-------");
		
		for (int edad=25; edad<30;edad++) {
			if (edad==28)continue; //no imprime 28 pero sí 29
			System.out.println("Eres joven con "+edad +"años");
		}
		
		

	}

}

package org.generation;

import java.util.Scanner;

public class Ciclos {

	public static void main(String[] args) {
//		int edad = 25;
//		while (edad<30) {
//			System.out.println("Eres joven con " + edad + " años");
//			edad++;
//		}
//		
		//tpoDato nombreVar = Asignacion (tipo de clase a usar)
		Scanner sc = new Scanner(System.in); // Se hace una instancia (new Scanner) desde la consola (System.in)
		
		
//		cajero automatico
//		int opcionElegida=0;
//		while (opcionElegida<9) {
//			System.out.println("-*-*-*-*-*-Banco Banquito*-*-*-*-*-");
//			System.out.println("Opción 1, retirar dinero");	
//			System.out.println("Opción 2, hacer un depósito");			
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, salir del cajero. ");
//			System.out.println("Por favor selecciones las opción deseada");
//			opcionElegida = sc.nextInt();
//			
//			switch (opcionElegida) {
//			
//			
//			case 1: 
//				System.out.println("Entró Opción 1, retirar dinero");
//				break;
//			case 2:
//				System.out.println("EntróOpción 2, hacer un depósito");
//				break;
//			case 3:
//				System.out.println("Entró Opción 3, estado de cuenta");
//				break;
//			case 4:
//				System.out.println("Entro opcion 4. Prestámos");
//			break;
//			case 9:
//				System.out.println("Opción 9, salir del cajero.");
//				break;
//			default:
//				System.out.println("Opcion no existe");
//		}
//		
//		}
//		System.out.println("Fin, del Banco. Tu dinero esta seguro");
		
		//////////////////BANCO CON DO-WHILE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//	
//		int opcionElegida;
//		int opcionIncorrecta = 0;
//		do {
//
//			System.out.println(" *-*-*-*-* Banco Banquito *-*-*-*-*");
//			System.out.println("Opcion 1, retiar dinero ");
//			System.out.println("Opcion 2, hacer un deposito");
//			System.out.println("Opcion 3, estado de cuenta");
//			System.out.println("Opcion 9, salir del cajero");
//			System.out.print("Porfavor, seleccione la oopcion deseada ?");
//			opcionElegida = sc.nextInt();
//			
//		switch (opcionElegida) {	
//		case 1:
//			System.out.println("Opcion 1, retiar dinero ");
//			break;
//		case 2:
//			System.out.println("Opcion 2, hacer un deposito");
//			break;	
//		case 3:
//			System.out.println("Opcion 3, estado de cuenta");
//			break;
//		case 9:
//			System.out.println("Opcion 9, salir del cajero");
//			break;
//		default: 
//			System.out.println("Agregue opcion valida");
//			if (++opcionIncorrecta >= 3) opcionElegida = 9;
//		}
//		}while (opcionElegida != 9);
//		
//		System.out.println("El fin del Banco Banquito, su dinero esta seguro");
		
	//	int edad = 25;
//		while (edad<30) {
//			System.out.println("Eres joven con " + edad + " años");
//			edad++;
//		}
		
//		for (int edad = 25; edad<30; edad++)
//			System.out.println("Eres joven con " + edad + "años");
	
		
	
			////ARBOLITO DE NAVIDAD
//			System.out.println("Ingrese número de niveles");
//			int n = sc.nextInt();
//			int limit = 2*(n-1)+1;
//					
//					for(int i = 0; i<n; i++) {
//						int asteriscos= 2*(i)+1;
//						int espacios = (limit-asteriscos)/2;
//						for(int j=0; j<espacios; j++) System.out.print(" ");
//						for(int j=0; j<asteriscos; j++) System.out.print("*");
//						System.out.println("");
//						
//					}
//					
//		for (int i=0; i<3; i++) {
//			int palos= 3;
//			int esp = (2*(n-1)/2)-1;
//			for(int j=0; j<esp; j++) System.out.print(" ");
//			for(int j=0; j<palos; j++) System.out.print("|");
//			System.out.println("");
//			
//		}
		
		for (int edad = 25; edad<30; edad++) {
			
			if (edad == 28)break; //  break rompe con el flujo del ciclo. Continue se salta a la siguiente etapa
			System.out.println("Eres joven con " + edad + "años");
	
		}
		
		
	}

}

package org.generation;

import java.util.*;

public class Ciclos {

	public static void main(String[] args) {
//		int edad = 25;
//		while (edad < 30) {
//			System.out.println("Eres joven con " + edad + " Años");
//			edad++;
//		}

		// tipoDato nombreVar = Asignacion (tipo de clase a usar)
		Scanner sc = new Scanner(System.in);

//		// Cajero automatico
//		int opcionElegida = 0;
//		while (opcionElegida < 9) {
//
//			System.out.println("----------Banco Banquito------------");
//			System.out.println("Opcion 1, retirar dinero");
//			System.out.println("Opcion 2, hacer un deposito");
//			System.out.println("Opcion 3, Estado de cuenta");
//			System.out.println("Opcion 9, Salir del cajero");
//			System.out.println("Opcion no existe, vuelva a intentarlo");
//			System.out.print("Seleccione la opcion deseada ");
//			opcionElegida = sc.nextInt(); // de esta manera se solicitan valores en consola
//
//			switch (opcionElegida) {
//			case 1:
//				System.out.println("Entro opcion 1, retirar dinero");
//				break;
//			case 2:
//				System.out.println("Entro opcion 2, hacer un deposito");
//				break;
//			case 3:
//				System.out.println("Entro opcion 3, Estado de cuenta");
//				break;
//			case 9:
//				System.out.println("Entro opcion 9, Salir del cajero");
//				break;
//			default:
//				System.out.println("Opcion no existe, vuelva a intentarlo");
//			}
//		}
//		System.out.println("Fin del banquito");

//		int opcionElegida;
//		int opcionIncorrecta = 0;
//		do {
//			System.out.println("----------Banco Banquito------------");
//			System.out.println("Opcion 1, retirar dinero");
//			System.out.println("Opcion 2, hacer un deposito");
//			System.out.println("Opcion 3, Estado de cuenta");
//			System.out.println("Opcion 9, Salir del cajero");
//			System.out.println("Opcion no existe, vuelva a intentarlo");
//			System.out.print("Seleccione la opcion deseada ");
//			opcionElegida = sc.nextInt(); // de esta manera se solicitan valores en consola
//
//			switch (opcionElegida) {
//			case 1:
//				System.out.println("Entro opcion 1, retirar dinero");
//				break;
//			case 2:
//				System.out.println("Entro opcion 2, hacer un deposito");
//				break;
//			case 3:
//				System.out.println("Entro opcion 3, Estado de cuenta");
//				break;
//			case 9:
//				System.out.println("Entro opcion 9, Salir del cajero");
//				break;
//			default:
//				System.out.println("Opcion no existe, vuelva a intentarlo");
//				if (++opcionIncorrecta >= 3)
//					opcionElegida = 9;
//			}
//		} while (opcionElegida != 9);
//		System.out.println("Fin del banquito");

//		for (int edad = 25; edad < 30; edad++) {
//			System.out.println("Eres joven con "+edad+ "años");
//		}

//		int i,j,k,n;
//        n=10; //Modifica este parámetro si quieres
//        for(i=1; i<n+(n/2); i++){
//            for(j=n+(n/2); j>i; j--){
//                System.out.print(" ");}
//            for(k=1; k<=2*i-1; k++){
//                System.out.print("*");}
//            System.out.println("");
//        }
//        for(i=1; i<n-(n/2); i++){
//            for(j=n+(n/2); j>1; j--){
//                System.out.print(" ");}
//            for(k=n/2; k<=(n/2)+1; k++){
//                System.out.print("*");}
//            System.out.println("");
//        }

		int filas = 10 * 2;
		for (int i = 1; i < filas; i += 2) {
			for (int j = 1; j < filas - i; j += 2) {
				System.out.print(" ");
			}
			for (int l = 0; l < i; l++) {
				System.out.print("*");
			}
			System.out.println("");
		}

		for (int i = 1; i < filas; i += 2) {
			for (int j = 1; j < filas-3; j += 2) {
				System.out.print(" ");
			}
			for (int l = 0; l < i; l++) {
//				System.out.print("*");
			}
			System.out.println("***");
		}

		for (int edad = 25; edad < 30; edad++) {
			if (edad==28)continue;
			System.out.println("Eres joven con "+ edad +"años");}
		}
		
		
	}

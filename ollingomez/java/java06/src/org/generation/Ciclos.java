package org.generation;

import java.util.*;

public class Ciclos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//tipoDato nombreVar=Asignación(tipo de clase a usar)
		Scanner sc = new Scanner(System.in);
		
		
	
//		int opcionElegida=0;
//		while(opcionElegida<9) {
//		System.out.println("----Banco Banquito-*-*-*-*");
//		System.out.println("Opción 1: retirar dinero");
//	    System.out.println("Opción 2: hacer un depósito");
//	    System.out.println("Opción 3: estado de cuenta");
//		System.out.println("Opción 9: salir del cajero");
//		System.out.print("¿Porfavor selecione la opción deseada?: ");
//		opcionElegida=sc.nextInt();			
//			
//			switch(opcionElegida) {
//				case 1:
//					System.out.println("Entra pción 1: retirar dinero");
//					break;
//				case 2:
//					System.out.println("Entra 0pción 2: hacer un depósito");
//					break;
//				case 3:
//					System.out.println("Entra opción 3: estado de cuenta");
//					break;
//				case 9:
//					System.out.println("Entra opción 9: salir del cajero");
//					break;
//				default:
//					System.out.println("Entra opción no existente, vuelva a intentarlo");
//					break;
//			}
//		}
//		System.out.println("Fin de Banco Banquito, su dinero esta asegurado");
		
//		int opcionElegida;
//		int opcionIncorrecta=0;
//		do {
//			System.out.println("*-*-*-*-Banco Banquito-*-*-*-*");
//			System.out.println("Opción 1: retirar dinero");
//		    System.out.println("Opción 2: hacer un depósito");
//		    System.out.println("Opción 3: estado de cuenta");
//			System.out.println("Opción 9: salir del cajero");
//			System.out.print("¿Porfavor selecione la opción deseada?: ");
//			opcionElegida=sc.nextInt();			
//				
//				switch(opcionElegida) {
//					case 1:
//						System.out.println("Entra pción 1: retirar dinero");
//						opcionElegida=0;
//						break;
//					case 2:
//						System.out.println("Entra 0pción 2: hacer un depósito");
//						opcionElegida=0;
//						break;
//				case 3:
//					System.out.println("Entra opción 3: estado de cuenta");
//						opcionElegida=0;
//						break;
//					case 9:
//						System.out.println("Entra opción 9: salir del cajero");
//						break;
//					default:
//						System.out.println("Entra opción no existente, vuelva a intentarlo");
//						//opcionIncorrecta++; se puede ahorar esta linea asiendo preincremento
//						if(++opcionIncorrecta>=3) opcionElegida=9;
//						break;
//				}
//		}while(opcionElegida!=9);
//		
//		System.out.println("Fin de Banco Banquito, su dinero esta asegurado");
		
		
//		int edad=25;
//		while(edad<30) {
//			System.out.println("Eres joven con "+ edad++ +"años");
//	//		}
		
//		for(int edad=25; edad<30; edad++) {
//			System.out.println("Eres joven con "+edad+"años");
//		}
		
		for(int edad=25; edad<30; edad++) {
			if(edad==28)break;
			System.out.println("Eres joven con "+edad+"años");
		}
		System.out.println("///////////////////////////////////////////////////////");
		for(int edad=25; edad<30; edad++) {
			if(edad==28)continue;
			System.out.println("Eres joven con "+edad+"años");
		}
		System.out.println("///////////////////////////////////////////////////////");
		
		///////////////////////////////////////////////////////////////////////////////////////////////////
//		Scanner ar = new Scanner(System.in);
//		int ramas,ren,puntos=1;
//		System.out.println("*-*-*-*-Arbolito-*-*-*-*");
//        System.out.println("¿Cuantas filas quieres?");
//		ramas=ar.nextInt();	
		
//		System.out.println(" ");
//		for(int i=ramas;i!=0;i--) {
//			
//			for(int j=0;j<cuenta;j++) {
//			System.out.print("*");
//			}
//			cuenta +=2;
//			System.out.println(" ");
//		}
		//copa de arbol
//		ren=ramas+1;
//		for(int i=1; i<=ren; i++) {
//			for(int j=1; j<=ramas;j++) {
//				System.out.print(" ");
//			}
//			for(int k=1; k<=puntos;k++) {
//				System.out.print("*");
//			}
//			ramas--;
//			puntos+=2;
//			System.out.println("");
//		}
//		
//		for(int i=1;i<=3;i++) {
//			for(int j=1;j<=(ramas/2)-1;j++) 
//				System.out.print(" ");
//			
//			for(int k=1; k<=3; k++) 
//				System.out.print("*");
//			
//			System.out.println();
//		}
		
		

	}

	
}

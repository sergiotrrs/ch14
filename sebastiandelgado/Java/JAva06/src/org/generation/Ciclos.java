
package org.generation;

import java.util.*;

public class Ciclos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Ciclos: Ciclo while
		/*
		 * while(Expression/ expresión) {
		 *  Statement/ Instrucción
		 *	} 
		 */
//		int edad = 25;
//		while(edad<30) {
//			System.out.println("Eres joven con "+ edad +"años");
//			edad++;
//		}
		
		//CÓMO ASIGNAR INFO QUE YO PIDO:
		//tipoDato nombreVariable = Asignación;
		
		//Cajero automático

		Scanner op = new Scanner(System.in);
		
//		int opcionElegida = 1;
//	
//		while(opcionElegida<9) {
//			System.out.println("*-*-*-*-*  Banorte, el banco fuerte de México *-*-*-*-*-");
//			System.out.println("Opción 1, retirar dinero");
//			System.out.println("Opción 2, hacer depósito");
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, Salir del cajero");
//			System.out.println("Selecciona la opción deseada");
//			opcionElegida = op.nextInt();
//			switch(opcionElegida) {
//			case 1:
//				System.out.println("Entró a opción 1, retirar dinero");
//				break;
//			case 2:
//				System.out.println("Entró a opción 2, hacer depósito");
//				break;
//			case 3:
//				System.out.println("Entró a opción 3, estado de cuenta");
//				break;
//			case 9:
//				System.out.println("Entró a opción 9, Salir del cajero");
//				break;
//				default:
//					System.out.println("Opción no existe, vuelva a intentar");
//			}
//			
//		}
//		System.out.println("Fin de Banorte, su dinero está seguro C: ");
		
		
		/*
		 * Do-while: si queremos más de una instrucción, funciona el do-whie
		 * do{
		 *  Statement( instrucciones)
		 * 	}	while (Expression/ Expresión);
		 */
		
//		int opcionElegida;
//		int opcionIncorrecta = 0;
//		do {
//
//			System.out.println(" *-*-*-*-* Banco Banquito *-*-*-*-*");
//			System.out.println("Opción 1, retiar dinero ");
//			System.out.println("Opción 2, hacer un deposito");
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, salir del cajero");
//			System.out.print("Prfavor, seleccione la oopcion deseada ?");
//			opcionElegida = op.nextInt();
//			
//		switch (opcionElegida) {	
//		case 1:
//			System.out.println("Opción 1, retiar d3inero ");
//			break;
//		case 2:
//			System.out.println("Opción 2, hacer un deposito");
//			break;	
//		case 3:
//			System.out.println("Opción 3, estado de cuenta");
//			break;
//		case 9:
//			System.out.println("Opción 9, salir del cajero");
//			break;
//		default: 
//			System.out.println("Opción no valida, vuelva a intentarlo");
//			if (++opcionIncorrecta >= 3) opcionElegida = 9;
//		}
//		}while (opcionElegida != 9);
//		
//		System.out.println("El fin del Banco Banquito, su dinero esta seguro");
		
		//CICLO FOR:
		/*
		 * for (statment 1;statment 2; statment 3;){
		 * 		Code 
		 * 	}
		 */
		
		for(int edad = 25; edad <30; edad++) {
			System.out.println("Eres joven con " + edad + " años");
		}
	}

	}



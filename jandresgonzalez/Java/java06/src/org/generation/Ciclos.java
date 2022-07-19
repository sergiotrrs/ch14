package org.generation;

import java.util.Scanner;

public class Ciclos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		int edad = 25;
//		while (edad < 30) {
//			System.out.println("Eres joven con " + edad + " años");
//			edad++;
//		}
//		//tipoDato nombreVar = asignación (tipo de clase a usar)
//		Scanner sc = new Scanner(System.in) ;
//		
		
		//Cajero
//		int opcionElegida = 0;
//		while (opcionElegida < 9) {
//		System.out.println("---Banco El Firme---");
//		System.out.println("Opción 1, retirar dinero");
//		System.out.println("Opción 2, depositar dinero");
//		System.out.println("Opción 3, estado de cuenta");
//		System.out.println("Opción 9, salir del cajero");
//		System.out.print("Seleccione la opción deseada");
//			
//			opcionElegida = sc.nextInt();
//			
//		switch (opcionElegida) {	
//		case 1:
//			System.out.println("Seleccionó opción 1, retirar dinero");
//			break;
//		case 2:
//			System.out.println("Seleccionó opción 2, depositar dinero");
//			break;
//		case 3:
//			System.out.println("Seleccionó opción 3, estado de cuenta");
//			break;
//		case 9:
//			System.out.println("Seleccionó opción 9, salir del cajero");
//			break;
//		default:
//			System.out.println("Opción no existente. Vuelva a intentar");
//		}
//		}
//		
//		System.out.println("Gracias por depositar");
//		
//		int opcionElegida;
//		int opcionIncorrecta=0;
//		do {
//			System.out.println("---Banco El Firme---");
//			System.out.println("Opción 1, retirar dinero");
//			System.out.println("Opción 2, depositar dinero");
//			System.out.println("Opción 3, estado de cuenta");
//			System.out.println("Opción 9, salir del cajero");
//			System.out.print("Seleccione la opción deseada");
//				
//				opcionElegida = sc.nextInt();
//				
//			switch (opcionElegida) {	
//			case 1:
//				opcionIncorrecta = 0;
//				System.out.println("Seleccionó opción 1, retirar dinero");
//				break;
//			case 2:
//				opcionIncorrecta = 0;
//				System.out.println("Seleccionó opción 2, depositar dinero");
//				break;
//			case 3:
//				opcionIncorrecta = 0;
//				System.out.println("Seleccionó opción 3, estado de cuenta");
//				break;
//			case 9:
//				opcionIncorrecta = 0;
//				System.out.println("Seleccionó opción 9, salir del cajero");
//				break;
//			default:
//				System.out.println("Opción no existente. Vuelva a intentar");
//				//++opcionIncorrecta;
//				if (++opcionIncorrecta > 2) opcionElegida=9;
//				
//			}		} while (opcionElegida != 9);
//		
//		System.out.println("Gracias por depositar");
		
		//for (int edad = 25; edad < 30; edad++) System.out.println("Eres joven con " + edad + " años");
		
		//int edad = 25;
		//for (; ;)
		//if (edad < 30) break;
		//System.out.println("Eres joven con " + edad++ + " años");
		
		

/////////////////////////////////////
System.out.println("¿De cuántas filas le vendo el árbol?");
Scanner rowCheck = new Scanner(System.in);
int rows = rowCheck.nextInt();
int space = rows;
int condition = 1;
char blank = '\u0020';

//Espacios
for (int j = space; j >=0; j--) {
for (int i = space; i > 0; i--)	System.out.print(blank);
//Estrellas
for (int i=0; i < condition; i++) System.out.print("*");
//Salto de línea
System.out.println("");
space -=1;
condition +=2;
}
//tronco
for (int k=0; k<=2;k++) {
for (int i= 0; i <= (rows/2)-1; i++) {
System.out.print(blank);
}
for (int i = 0; i <= rows; i++) {
	System.out.print("*");
}
System.out.println("");}
//for (int i= 0; i <= (rows/2)-1; i++) {
//System.out.print(blank);
//}
//for (int i = 0; i <= rows; i++) {
//	System.out.print("*");
//}


////Espacios
//for (int i = space; i > 0; i--)	System.out.print(blank);
////Estrellas
//for (int i=0; i < condition; i++) System.out.print("*");
////Salto de línea
//System.out.println("");
//space -=1;
//condition +=2;



////Primera línea
//System.out.println("");
//System.out.print("    ");
//	for (int i = 0; i < 1; i++) {
//	System.out.print("*");
//	}
//System.out.print("    ");
//System.out.println("");
////Segunda fila
//System.out.print("   ");
//	for (int i = 0; i < 3; i++) {
//	System.out.print("*");
//}
//System.out.print("   ");
//System.out.println("");
//System.out.print("  ");
//	for (int i = 0; i < 5; i++) {
//	System.out.print("*");
//}
//System.out.print("  ");
//System.out.println("");
//System.out.print(" ");
//for (int i = 0; i < 7; i++) {
//	System.out.print("*");
//}
//System.out.print(" ");
//System.out.println("");
//for (int i = 0; i < 9; i++) {
//	System.out.print("*");
//}

/////////////////////////////
	}

}

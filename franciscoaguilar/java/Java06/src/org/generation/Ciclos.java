package org.generation;

//El asterisco * importa todas las clases de java.util
import java.util.*;

public class Ciclos {

	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//		int edad = 25;
//		while(edad<30) {
//			System.out.println("Eres joven con " + edad + "años");
//			edad++;
//		}
//		
//		//Para hacer inputs en JAVA:
//		//tipoDato nombreVar = asignación(tipo de clase a usar)
//		//El programa debe tener incluida la librería java.util.scanner
//		Scanner sc = new Scanner(System.in);// INSTANCIANDO LA CLASE para crear un nuevo objeto
//		
//		int opcionElegida = 0;
//		while(opcionElegida<9) {
//			System.out.println("\n*-*-*-*-*- Banco Banquito -*-*-*-*-*");
//			System.out.println("Opción 1: Retirar dinero");
//			System.out.println("Opción 2: Realizar depósito");
//			System.out.println("Opción 3: Estado de cuenta");
//			System.out.println("Opción 4: Salir del cajero");
//			System.out.print("Por favor seleccione la opción deseada: ");
//			
//			opcionElegida = sc.nextInt();
//			switch(opcionElegida) {
//			case 1:
//				System.out.println("Entró a la opción 1: Retirar dinero");
//				break;
//			case 2:
//				System.out.println("Entró a la opción 2: Realizar depósito");
//				break;
//			case 3:
//				System.out.println("Entró a la opción 3: Estado de cuenta");
//				break;
//			case 9:
//				System.out.println("Entró a la opción 9: Salir del cajero");
//				break;
//			default:
//				System.out.println("Opción no existe, vuelve a intentarlo");
//				break;
//			}
//		}
////		
//		System.out.println("Fin de Banco Banquito, tu dinero está seguro");
//		int opcionIncorrecta=0;
//		int opcionElegida; //Aqui la variable no necesita una asignación porque en do while ya va a entrar al ciclo
//		do
//		{
//			System.out.println("\n*-*-*-*-*- Banco Banquito -*-*-*-*-*");
//			System.out.println("Opción 1: Retirar dinero");
//			System.out.println("Opción 2: Realizar depósito");
//			System.out.println("Opción 3: Estado de cuenta");
//			System.out.println("Opción 4: Salir del cajero");
//			System.out.print("Por favor seleccione la opción deseada: ");
//			
//			opcionElegida = sc.nextInt();
//			switch(opcionElegida) {
//			case 1:
//				System.out.println("Entró a la opción 1: Retirar dinero");
//				break;
//			case 2:
//				System.out.println("Entró a la opción 2: Realizar depósito");
//				break;
//			case 3:
//				System.out.println("Entró a la opción 3: Estado de cuenta");
//				break;
//			case 9:
//				System.out.println("Entró a la opción 9: Salir del cajero");
//				break;
//			default:
//				System.out.println("Opción no existe, vuelve a intentarlo");
//				//opcionIncorrecta++;
//				if(++opcionIncorrecta>=3) opcionElegida = 9; 
//				
//				break;
//			}
//		}while(opcionElegida!=9);
//		
//	
//		System.out.println("Fin de Banco Banquito, tu dinero está seguro");
	
	
		for(int edad = 25;edad<30;edad++) {
			
			if(edad == 28) continue;
			System.out.println("Eres joven con " + edad + "años");
			
	}
	
//		
//		//************Arbolito con ciclos**************
//		Scanner sc = new Scanner(System.in);
//		System.out.println("Por favor ingrese el número de líneas: ");	
//		int lineas = sc.nextInt();
//		int estrellas = 0;
//		int espacios = lineas;
//		
//		for(int j = 0; j <= lineas; j++) {
//			System.out.println(" ");
//			
//			for(int i = espacios; i > 0; i--)			
//				System.out.print(" ");	
//			for(int i = 1; i < estrellas; i++)		
//				System.out.print("*");
//		estrellas += 2;
//		espacios--;
//		}
//		
//		 estrellas = 4 ;
//		 espacios = lineas-2;
//		for (int j=0; j <5 ; j++) {
//			System.out.println("");
//			for(int i = 0; i < lineas-3; i++)			
//				System.out.print(" ");	
//			for(int i = 0; i <= estrellas; i++)		
//				System.out.print("*");
//		}
		
//		for(int i = 0; i<=10;i++) {
//			System.out.println();
//		}
		
	
	}
}

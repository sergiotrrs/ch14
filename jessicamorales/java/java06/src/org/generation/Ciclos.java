package org.generation;

//Importar librería para ingresar datos
import java.util.Scanner;

public class Ciclos {

	public static void main(String[] args) {
		int edad = 25;
		while(edad<30) {
			System.out.println("Eres joven con " + edad + " años");
			edad++;
		}
		
		//tipoDato nombreVar = Asignación(tipos de clase a usar)
		Scanner sc = new Scanner(System.in); //Ingresar datos
		
		//Cajero automático
		//Ciclo while
		int opcionElegida = 0;
		while(opcionElegida<9) {
			System.out.println("-*-*-*-*Banco Banquito-*-*-*-*");
			System.out.println("Opción 1, retirar dinero");
			System.out.println("Opción 2, hacer deposito");
			System.out.println("Opción 3, estado de cuenta"); 
			System.out.println("Opción 9, Salir del cajero");
			System.out.println("Por favor selecciona una opción");
			opcionElegida = sc.nextInt(); //El usuario ingresa la opción
			switch(opcionElegida) {
			case 1: 
				System.out.println("Entra opción 1, retirar dinero");
				break;
			case 2: 
				System.out.println("Entra opción 2, hacer deposito");
				break;
			case 3: 
				System.out.println("Entra opción 3, estado de cuenta");
				break;
			case 9: 
				System.out.println("Entra opción 9, Salir del cajero");
				break;
			default:
				System.out.println("No existe la opción elegida");
			}
		}
		System.out.print("Se ha terminado el cajero, su dinero está seguro");
	
	//Ciclo do-while	
	int opcionIncorrecta = 0;
	do {
		System.out.println("-*-*-*-*Banco Banquito-*-*-*-*");
		System.out.println("Opción 1, retirar dinero");
		System.out.println("Opción 2, hacer deposito");
		System.out.println("Opción 3, estado de cuenta"); 
		System.out.println("Opción 9, Salir del cajero");
		System.out.println("Por favor selecciona una opción");
		opcionElegida = sc.nextInt(); //El usuario ingresa la opción
		switch(opcionElegida) {
		case 1: 
			System.out.println("Entra opción 1, retirar dinero");
			break;
		case 2: 
			System.out.println("Entra opción 2, hacer deposito");
			break;
		case 3: 
			System.out.println("Entra opción 3, estado de cuenta");
			break;
		case 9: 
			System.out.println("Entra opción 9, Salir del cajero");
			break;
		default:
			System.out.println("No existe la opción elegida");
			if(++opcionIncorrecta>=3) opcionElegida = 9;
		}
	}while(opcionElegida != 9);
	System.out.print("Se ha terminado el cajero, su dinero está seguro");
	
	//Ciclo for
	for(edad = 25; edad<30; edad++) {
		System.out.println("Eres joven con " + edad + " años");
	}
	
	//for con break
	for(edad=25; edad<30; edad++) {
		if(edad == 28) break;
		System.out.println("Eres joven con " + edad + " años");
	}
	
	//for con continue
	for(edad=25; edad<30; edad++) {
		if(edad == 28) continue;
		System.out.println("Eres joven con " + edad + " años");
	}
	}

}

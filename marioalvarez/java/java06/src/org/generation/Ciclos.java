package org.generation;

import java.util.Scanner;

public class Ciclos {

	public static void main(String[] args) {
		
		//while
		int edad=25;
		while(edad<30){
			System.out.println("Eres joven con"+edad+"años");
			edad++;
		}
		
		
		Scanner sc= new Scanner(System.in);
		
		//CAJERO
		int opcionElegida=1;
		while(opcionElegida<9){
			System.out.println("Banco");
			System.out.println("Opc 1, retirar dinero");
			System.out.println("Opc 2, deposito");
			System.out.println("Opc 3, estado de cuenta");
			System.out.println("Opc 9, Salir del cajero");
			System.out.println("Seleccione una opción");
			
			opcionElegida=sc.nextInt();
			switch(opcionElegida) {
				case 1:
					System.out.println("Entró Opc 1, retirar dinero");
					break;
				case 2:
					System.out.println("Entró Opc 2, deposito");
					break;
				case 3:
					System.out.println("Entró Opc 3, estado de cuenta");
					break;
				case 9:
					System.out.println("Entró Opc 9, Salir del cajero");
					break;
				default:
					System.out.println("Opc no valida");
			}
		} //fin del while
		System.out.println("Fin de banco. Dinero está seguro");
		
		//Para el menu anterior hubiera sido mejor un do while 
		
		//break ->termina la ejecución del for
		//continue ->se salta a la siguiente iteración
		for(edad=25; edad<31; edad++) {
			if(edad==28) break;
			if(edad==29) continue;
			System.out.println("Eres joven con "+edad+"años");
		}
		
		
		
		//fin programa
	}

}


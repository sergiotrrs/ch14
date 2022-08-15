package org.generation;

//import java.util.Scanner;
import java.util.*;

public class Ciclos {
	//Atributos de objeto
	//atrbutos de clases
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int edad = 25;
		while (edad<30) {
			//System.out.println("Eres joven "+ edad + " años");
			edad++;
		}
		
		//tipoDato nombreVar=Asignación (tipo de calse a usar)
		//Tipo : Scanner  neW()es la clase
		//Distanciar a clase 
		Scanner sc = new Scanner(System.in); 
		
		
		
		
		//Cajero automatico 
		/*
		int optionElegida = 1;
		while(optionElegida<9) {
			System.out.println("-----Banco banquito--------");		
			System.out.println("Opcion 1, retirar dinero ");
			System.out.println("Opcion 2, hacer un deposito");
			System.out.println("Opcion 3, estado de cuenta ");
			System.out.println("Opcion 9, Salir de cajero ");
			System.out.println("¿Por favor seleccione la opcion deseada");
			optionElegida= sc.nextInt();
			
			switch(optionElegida) {
			
			case 1:
				System.out.println("Entro 1, retirar dinero ");
				break;
			case 2:
				System.out.println("Entro 2, hacer un deposito");
				break;
			case 3:
				System.out.println("Entro 3, estado de cuenta ");
				break;
			case 9:
				System.out.println("Entro 9, Salir de cajero ");
				break;
			default:
				System.out.println("Opcion no validad, ");
				break;		
							
			}
				
		}
		//ln es un salto de agia
		System.out.println("Fin del banco, banquito");
		*/
		
		//segundo cometario 
		//do while
		/*
		int optionElegida;
		int optionIncorrecta=0;
		do {
			System.out.println("-----Banco banquito--------");		
			System.out.println("Opcion 1, retirar dinero ");
			System.out.println("Opcion 2, hacer un deposito");
			System.out.println("Opcion 3, estado de cuenta ");
			System.out.println("Opcion 9, Salir de cajero ");
			System.out.println("¿Por favor seleccione la opcion deseada");
			optionElegida= sc.nextInt();
			
			switch(optionElegida) {
			
			case 1:
				System.out.println("Entro 1, retirar dinero ");
				break;
			case 2:
				System.out.println("Entro 2, hacer un deposito");
				break;
			case 3:
				System.out.println("Entro 3, estado de cuenta ");
				break;
			case 9:
				System.out.println("Entro 9, Salir de cajero ");
				break;
			default:
				System.out.println("Opcion no validad, ");
				if(++optionIncorrecta>=3) optionElegida=9;
				break;	
			}
		}while(optionElegida!=9);
		System.out.println("Fin de banco banquito, su dinero esta seguro ");
		System.out.println("Fin del progrma");
		*/
		
		
		//for (setencia1; setencia 2; setencia3{
		// //code
		//}
		//1.- se ejecuta la primera vez
		//2.- se compuera
		//Code se realiza
		// se 
		
//		int edad = 25;
//		while (edad<30) {
//			System.out.println("Eres joven "+ edad + " años");
//			edad++;
//		};
		for (edad =25; edad<30; edad++) {
			if(edad==28) continue;
			//System.out.println("Eres joven for "+ edad + " años");
		}
		
		
	
		
		System.out.println("final ");
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	}

}

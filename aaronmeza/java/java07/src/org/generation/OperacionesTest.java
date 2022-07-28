package org.generation;

import java.lang.reflect.Array;

public class OperacionesTest {

	public static void main(String[] args) {
//		int aristas = Operaciones.aristas;//Se usa directamente la clase 
//		Operaciones sapitoChoco = new Operaciones();//Instanciando mi clase Operaciones. sapitoChoco ya es un Objeto.
//		Operaciones sapitoJabon = new Operaciones();
//		sapitoJabon.precio = 9;
		
		
//		System.out.println("Número de aristas del molde "+ aristas );
//		System.out.println("Material del molde: " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate: " + sapitoChoco.precio );
//		System.out.println("Precio Sapito Jabón: " + sapitoJabon.precio);
		
		
		//sapitoJabon.suma(5, 10);
		//Usar directamente mi método desde la clase :) 
		Operaciones.suma(5, 10);
		Operaciones.suma(2, 2);
		
		
//		Operaciones calculadora = new Operaciones();
//		calculadora.suma(5, 10);
		int resultado = Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado es: " + resultado); 
		System.out.println("El resultado resta: " + Operaciones.resta(resultado, 3));
		System.out.println("El resultado multiplica " + Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado división " + Operaciones.division(resultado, 4));
		System.out.println("El resultado raiz2 " + Operaciones.raizCuadrada(3.14));
		
		
		String texto ="A Cinthia le gustan los limones";
		System.out.println("¿A quien le gustan los limones ? " + texto.substring(2	, 9) );
		
		char letra = texto.charAt(2);
		System.out.println("Primera letra: " + letra);
		System.out.println("N. total de letras: " + texto.length() );
		
		
		int myArray[] = {2, 5, 111187, 45, 900};
		
		//System.out.println("Posición del Indice 2: "+ myArray[2]);
		
		for(int j = 0; j < myArray.length; j++) {
			System.out.println("Valor en " + j + "  : " + myArray[j]);
			
		}
		System.out.println();
		
		
		for(int numero: myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		
		String oracion = "Pepe pecas pica papas con un pico y un palito ";
		
		System.out.println("En la oración  hay "+ Operaciones.buscaPs(oracion));
		
		
		System.out.println("El valor más grande que contiene el arreglo es: " + Operaciones.valorMax(myArray));
		
		
		
		
		
		
		
		
		
		
		

	}

}

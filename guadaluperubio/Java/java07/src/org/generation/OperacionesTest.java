package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		
//		int aristas= Operaciones.aristas;   //aquí se usa directamente la clase
//		Operaciones sapitoChoco= new Operaciones();   //instanciado mi clase
//		Operaciones sapitoJabon = new Operaciones();
//		sapitoJabon.precio = 9;
//		
		
//		System.out.println("N. de aristas del molde " +aristas);
//		System.out.println("material del molde: " +);
//		System.out.println("precio sapito chocolate " + sapitoChoco.precio);
//		System.out.println("precio sapito jabon " +sapitoJabon.precio);
		
		
		
		//OPERACIONES
//			sapitoJabon.suma(5,10);
		//usar mi método directamente desde la clase
		Operaciones.suma(5, 10);
		Operaciones.suma(2, 3);
		
		
		int resultado= Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado es : " +resultado);
		
		System.out.println("El resultado es resta: " + Operaciones.resta(resultado, 3));
		System.out.println("El resultado es multiplicación: " + Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado es división: " + Operaciones.division(resultado, 4));
		System.out.println("El resultado de la raiz: " + Operaciones.raizCuadrada(resultado));
		
//		String texto ="A Cinthia le gustan los limones";
//		System.out.println("¿A aquien le gustan los limones? " +texto.substring(2, 9));
//		char letra= texto.charAt(2);
//		System.out.println("primera letra: "+letra);
//		
//		System.out.println( "N. total de letras: " +texto.length());
//		
//		int [] myArray= {2,5,87,45,8};
//		System.out.println("posisicion indice 2: " +myArray [2]);
//		for (int i=0; i < myArray.length; i++) {
//			System.out.println("Valor en "+ i + " : " + myArray[i]);
//		}
//		
//		for (int numero: myArray) {    //este for solo sirve para iterar arreglos
//			System.out.println("Datos dentro del arreglo: " + numero);
//		}
	
		/**
		 * ACTIVIDAD 1
		 * 
		 * DETERMINAR CUANTAS LETRAS P(mayusculas y minusculas) HAY EN:
		 * "Pepe Pecas pica papas con un picoy un palito"	
		 *
		 */
		 
		String texto ="Pepe Pecas pica papas con un picoy un palito";
		System.out.println("¿Cuantas letras p hay en el texto 'Pepe Pecas pica papas con un pico y un palito?'");
		 
			
		
		
		/*
		 *DETERMINAR EL NUMERO MAYOR DE :
		 *{23, 56, 7, 98, 23, 1, 6}
		 *USAR UNA FUNCION MATH
		 *
		 *
		 */
		
		
		
		
	}
	

}

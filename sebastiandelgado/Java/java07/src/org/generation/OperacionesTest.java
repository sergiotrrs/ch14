package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		int aristas = Operaciones.aristas;
//		Operaciones sapitoChoco = new Operaciones(); //instanciando mi clase Operaciones
//		Operaciones sapitoJabon = new Operaciones();
//		sapitoJabon.precio = 9;
//		
//		System.out.println("N. de aristas del molde: "+ aristas);
//		System.out.println("Material del molde: " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate: "+ sapitoChoco.precio);
//		System.out.println("PRecio sapito jabón: "+ sapitoJabon.precio);
		
		//sapitoJabon.suma(5, 10);
		
		//Usar directamente mi método desde la clase
//		Operaciones.suma(5, 10);  
//		Operaciones.suma(2, 2);
		
//		Operaciones calculadora = new Operaciones();
//		calculadora.suma(5, 10);
		
		int resultado= Operaciones.sum(5, 8); //argumentos de función
		System.out.println("El resultado de suma es: " + resultado);
		System.out.println("El resultado de resta es:" + Operaciones.resta(resultado, 3));
		System.out.println("El resultado de multiplicación es " + Operaciones.multiplicacion(resultado, 2));
		System.out.println("E resultado de división es : " + Operaciones.division(resultado, 4));
		System.out.println("El resultado de raíz cuadrada es: " + Operaciones.raiz(resultado));
		
		
		//Se asigna una variable string
		String texto = "A Cinthia le gustan los limones";
		//Se ubica una cadena de caracteres del String con el método Substring(a,b)
		System.out.println("¿A alguien le gustan los limones? " + texto.substring(2,9));
		//Con el método CharAt(a) se toma un caracter en específico
		char letra = texto.charAt(2);
		System.out.println("Primera letra: " + letra);
		System.out.println("N. total de letras: " + texto.length());
		
		int[] myArray = {2,5,87,45,8};
		System.out.println("Posición del índice 2: "+ myArray[2]);
		for (int i=0; i<myArray.length; i++) {
			System.out.println("Valor en "+ i + " : "+ myArray[i]);
		}
		//Otra forma de imprimir el arreglo es: 
		for(int numero:myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		
		
		
		/*
		 * ACTIVIDAD:
		 * Determina cuántas letras P hay en:
		 * ----Pepe Pecas pica papas con un pico y un palito----
		 * 
		 * 
		 * Determinar el número mayor de:
		 * {23, 56, 7, 98, 23 ,1, 6}
		 */
		
		String frase= "Pepe Pecas pica papas con un pico y un palito";
		//Operaciones.letrasP(frase);
		System.out.println("En la frase hay: "+ Operaciones.letrasP(frase));
		
		int numeros[]= {23, 56, 7, 98, 23, 1, 6};
		System.out.println("El número mayor del arreglo es: "+ Operaciones.numMayor(numeros));
		
	}

}

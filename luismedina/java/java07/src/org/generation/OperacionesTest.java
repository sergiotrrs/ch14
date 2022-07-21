package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
//		int aristas = Operaciones.aristas; // Se usa directamente la clase
//		Operaciones sapitoChoco = new Operaciones();// intanciando mi clase
//		Operaciones sapitoJabon = new Operaciones();// intanciando mi clase
//		sapitoJabon.precio = 9;

//		System.out.println("N. de aristas del molde: " + aristas);
//		System.out.println("MAterial del molde: " + Operaciones.material);
//		System.out.println("Precio del sapito chocolate " + sapitoChoco.precio);
//		System.out.println("Precio del sapito chocolate " + sapitoJabon.precio);

//		sapitoJabon.suma(5, 10);
//		Operaciones.suma(5, 10);
//		Operaciones.suma(20, 2);

//		Operaciones calculadora = new Operaciones();
//		calculadora.suma(15, 25);

		int resultado = Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado de la suma es: " + resultado);
		System.out.println("El resultado de la resta es: " + Operaciones.restar(resultado, 3));
		System.out.println("El resultado de la multiplicacion es: " + Operaciones.multiplicar(resultado, 2));
		System.out.println("El resultado de la division es: " + Operaciones.dividir(resultado, 4));
		System.out.println("El resultado de la division es: " + Operaciones.raiz2(resultado));

		String texto = "A Cinthia le gustan los limones";
		System.out.println("¿A quien le gustan los limones? " + texto.substring(2, 9));
		char letra = texto.charAt(2);
		System.out.println("Primera letra :" + letra);
		System.out.println("N. Total de letras: " + texto.length());

		int[] myArray = { 2, 5, 87, 45, 8 };
//System.out.println("Posicion indice 2: "+ myArray[2]);
		for (int i = 0; i < myArray.length; i++) {
			System.out.println("Valor en " + i + " : " + myArray[i]);
		}
		for (int numero : myArray) { // Es un foreach
			System.out.println("Dato dentro del arreglo: " + numero);
		}

		// Ejercicio
//		Actividad 1: Determinar cuantas letras P hay en 
//		"Pepe Pecas pica papas con un pico y un palito"

		String frase = "Pepe Pecas pica papas con un pico y un palito";
		frase = frase.toUpperCase();
		
		System.out.println("El numero total de P's es: "+Operaciones.contarP(frase));
		
		int[] arreglo = {23,56,7,98,23,1,6};
		System.out.println("El numero mayor es: " + Operaciones.numMax(arreglo));

//		Determinar el numero mayor de:
//		{23,56,7,98,23,1,6}
//		Usar una funcion Math.

	}

}

package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int aristas = Operaciones.aristas;
//		System.out.println("N. de aristas del molde " + aristas); //Aqui se usa directamente la clases
		
		Operaciones sapitoChoco =new Operaciones(); //Instanciado mi clase al hacer un nuveo pnejto
		Operaciones sapitoJabon =new Operaciones();
		sapitoJabon.precio=9;
//		System.out.println("Materila de molde "+ Operaciones.material);
//		System.out.println("Precio chocolate "+ sapitoChoco.precio);
//		System.out.println("Precio jabon "+ sapitoJabon.precio);
//		
//		
		//LLammarlo creando un ogeto
		
		sapitoJabon.suma(5, 10);
		
		
		//Usar directamente el metodo desde la calse
		Operaciones.suma(5, 10);
		
//		Operaciones calculadora= new Operaciones();
//		calculadora.suma(5, 10);
//		
		int resultado = Operaciones.sumaRetorno(5, 8);
		
//		System.out.println("El resultado suma :  " + resultado );
//		System.out.println("El resultado resta :  " + Operaciones.resta(resultado, 3));
//		System.out.println("El resultado multiplicaci+on  :  " + Operaciones.multiplicador(resultado, 2) );
//		System.out.println("El resultado  divisón :  " + + Operaciones.division(resultado, 4) );
//		System.out.println("El resultado  raizcuadrada :  " + + Operaciones.raizCuadrada(3.14));
		
		String texto = "A cinthia le gustan los limones";
		System.out.println("¿A quien le gustan los limones? " + texto.substring(2, 9)); // cinthia
		char letra=texto.charAt(2);
		System.out.println("Primera letra: "+ letra);
		
		System.out.println("N.total de letras: "+ texto.length());
		
		
		int[] myArray= {2,5,87,45,8};
		System.out.println("Posicion indice2: "+ myArray[2]);
		
		for (int i=0; i<myArray.length;i++) {
			System.out.println("Valo en "+ i + " : "+ myArray[i]);
		}
		
		
		for (int numero : myArray) {
			System.out.println("Dato dentro del arreglo" + numero);
		}
		
		
		
		/**
		 * Actividad 1:
		 * Determinar cuantas letras P (Mayusculas y minusculas) hay en:
		 * "Pepe Pecas pica papas con un pico y un palito"
		 * 
		 * 
		 * Actividad 2
		 * Determinar el numero mayor de:
		 * {23,56,7,28,23,1,6}
		 * Usar una funcion Math
		 * 
		 */
		int numP=0;
		String frase = "Pepe Pecas pica papas con un pico y un palito";
		
		
		for (int i=0; i<frase.length();i++) {//			
				if(frase.charAt(i) == 'P' || frase.charAt(i) == 'p') {
					numP=1+numP;					
				}
				
		}
		
		
		
		

		
		
		
		
		
		
	}

}

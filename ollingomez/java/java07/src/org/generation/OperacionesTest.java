package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		int arista=Operaciones.aristas;//Se usa directamente la clase
//		Operaciones sapitoChocolate=new Operaciones();//Instaciando mi clase
//		Operaciones sapitoJabon = new Operaciones();//Instaciando mi clase
//		sapitoJabon.precio=9;
		
//		System.out.println("N. de aristas del molde " + arista);
//		System.out.println("Matrial del modelo " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate " + sapitoChocolate.precio);
//		System.out.println("Precio Sapito Jabon " + sapitoJabon.precio);
		
		
//		sapitoJabon.suma(5, 10);
		
//		Operaciones.suma(5, 10);
		int resultado=Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado de la suma es: "+resultado);
		System.out.println("El resultado de la resta es: "+ Operaciones.resta(resultado, 3));
		System.out.println("El resultado de la multiplicacioin es: "+ Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado de la división es: "+ Operaciones.division(resultado, 4));
		System.out.println("El resultado de la división es: "+ Operaciones.raizCuadrada(3.14));
		
		String texto="A Cinthia le gustan los limones";
		System.out.println("¿A quien le gustan los limones? "+texto.substring(2,9));
		char letra=texto.charAt(2);
		System.out.println("Primera letra: " +letra);
		System.out.println("N.total de letras: "+texto.length());
		
		int [] myArray= {2,5,87,45,8};
		System.out.println("Posición indice 2: "+myArray[2]);
		
		for(int i=0;i<myArray.length;i++) {
			System.out.println("Valor en "+i + ":"+ myArray[i]);
		}
		
		for(int numero: myArray) {
			System.out.println("Dato dentro del arreglo: "+numero);
		}
		
		/**
		 * Actividad 1:
		 * Determinar cunatas letras P (Mayuscula y minusculas)hay en
		 * "Pepe Pecas pica papas con un pico y palito"
		 * 
		 * Determinar el número mayor de:
		 * {23,56,7,98,23,1,6}
		 * Usar una función Math
		 */
		
		
	}

}

package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		
		//Ser usa directamente la clase
		//Solo tiene acceso a los atributos de clase:
		//aqui no se accede a precio por eso que dice arriba
		int aristas=Operaciones.aristas;
		
		//hay un constructor vacío
		//se instancia la clase operaciones
		//sapitoChoco es un objeto que tiene 
		//todos los atributos 
		//de la clase Operaciones
	
		Operaciones sapitoChoco=new Operaciones();
		Operaciones sapitoJabon=new Operaciones();
		sapitoJabon.precio=9;
		
		System.out.println("No. de aristas "+ aristas);
		System.out.println("Material del molde: "+ Operaciones.material);
		//aqui si podemos acceder a precio
		System.out.println("Precio sapito choco: "+ sapitoChoco.precio);
		System.out.println("Precio sapito choco: "+ sapitoJabon.precio);
	
		//si no le ponemos el static en el otro doc 
		//no podriamos poder llamar a suma desde operaciones aqui
		
		Operaciones.suma(10,5);
		Operaciones.suma(4,0);
		
//		Operaciones calculadora =new Operaciones();
//		calculadora.suma(5,10);
		
		//aqui en vez de parámetros son argumentos
		//ya cuando estamos "usandolos" 
		int resultado=Operaciones.sumaRetorno(8, 5);
		System.out.println("El resultado suma es: "+resultado);
		System.out.println("El resultado suma es: "+ Operaciones.resta(resultado, 3));
		System.out.println("El resultado suma es: "+ Operaciones.mul(resultado, 3));
		System.out.println("El resultado suma es: "+ Operaciones.div(resultado, 5));
		System.out.println("El resultado suma es: "+ Operaciones.raiz(5));
		
		String texto="A Cinthia le gustan los limones";
		
		System.out.println("¿A quién le gustan los limones? a "
		+ texto.substring(2,9));
		
		char letra=texto.charAt(2);
		System.out.println("Primera letra: "+letra);
		System.out.println("No. total de letras: "+texto.length());
		
		int[] myArray= {2,5,87,45,8};
		System.out.println("Posición indice 2: " + myArray[2]);
		
		for (int i=0;i<myArray.length;i++) {
			System.out.println("Valor en: "+i+": "+myArray[i]);
		}
		
		//Por cada iteración, número va a obtener 
		//el dato del arreglo
		for(int numero: myArray) {
			System.out.println("Datoss dentro del arreglo: "+numero);
		}
		
		//String act1="Pepe Pecas pica papas con un pico y un palito";
		
		int[] array= {23,56,7,98,23,1,6};
		
		for (int i=1;i<array.length;i++) {
			int a=array[i-1];
			int b= array[i];
			int c=Operaciones.max(a,b);
			System.out.println("a "+a);
			System.out.println("b "+b);
			System.out.println("a y b: "+c);
			System.out.println("mayor: "+ Operaciones.max(c,b));
		}
		

	}
}


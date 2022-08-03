package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		//Variable estática  de la clase Operaciones
		//No tengo que instanciar un objeto para acceder a ella
//		int aristas=Operaciones.aristas;
//		
//		//Instanciando la clase
//		Operaciones sapitoChoco= new Operaciones();
//		Operaciones sapitoJabon= new Operaciones();
//		
//		sapitoJabon.precio=9;
//		
//		System.out.println("Número de aristas del molde:"+aristas);
//		System.out.println("Material  del molde:"+Operaciones.material);
//		System.out.println("Precio Sapito Chocolate:"+sapitoChoco.precio);
//		System.out.println("Precio Sapito Chocolate:"+sapitoJabon.precio);
		
		//Operaciones
		Operaciones op=new Operaciones();
		op.suma(1,2);
		
		//COmo el método es estático, no necesito instanciar para utilizar el método
		Operaciones.suma2(1, 3);
		
		int resultado=Operaciones.sumaRetorno(5, 8);
		System.out.println("El resulato 'suma retorno' es:"+resultado);
		System.out.println("El resulato 'resta retorno' es:"+Operaciones.restaRetorno(resultado, 3));
		System.out.println("El resulato 'multiplica retorno' es:"+Operaciones.multiplicacionRetorno(resultado, 2));
		System.out.println("El resulato 'division retorno' es:"+Operaciones.divisionRetorno(resultado, 4));
		System.out.println("El resulato 'division retorno' es:"+Operaciones.raizCuadrada(4));
		
		/**
		 * STRING 
		 */
		
		String texto="A Cinthia le gustan los limones";
		System.out.println("¿A quien le gustan los limones? "+ texto.substring(2,9)); // substring(Desde donde quiero, Hasta donde quiero+1);
		char letra=texto.charAt(2); //Obtiene la C
		System.out.println("Primera letra: "+letra);
		
		int[] myArray= {2,5,87,45,8};
		System.out.println("Posición índice 2: "+myArray[2]);
		
		for(int i=0; i<myArray.length;i++) {
			System.out.println("Valor en "+i+" : "+myArray[i]);
		}
		
		for(int i:myArray) {
			System.out.println("Dato dentro del arreglo: "+i);
		}
		
		/**
		 * Actividad 1: Determinar cuantas letras P hay en
		 * "Pepe Pecas Pica papas con un pico y un palito" 
		 */
		
		 int[] array={23,56,7,98,23,1,6};
		 int numP=Operaciones.pCounter("Pepe Pecas Pica papas con un pico y un palito");
		 System.out.println("EL número de Ps es: "+numP);
		 int max=Operaciones.maxNumber(array);
		 System.out.println("EL número máximo es: "+max);
		 max=Operaciones.maxNumber2(array);
		 System.out.println("EL número máximo es: "+max);
		
		
	}

}

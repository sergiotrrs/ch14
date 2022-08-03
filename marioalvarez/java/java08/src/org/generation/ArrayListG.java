package org.generation;
import java.util.*;

public class ArrayListG {

	

	
	public static void main(String[] args) {
		/**
		 * Un ArrayList es una coleccion ordenana qu permite elemenetos duplicados
		 * Se basa en un array redimensionable. De las colecciones es la que mejor rendimiento tiene.
		 * Las colecciones no usan valores primitivos, usan los tipos envolventes.
		 */
		
		//Definimos un arraylist de tipo String
		
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades= new ArrayList<Integer>();
		
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Mazda");
		System.out.println(cars);
		cars.add(1,"Mercedes Benz");
		System.out.println(cars);
		System.out.println("Tamaño:"+cars.size());
		
		//Desplegar una posición indicada con get
		String autoLucia=cars.get(1);
		System.out.println("Auto de Lucia "+autoLucia);
		
		//Eliminar una posición de la colección
		String elementoBorrado=cars.remove(2);
		System.out.println("Elemento borrado"+elementoBorrado);
		
		ArrayList<String> autos= new ArrayList<String>();
		//Aqui cambié la referencia, autos apuntará a la direccion de memoria de cars
		//Si realizo cambios en autos, cars tambien se verá modificado
		
		autos=cars;
		System.out.println("autos"+autos);
		System.out.println("cars"+cars);
		
		//autos.clear(); //Me limpia esta colección
		autos.remove(1);
		System.out.println("autos"+autos);
		System.out.println("cars"+cars);
		
		System.out.println("Clone:");
		//Para hacer una copia independiente
		autos=(ArrayList<String>)cars.clone();
		autos.remove(1);
		System.out.println("autos"+autos);
		System.out.println("cars"+cars);
		
		for(int i=0; i<cars.size();i++) {
			System.out.println("Te regalo el auto:"+cars.get(i));
		}
		
		for(String data: cars) {
			System.out.println("Te regalo el auto:"+data);
		}
		
		cars.forEach(elemento->{
			System.out.println("Auto:"+elemento);
		});
	}
	
	

	
	
}


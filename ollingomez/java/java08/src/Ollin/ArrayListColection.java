package Ollin;

import java.util.ArrayList;


public class ArrayListColection {
	public static void main(String[] args) {
		// TODO Auto-generated method stub	
		/*
	 * Un ArrayList es una coleccion ordenada
	 * que permite elementos duplicados.
	 * Se basa en un array redimensionable que aumente su tamño
	 * Según crece la colección de elementos.
	 * De las colecciones, es la que mejor rendimiento tiene.
	 * 
	 * las colecciones no usan valores primitivos, usan los tipos 
	 * envolventes.
	 * 
	 * ej. int->Integer
	 */

		//Definimos un Arraylist de tipo String
	ArrayList<String> cars = new ArrayList<String>();
	ArrayList<Integer> edades = new ArrayList<Integer>();
	
	cars.add("Volvo");
	cars.add("BMW");
	cars.add("Vochito");
	cars.add("Volvo");
	cars.add("Mazda");
	
	//Agregar unelelmento en una posición indicada
	cars.add(1,"Mercedes Benz");
	System.out.println(cars);
	System.out.println(cars.size());
	
	//Desplegar una posición indicada con get
	String autoLucia=cars.get(1);
	System.out.println("Auto de Lucia: "+ autoLucia);
	
	//Eliminar una posición de la colección, utilizamos remove
	cars.remove(2);
	System.out.println(cars);	
	//para recuperarlo
	String elecktra=cars.remove(2);
	System.out.println("Se lleva Electra: "+elecktra);
	
	
	ArrayList<String> autos=new ArrayList<String>();
	//Otra forma de generar el ArrayList
	//var autos =new ArrayList<String>();
	autos=cars;
	System.out.println(autos);
	System.out.println(cars);
	//verificamos su hashCode
	//Los objetos no compian sus datos solo su referencia
	System.out.println(autos.hashCode());
	System.out.println(cars.hashCode());
	//para hacer una copia se usa clone
	autos=(ArrayList<String>)cars.clone();
	//verificamos su hashCode
	System.out.println("HahsCode autos: " +autos.hashCode());
	System.out.println("HahsCode cars: " + cars.hashCode());
	autos.clear();
	System.out.println("****************");
	System.out.println("HahsCode cars: " + cars.hashCode());
	System.out.println("HahsCode autos: " +autos.hashCode());
	System.out.println(autos);
	System.out.println(cars);
	

	for (int i = 0; i < cars.size(); i++) {
		System.out.println("Te regalo el auto: " + cars.get(i));
	}

	for (String elemento : cars) {
		System.out.println("Datos: "+elemento);
	}
	
		
	cars.forEach(elemento->{
		System.out.println("elementos: "+elemento);
	});
	
	
	
	
	
	}

}


package org.generation;
import java.util.ArrayList;



public class ArrayListCollection {

	public static void main(String[] args) {
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>(); 
		
		
		
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		
		//Agregar un elemento en una posición indicada
		cars.add(1, "Mercedes Benz");
		
		System.out.println(cars);
		System.out.println(cars.size());
		
		
		//Desplegar una posición indicada con el metodo get  
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucia: " + autoLucia);
		
		
		
		//Eliminar una posición de la colección 
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva eleckta: " + elektra);
		
		
		
		
		
		
		
		ArrayList<String> autos = new ArrayList<String>();
		
		autos = (ArrayList<String>) cars.clone();
		System.out.println(autos.hashCode());
		System.out.println(cars.hashCode());
		
		
		autos.clear();
		System.out.println(autos);
		System.out.println(cars);
		
		for (int i = 0; i < cars.size(); i++) {
			System.out.println("Te regalo el auto: " + cars.get(i));
		}
		
		for(String carro : cars ) {
			System.err.println(carro);
			
		}
		
		cars.forEach(elemento ->{
			System.out.println("Auto: " + elemento);
		});
		

	}

}

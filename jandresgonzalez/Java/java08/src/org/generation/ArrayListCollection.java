package org.generation;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//ArayList: colección ordenada
		//Permite elementos duplicados
		//Array redimensionable
		
		//Las colecciones no usan valores primitivos
		//Usan envolventes int>Integer
		
		
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>();
		//Agregamos elementos al ArrayList
		cars.add("Volvo");
		cars.add("Vocho");
		cars.add("Tsuru tuneado");
		cars.add("Vocho");
		cars.add("Mitsubishi Lancer");
		
		System.out.println(cars);
		
		cars.add(1, "Mercedes Benz");
		int carsSize = cars.size();
		System.out.println(cars);
		System.out.println(carsSize);
		cars.remove(5);
		System.out.println(cars);
		
		String autoLucia = cars.get(2);
		System.out.println("El auto es: "+ autoLucia);
		
		String elektra = cars.remove(1);
		System.out.println(cars);
		System.out.println(elektra);

		
		ArrayList<String> autos = new ArrayList<String>();
		autos = (ArrayList <String>) cars.clone();
		int hashAutos = autos.hashCode();
		int hashCars = cars.hashCode();
		System.out.println("Hashcode autos: " + autos.hashCode());
		System.out.println("Hashcode cars: " + cars.hashCode());
		cars.add(elektra);
		System.out.println(cars);
		System.out.println(autos);
		
		hashAutos = autos.hashCode();
		hashCars = cars.hashCode();
		
		if (hashAutos == hashCars) System.out.println("Iguales hash");
		else System.out.println("No son iguales");
				
		System.out.println("Hashcode autos: " + autos.hashCode());
		System.out.println("Hashcode cars: " + cars.hashCode());

		
		//for iterando cars.size()
		for (int i= 0; i < cars.size(); i++) {
			System.out.println("Los carros son: " + cars.get(i) );
		}
		
		//forEach
		for (String auto : cars) {
			System.out.println("Tenemos: " + auto);
			
		}
		
		//Con arrow
		cars.forEach(elemento -> {
			System.out.println("Arrow: " + elemento);
		});
		
		
		

	}

}

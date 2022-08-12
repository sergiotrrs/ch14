package org.generation;
import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * Un ArrayLit es un coleccion ordenada
		 * que permite elementos duplicados.
		 * SE basa en un array redimensioble que aumenta su tamaño
		 * segun crece la coleccion de elementos.
		 * DE las colleciones, es la mejor rendimiento tienen
		 * 
		 * Las colecciones no usas valores primitivos, usan los tipos envolventes.
		 * ejm int---Integer
		 */
		
		//Definimos un arayList de tipo String
		
		ArrayList<String> card = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>();
		//Agregamos elemetos al arreglo
		card.add("Volvo");
		card.add("BMW");
		card.add(0,"Vochito");
		card.add("Volvo");
		card.add("Mazda");
		System.out.println(card);
		
		card.add(1, "Mercedes Benz");
		//Agregar un elemento en una pisicion indicada
		System.out.println(card);
		System.out.println(card.size());
		
		//Desplegar una posicion indicada 
		String autoLucia = card.get(1);
		System.out.println("Auto de Lúcia: " + autoLucia);
		
	
		//Eliminar una posición de la colección, utilizamos remove
		String electra = card.remove(2);
		System.out.println(card);		
		System.out.println("Se lleva electra: "+ electra);
		
		ArrayList<String> autos =new ArrayList<String>();
		autos =(ArrayList<String>) card.clone();
		System.out.println(autos);
		System.out.println(card);
		System.out.println(card.hashCode());
		autos.clear();
		System.out.println(card);
		System.out.println(autos);
		
		
		for(int i=0; i<card.size();i++) {
			System.out.println("Te relalamos erl auto" + card.get (i));
		}
		
		
		for (String elemento:card) {
			System.out.println(elemento);
		}
		
		
		card.forEach(elemento ->{
			System.out.println("For each: " +elemento);
		}
		);
		
		
	}

}

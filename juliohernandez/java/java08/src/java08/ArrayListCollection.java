package java08;
import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * Un ArrayList es una colección ordenada
		 * que permite elementos duplicados.
		 * 
		 * Se basa en un array redimensionable que aumenta su
		 * tamaño según crece la colección de elementos
		 * 
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * Las colecciones no usan valores primitivos, usan los tipos
		 * envolventes: ej.: int ---> Integer
		 */
		
		//Definimos un arrayList de tipo String
		ArrayList<String> cars = new ArrayList<String>();
		
		//Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMV");
		cars.add(0,"Vochito"); //Se puede agregar valor en cualquier posición
		cars.add("Volvo"); //Se pueden agregar valores repetidos
		cars.add("Mazda");
		
		System.out.println(cars); //Ya imprime los elementos
		System.out.println(cars.size()); //Conocer su tamaño
		
		int numeros[]= {1,2,3,4,5,6,7};
		System.out.println(numeros);  //ID
		
		//Desplegar una posición indicada con GET
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucía"+autoLucia);
		
		//Eliminar una posición de la colección: Remove
		String eliminado = cars.remove(2); //Regresa BMV
		System.out.println(cars);
		System.out.println("Electra se lleva: "+eliminado);
		
		//   EXISTTE              INSTANCIADO
		ArrayList<String> autos = new ArrayList<String>(); //Se debe llamar al constructor para instanciar el obj.
		// == var autos = new ArrayList<String>();
		
		autos = cars;
		System.out.println("\n----\n"+autos);
		System.out.println(cars);
		
		var unArray = new ArrayList<ArrayList>();
		/*
		System.out.println("-----\n Igualar objs\n----");
		autos = cars; //Cuando se igualan objs. se pasa el hashcode
		System.out.println(autos.hashCode());
		System.out.println(cars.hashCode());
		autos.clear(); //Se borra autos pero...
		System.out.println(cars); //También cars
		*/
		System.out.println("-----\n CLONAR OBJS \n----");
		autos = (ArrayList<String>) cars.clone();
		
		System.out.println("hash cars: "+cars.hashCode());
		System.out.println("hash autos: "+autos.hashCode());
		//Tienen el mismo hashCode porque tienen el mismo contenido (evitar memoria)
		//Idea! = sirve para verificar igualdad de elementos
		
		autos.clear();
		
		//hashCode diferentes
		System.out.println("hash cars: "+cars.hashCode());
		System.out.println("hash autos: "+autos.hashCode());
		
		System.out.println(cars);
		System.out.println(autos);
		
		
		//Iterar con forEach
		for (String elemento : cars) {
			System.out.println(elemento);
		}
		
		//forEach con Arrow
		cars.forEach(elemento ->{
			System.out.println("Auto: " + elemento);
		});
		
		//Array de Arrays
		unArray.add(autos);
		unArray.add(cars);
		unArray.add(null);
		
		var numericos = new ArrayList<Integer>();
		numericos.add(22);
		numericos.add(33);
		numericos.add(66);
		
		unArray.add(numericos);
	
		System.out.println("Array de Array: \n"+unArray);
	}

}

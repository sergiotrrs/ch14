package org.generation.fabrica;

import org.generation.gelatinas.*;
import org.generation.gomitas.GomitasDulces;
import org.generation.gomitas.GomitasEnchiladas;
import java.util.*;
import org.generation.GrenetinaAbstract;

public class TestPractice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * Crear un proyecto con mínimo dos paquetes
		 * y en cada paquete al menos dos clases
		 * en un paquete. Relacionar las clases entre sí
		 * 
		 * Realizar una clase de prueba
		 * Hacer una colección de la clase que relaciona al resto de clases
		 * 
		 * 
		 * Nota: Las clases deben estar encapsuladas
		 * */
		
//		GelatinasExpress prontoAmaranto = new GelatinasExpress(200, "Amaranto", "Bolsita", false);
//		GelatinasPremium fresaAmaranto = new GelatinasPremium(150, "Amaranto", "Hard Shell", true);
//		
//		GomitasEnchiladas manguitos = new GomitasEnchiladas(true, "Manguitos", false, "Don Vasco", "Bolsita");
		ArrayList<GomitasEnchiladas> gomasEnchiladas = new ArrayList<GomitasEnchiladas>();
		
		
		/*
		 * Fábrica de grenetina que hace Gomitas y Gelatinas
		 * para chics y grands
		 * 
		 * Producción del día 25/07/22
		 * */
		
		HashMap<Integer, GrenetinaAbstract> produccion2507 = new HashMap <Integer, GrenetinaAbstract>();
		produccion2507.put(1, new GrenetinaAbstract("Roja", "Fresa", true, 1));
		produccion2507.put(2, new GrenetinaAbstract("Amarilla", "Amaranto", false, 2));
		produccion2507.put(3, new GrenetinaAbstract("Verde", "Limón", true, 3));
		produccion2507.put(4, new GrenetinaAbstract("Roja", "Mango", true, 4));
		produccion2507.put(5, new GrenetinaAbstract("Roja", "Sandía", true, 5));
		produccion2507.put(6, new GrenetinaAbstract("Azul", "Moras", false, 6));
		produccion2507.put(7, new GrenetinaAbstract("Roja", "Frutos rojos", false, 7));
		produccion2507.put(8, new GrenetinaAbstract("Verde", "Té verde", false, 8)); //Se alocaron en produccion
		produccion2507.put(9, new GrenetinaAbstract("Amarilla", "Maracuya", false, 9));
		
		System.out.println("\n¿Qué dulcigomas se realizaron?");
		GrenetinaAbstract.iterateDulcigomas();
		System.out.println("\n¿Qué gelapaps se realizaron?");
		GrenetinaAbstract.iterateGelapaps();
		System.out.println("\n¿Qué gelapronto se realizaron?");
		GrenetinaAbstract.iterateGelapronto();
		System.out.println("\n¿Qué GomiGomGom se realizaron?");
		GrenetinaAbstract.iterateEnchiladas();
		
		GrenetinaAbstract.gomGom.get(4).setForma("Manguito");
		System.out.println(GrenetinaAbstract.gomGom.get(4).getForma());
		System.out.println(GrenetinaAbstract.gomGom.get(4).getAllData());
		GrenetinaAbstract.gomGom.get(4).setSalsaExtra("Don Vasco");
		GrenetinaAbstract.gomGom.get(4).setPresentacion("vasito");
		System.out.println("-----------------------");
		System.out.println("\n Terminamos un producto el día de hoy: \n");
		System.out.println("-----------------------");
		System.out.println(GrenetinaAbstract.gomGom.get(4).getAllData());
		
		System.out.println("\n\nCerremos la fábrica de grenetina por hoy. A descansar");
		System.out.println("|-----|");
		GomitasEnchiladas gomiDrink = new GomitasEnchiladas(false, "Bebida", true, "Inglesa y Valentina", "Vasitos");
		System.out.println("\n¡Refrescante!");
		
		
		
		System.out.println("\n---nuevo día---");
		HashMap <Integer, GomitasDulces> gomaDulce = GrenetinaAbstract.getDulcigomas();
		System.out.println(gomaDulce.get(1).getSabor());
		
		
		
		
		
		
		
		
		
		

	}

}

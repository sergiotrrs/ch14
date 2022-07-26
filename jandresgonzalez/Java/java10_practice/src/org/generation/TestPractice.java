package org.generation;

import org.generation.gelatinas.*;
import org.generation.gomitas.GomitasEnchiladas;
import java.util.*;

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
		
		HashMap<Integer, Grenetina> produccion2507 = new HashMap <Integer, Grenetina>();
		produccion2507.put(1, new Grenetina("Roja", "Fresa", true, 1));
		produccion2507.put(2, new Grenetina("Amarilla", "Amaranto", false, 2));
		produccion2507.put(3, new Grenetina("Verde", "Limón", true, 3));
		produccion2507.put(4, new Grenetina("Roja", "Mango", true, 4));
		produccion2507.put(5, new Grenetina("Roja", "Sandía", true, 5));
		produccion2507.put(6, new Grenetina("Azul", "Moras", false, 6));
		produccion2507.put(7, new Grenetina("Roja", "Frutos rojos", false, 7));
		produccion2507.put(8, new Grenetina("Verde", "Té verde", false, 8)); //Se alocaron en produccion
		produccion2507.put(9, new Grenetina("Amarilla", "Maracuya", false, 9));
		
		System.out.println("\n¿Qué dulcigomas se realizaron?");
		Grenetina.iterateDulcigomas();
		System.out.println("\n¿Qué gelapaps se realizaron?");
		Grenetina.iterateGelapaps();
		System.out.println("\n¿Qué gelapronto se realizaron?");
		Grenetina.iterateGelapronto();
		System.out.println("\n¿Qué GomiGomGom se realizaron?");
		Grenetina.iterateEnchiladas();
		
		Grenetina.gomGom.get(4).setForma("Manguito");
		System.out.println(Grenetina.gomGom.get(4).getForma());
		System.out.println(Grenetina.gomGom.get(4).getAllData());
		Grenetina.gomGom.get(4).setSalsaExtra("Don Vasco");
		Grenetina.gomGom.get(4).setPresentacion("vasito");
		System.out.println("-----------------------");
		System.out.println("\n Terminamos un producto el día de hoy: \n");
		System.out.println("-----------------------");
		System.out.println(Grenetina.gomGom.get(4).getAllData());
		
		System.out.println("\n\nCerremos la fábrica de grenetina por hoy. A descansar");
		System.out.println("|-----|");
		GomitasEnchiladas gomiDrink = new GomitasEnchiladas(false, "Bebida", true, "Inglesa y Valentina", "Vasitos");
		System.out.println("\n¡Refrescante!");
		
		
		
		
		
		
		
		
		

	}

}

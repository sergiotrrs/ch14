package org.generation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.generation.gelatinas.GelatinasExpress;
import org.generation.gelatinas.GelatinasPremium;
import org.generation.gomitas.GomitasDulces;
import org.generation.gomitas.GomitasEnchiladas;

public class GrenetinaAbstract {
	
	private String color;
	private String sabor;
	private boolean controlDeCalidad;
	
	public static ArrayList<GomitasEnchiladas> gomasEnchiladas = new ArrayList<GomitasEnchiladas>();
	public static HashMap<Integer, GomitasEnchiladas> gomGom = new HashMap<Integer, GomitasEnchiladas>();
	public static HashMap<Integer, GomitasDulces> dulciGomas = new HashMap<Integer, GomitasDulces>();
	public static HashMap<Integer, GelatinasPremium> gelaPaps = new HashMap<Integer, GelatinasPremium>();
	public static HashMap<Integer, GelatinasExpress> gelaPronto = new HashMap<Integer, GelatinasExpress>();
	
	
	public GrenetinaAbstract(String color, String sabor, boolean pasoPorCalidad, int numeroProd) {
		this.color = color;
		this.sabor = sabor;
		this.controlDeCalidad = pasoPorCalidad;
		GelatinasExpress parapido = new GelatinasExpress(color, sabor, pasoPorCalidad);
		GelatinasPremium gelitafresita = new GelatinasPremium(color, sabor, pasoPorCalidad);
		GomitasDulces dulce = new GomitasDulces(color, sabor, pasoPorCalidad);
		GomitasEnchiladas gomiGomGom = new GomitasEnchiladas(color, sabor, pasoPorCalidad);
		gomasEnchiladas.add(gomiGomGom);
		
		gomGom.put(numeroProd, gomiGomGom);
		dulciGomas.put(numeroProd, dulce);
		gelaPronto.put(numeroProd, parapido);
		gelaPaps.put(numeroProd, gelitafresita);

		gomasEnchiladas.forEach(elemento -> System.out.println("¿Trae la gomita salsa chamoy? " + elemento.hasSalsaChamoy()));
	}
	
	public static HashMap<Integer, GomitasDulces> getDulcigomas() {
		return dulciGomas;
	}
	
	public static void iterateDulcigomas() {
		for (int key : dulciGomas.keySet()) {
			System.out.println(dulciGomas.get(key).greneDatos());
		};
	}
	
	public static void iterateEnchiladas() {
		for (int key: gomGom.keySet()) {
			System.out.println(gomGom.get(key).greneDatos());
		};
	}
	
	public static void iterateGelapaps() {
		for (int key: gelaPaps.keySet()) {
			System.out.println(gelaPaps.get(key).greneDatos());
		}
	}
	
	public static void iterateGelapronto() {
		for (int key : gelaPronto.keySet()) {
			System.out.println(gelaPronto.get(key).greneDatos());
		}
	}


}

package com.gomgom.test;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;
import java.util.*;

public class GomitaTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		GomitaEnchilada boom = new GomitaEnchilada("Boom!", 0x862424, "mango", 15.50, 9, true);
		GomitaEnchilada mangomita = new GomitaEnchilada("Mangomita", 0x8B8B00, "mango", 10.20, 5, true);
		GomitaEnchilada sandiitas = new GomitaEnchilada("Sandiitas", 0x8B8B00, "sandia", 5.50, 3, false);
		
		
		//
		System.out.println(boom.eslogan());
//		System.out.println(boom.pica());
//		
//		System.out.println("Precio de " + boom.getNombre() + ": " + boom.getPrecio());
		
		//
		System.out.println(mangomita.eslogan());
//		System.out.println(mangomita.pica());
//		
//		System.out.println("Precio de " + mangomita.getNombre() + ": " + mangomita.getPrecio());
		
		//
		System.out.println(sandiitas.eslogan());
//		System.out.println(sandiitas.pica());
//		
//		
		GomitaDulce dientitos = new GomitaDulce("Dientitos", 0x0B0505, "Plátano", 10.5, 5, false, false);
//		System.out.println(dientitos.dulzor());
		System.out.println(dientitos.eslogan());
		
		System.out.println(dientitos);
		System.out.println(sandiitas);
		
		System.out.println("Núm gomitas " +  dientitos.nGomitas);
		
		ArrayList <GomitaBase> listaGomitas = new ArrayList<GomitaBase>();
		listaGomitas.add(dientitos);
		listaGomitas.add(sandiitas);
		listaGomitas.add(mangomita);
		listaGomitas.add(boom);
		listaGomitas.add(new GomitaBase("BaseBoom", 0x54545, "limón", 0.5));
		
		listaGomitas.forEach(gomita -> System.out.println(gomita.eslogan()));
		String hayDientes = listaGomitas.contains(dientitos) ? "Ya hay dientitos" : "No hay dientitos";
		System.out.println("Ya hicimos dientitoss? " + hayDientes);
		String tipo = listaGomitas.getClass().getName();
		System.out.println("¿Qué tipo de colección es ListaGomitas? " + tipo);
		
		
		

	}

}

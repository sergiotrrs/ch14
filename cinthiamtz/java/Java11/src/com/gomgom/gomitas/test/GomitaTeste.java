package com.gomgom.gomitas.test;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTeste {
	public static void main(String[] arg) {
		GomitaEnchilada boom = new GomitaEnchilada("Boom", 0x862424, "tamarindo", 12.50, 3, true);
		GomitaEnchilada mangoM = new GomitaEnchilada("Habanero", 0x862424, "Habanero", 15, 3, true);
		System.out.println(boom.eslogan());
//		System.out.println(boom.pica());
//		System.out.println("precio" + boom.getPrecio());
	
		System.out.println(mangoM.eslogan());
//		System.out.println(habanero.pica());
//		System.out.println("precio" + habanero.getPrecio());
		
		
		GomitaDulce dientitos = new GomitaDulce("Dientitos", 0x4CD61E, "Platano", 10.2, 2, true, true);
//		System.out.println(dientitos.dulzor());
		System.out.println(dientitos.eslogan());
		
		System.out.println(dientitos);
		System.out.println(mangoM);
		System.out.println("Gomitas creadas: " + GomitaBase.nGomitas);
		System.out.println("Gomitas creadas dulce: " + GomitaDulce.nGomitas);
		
		ArrayList<GomitaBase> listaGomitas = new ArrayList<GomitaBase>();
		listaGomitas.add(mangoM);
		listaGomitas.add(boom);
		listaGomitas.add(dientitos);
		listaGomitas.add(new GomitaBase("grenetina",0xFF,"N/a",0.20));
		//Interando la lista de gomitas
		listaGomitas.forEach(gomita->System.out.println("Imprimiendo la lista: "+gomita.eslogan()));
		
		
	}

}

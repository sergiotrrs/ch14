package com.gomgom.test;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTest {

	public static void main(String[] args) {
		GomitaEnchilada boom = new GomitaEnchilada("Boom!", 0x862424, "Tamarindo", 12.5, 3, true);
		GomitaEnchilada mangoM = new GomitaEnchilada("Mangomita", 0xf5c842, "Mango",15.50, 2, false);
		
		
		//System.out.println(boom.eslogan());
		//System.out.println(boom.pica());
		//System.out.println("Precio "+ boom.getPrecio());
		//System.out.println(mangoM.eslogan());
		//System.out.println(mangoM.pica());
		//System.out.println("Precio "+ mangoM.getPrecio());
		
		GomitaDulce dientitos = new GomitaDulce("Dientitos", 0x4CD61E , "plátano", 10.2, 2, true, true);
		//System.out.println(dientitos.dulzor());
		//System.out.println(dientitos.eslogan());
		
		//System.out.println(dientitos);
		//System.out.println(mangoM);	
		//System.out.println("Gomitas creadas: "+ GomitaEnchilada.nGomitas);
		//System.out.println("Gomitas creadas: "+ GomitaDulce.nGomitas);
		
		ArrayList<GomitaBase> listaGomitas = new ArrayList<GomitaBase>();
		listaGomitas.add(mangoM);
		listaGomitas.add(boom);
		listaGomitas.add(dientitos);
		listaGomitas.add(new GomitaBase("Grenetina", 0xFFF, "N/A", 0.20));
		
		
		listaGomitas.forEach(gomita-> System.out.println(gomita.eslogan()));
		
	}

}

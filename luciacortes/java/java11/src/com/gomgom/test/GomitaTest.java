package com.gomgom.test;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTest {

	public static void main(String[] args) {
		GomitaEnchilada boom = new GomitaEnchilada("Boom!", 0x862424, "Tamarindo", 12.5, 3, true);
		GomitaEnchilada sandiitas = new GomitaEnchilada("Sandiitas", 0xff9688, "Sandía", 11.89, 2, false);
		
	//	System.out.println(boom.eslogan());
//		System.out.println(boom.pica());
//		System.out.println("Precio "+ boom.getPrecio());
		//System.out.println(sandiitas.eslogan());
//		System.out.println(sandiitas.pica());
//		System.out.println("Precio "+ sandiitas.getPrecio());
		
		GomitaDulce dientitos = new GomitaDulce("Dientitos", 0x4CD61E, "plátano", 10.20, 2, true, true);
//		System.out.println(dientitos.dulzor());
//		System.out.println(dientitos.eslogan());
//		
//		//método to String		
//		System.out.println(dientitos);
//		System.out.println(sandiitas);
////		System.out.println("Gomitas creadas: "+GomitaBase.nGomitas);
//		System.out.println("Gomitas creadas: "+GomitaEnchilada.nGomitas);
//		System.out.println("Gomitas creadas: "+GomitaDulce.nGomitas);
		
		ArrayList <GomitaBase> listaGomitas = new ArrayList <GomitaBase>();
		listaGomitas.add(sandiitas);
		listaGomitas.add(boom);
		listaGomitas.add(dientitos);
		listaGomitas.add(new GomitaBase("Grenetina", 0xFFF, "Insaboro", 0.20));
		
		
		listaGomitas.forEach(gomita-> System.out.println(gomita.eslogan()));
		
	}

}

package com.gomgom.test;

import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTest {

	public static void main(String[] args) {
		GomitaEnchilada boom = new GomitaEnchilada("Boom",0x862424, "Tamarindo", 12.5, 3, true);
		GomitaEnchilada mangM = new GomitaEnchilada("Mangomita",0xf5c842, "Mango", 15.50, 3, false);
		System.out.println(boom.eslogan());
		System.out.println(boom.pica());
		System.out.println("Precio: " + boom.getPrecio());
		System.out.println(mangM.eslogan());
		System.out.println(mangM.pica());
		System.out.println("Precio: " + mangM.getPrecio());
		
		GomitaDulce dientitos = new GomitaDulce("Dientitos" , 0x4CD61E, "plátano", 10.2, 2, true, true);
		System.out.println(dientitos.eslogan());
		System.out.println(dientitos.dulzor());
		System.out.println("Precio: " + dientitos.getPrecio());
	}

}

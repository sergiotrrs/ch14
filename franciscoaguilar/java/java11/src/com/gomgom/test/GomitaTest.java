package com.gomgom.test;

import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTest {

	public static void main(String[] args) {
		
		GomitaEnchilada boom = new GomitaEnchilada("Boom", 0x862424, "Tamarindo", 12.5, 3, true);
		GomitaEnchilada mangM = new GomitaEnchilada("Mangomita", 0xf5c842, "Mango",15.50, 2, false);
		//var GusanitosEnchilados = new GomitaEnchilada("Gusanitos enchilados", "gusanito", 0x8B0003, 2, 1, false);

		System.out.println(boom.eslogan());
//		System.out.println(boom.pica());
//		System.out.println("Precio: "+boom.getPrecio());
		System.out.println(mangM.eslogan());
//		System.out.println(mangM.pica());
//		System.out.println("Precio: "+mangM.getPrecio());
		
		GomitaDulce dientitos = new GomitaDulce("Dientitos", 0x4CD61E,"plátano",10.2, 2 , true, true);
		//System.out.println(dientitos.dulzor());
		System.out.println(dientitos.eslogan());
		
		// existe un método toString en la clase Object
		//que se invoca en automático 
		//cada vez que que se quiere imprimir el objeto
		
		//Sobreescribiendo el método toString() en clase base
		
		System.out.println(dientitos); 
		//Sobrescribiendo dos veces el método toString en clase base y enchilada
		System.out.println(mangM); 
		
		

	}

}

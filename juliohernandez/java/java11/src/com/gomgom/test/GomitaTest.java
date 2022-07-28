package com.gomgom.test;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTest {
	public static void main(String[] args) {
		GomitaEnchilada boom = new GomitaEnchilada("Boom", "Tamarindo", 0x8B0003,5,3,true);
		
		System.out.println(boom.eslogan());
		System.out.println(boom.pica());
		
		var GusanitosEnchilados = new GomitaEnchilada("Gusanitos enchilados", "gusanito", 0x8B0003, 2, 1, false);
		
		var Mangomita = new GomitaEnchilada("Mangomita", "Mango",  0xf5c842, 15.50, 3, false);
		
		var dientitos = new GomitaDulce("Dientitos", "plátano", 0x4CD61E, 10.2, 2, true, true);
		
		System.out.println(boom.eslogan());  // Se sobreescribe el método de la clase base
		System.out.println(Mangomita.eslogan());
		System.out.println(dientitos.eslogan());  //Si no se sobreescribe, se utiliza el método de la clase base.
		System.out.println(boom);
		System.out.println(Mangomita);
		
		//Herencia del atributo de clase
		System.out.println("Gomitas creadas: "+GomitaBase.nGomitas);
		System.out.println("Gomitas creadas: "+GomitaEnchilada.nGomitas);
		System.out.println("Gomitas creadas: "+GomitaDulce.nGomitas);
		
		//Coleccion de Gomitas
		ArrayList<GomitaBase> listaGomitas = new ArrayList<GomitaBase>();
		listaGomitas.add(Mangomita);
		listaGomitas.add(boom);
		listaGomitas.add(dientitos); //No se puede guardar una GomitaDulce en una lista de GomitaEnchilada. 
		//Cambie el tipo de dato del ArrayList por la GomitaBase 
		listaGomitas.add(new GomitaBase("Grenetina"));
		
		//Polimorfismo: con una instrucción, se ejecutan diferentes órdenes en función de las clases (debido a los métodos sobrecargados)
		listaGomitas.forEach(gomita ->System.out.println(gomita)); //Imprime el método toString para cadaGomita
		//El polimorfismo sólo es posible observarlo en TIEMPO DE EJECUCIÓN
	}

}

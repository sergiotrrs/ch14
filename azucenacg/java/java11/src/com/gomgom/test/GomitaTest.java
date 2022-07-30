package com.gomgom.test;

import java.util.ArrayList;

import com.gomgom.gomitas.*;

public class GomitaTest {

	/**
	 * @param nombre
	 * @param color
	 * @param sabor
	 * @param precio
	 * @param nivelPicor
	 * @param tajin si / no
	 */
	
	/**
	 * GOMITA DULCE
	 * @param nombre
	 * @param color
	 * @param sabor
	 * @param precio
	 * @param nivelAzucar
	 * @param chispas
	 * @param arandano
	 */
	public static void main(String[] args) {
		GomitaEnchilada boom=new GomitaEnchilada("Boom!",0x862424,"Tamarindo",12.5,3,true);
		GomitaEnchilada mangoM=new GomitaEnchilada("Mangomita",0xf5c842, "Mango",15.50, 3, false);
//		System.out.println(boom.eslogan());
//		System.out.println(boom.pica());
//		System.out.println("Precio "+boom.getPrecio());
//		System.out.println(mangoM.eslogan());
//		System.out.println(mangoM.pica());
//		System.out.println("Precio "+mangoM.getPrecio());

		GomitaDulce diente=new GomitaDulce("Dientitos",0x4CD61E, "Mora",13.0, 3, false,false);
//		System.out.println(diente.eslogan());
//		System.out.println(diente.dulzor());
		
//		System.out.println(diente);
//		System.out.println(mangoM);
		
		System.out.println("Gomitas creadas: "+ GomitaEnchilada.nGomitas);
		System.out.println("Gomitas creadas: "+ GomitaDulce.nGomitas);
		
		
		ArrayList<GomitaBase>listaGomitas=new ArrayList<GomitaBase>();
		listaGomitas.add(mangoM);
		listaGomitas.add(boom);
		listaGomitas.add(diente);
		listaGomitas.add(new GomitaBase("Grenetina", 0xFFF,"N/A",0.20));
		//si vamos a usar una gomita mas veces despues 
		//como en la parte de la mentora, que es una mentora 
		//para diferentes participantes, ahi si convendria 
		//declarar a la mentora como la gomita diente
		//pero en este caso como no vamos a reutilizar
		//la gomita, pues podemos hacer directamente
		//la new Gomita en la listagomitas
		//en tiempo de ejecucion no se entra a la base 
		//en tiempo de compilacion si entra a la base lo de eslogan base
		//lo de la compilación quiere decir que si le damos click al 
		//eslogan se va a ir a la base
		
		listaGomitas.forEach(gomita->System.out.println(gomita.eslogan()));
		
	}
}

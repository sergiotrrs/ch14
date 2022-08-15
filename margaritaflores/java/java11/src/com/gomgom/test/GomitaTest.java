package com.gomgom.test;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaEnchilada;
import com.gomgom.gomitas.GomitasDulce;

public class GomitaTest {

	public static void main(String[] args) {
	GomitaEnchilada boom = new GomitaEnchilada(" Boomb! ", 0x862424,"Tamarindo", 12.5, 3, true);
	GomitaEnchilada explocion = new GomitaEnchilada(" Explosión ! ", 0xFF333,"Chamoy", 16, 2, true);
	GomitasDulce mango = new GomitasDulce ("Dientitos", 0x862424, "Mango", 14.0,1, true, false);
	
System.out.println(boom.eslogan());
//System.out.println(boom.pica());
//System.out.println(" precio " + boom.getPrecio());
System.out.println(explocion.eslogan());
//System.out.println(explocion.pica());
//System.out.println(" precio " + explocion.getPrecio());

//GomitaDulce dientitos = new GomitaDulce("Dientitos" , 0x4CD61E, "plátano", 10.2, 2, true, true);

	







ArrayList <GomitaBase> listaGomitas = new ArrayList <GomitaBase>();
listaGomitas.add(explocion);
listaGomitas.add(boom);
listaGomitas.add(mango);
listaGomitas.add(new GomitaBase("Grenetina", 0xFFF, "N/A", 0.20)); //Aquí nos imprime el eslogan de gomita Base porque se creo
//Interar

listaGomitas.forEach(gomita-> System.out.println(gomita.eslogan()));
//Esta tomando diferente formas dependiendo de la clase que le esta llegando (Polimorfirmo), tú método está adquiriendo
//diferente formas


	}

}

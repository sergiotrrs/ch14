package com.gomgom.test;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;
import com.gomgom.gomitas.GomitaDulce;
import com.gomgom.gomitas.GomitaEnchilada;

public class GomitaTest {

	public static void main(String[] args) {
		GomitaEnchilada boom= new GomitaEnchilada("Boom",0xFF3333,"Tamarindo",12.50,3,true);
		GomitaEnchilada mango= new GomitaEnchilada("Mangomita",0xFF2333,"Mango",17.50,2,true);

		System.out.println(boom.eslogan());
		System.out.println(boom.pica());
		System.out.println("Precio "+boom.getPrecio());
		System.out.println(mango.eslogan());
		System.out.println(mango.pica());
		System.out.println("Precio "+mango.getPrecio());
		
		GomitaDulce dientitos = new GomitaDulce("Dientitos",0x9912FF,"Platano",10.20,2,true,true);
		System.out.println(dientitos.dulsor());
		System.out.println(dientitos.eslogan());
		System.out.println(boom); // Como sobreescribí el toString 
		//Puedo llamarlo de tres formas diferentes, porque de la clase base se heredó enchilada y dulce
		System.out.println("Gomitas creadas "+GomitaEnchilada.countGomitas);
		System.out.println("Gomitas creadas "+GomitaBase.countGomitas);
		System.out.println("Gomitas creadas "+GomitaDulce.countGomitas);
		
		ArrayList<GomitaEnchilada> listaGomitas = new ArrayList<GomitaEnchilada>();
		listaGomitas.add(mango);
		listaGomitas.add(boom);
		//listaGomitas.add(dientitos); no puedo agregarlo porque no pertenece a la misma clase
		
		ArrayList<GomitaBase> listaGomitas2 = new ArrayList<GomitaBase>();
		listaGomitas2.add(mango);
		listaGomitas2.add(boom);
		listaGomitas2.add(dientitos);
		
		listaGomitas2.forEach(gomita->System.out.println(gomita));
		
	}

}

package org.generation;

import java.util.Iterator;

public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		
//		Participante abue;
//		abue = new Participante();
//		abue.nombre = "Jorge Andres";
//		abue.apellido = "Gonzalez";
//		abue.edad = 25;
//		abue.musicaFav = "Happy Punk";
//
//		System.out.println("Participante: " + abue.datosCompletos());
//
//		Participante moi = new Participante();
//		moi.nombre = "Moises Arturo";
//		moi.apellido = "Garcia";
//		moi.edad = 21;
//		moi.musicaFav = "Pop";
//		moi.totalPersonas = 4;
//		System.out.println("Participante: " + moi.datosCompletos());
	
		System.out.println("N. Total de participantes " + Participante.totalPersonas);
		
		Participante miri = new Participante("Miri de la Luz", "Loera", 1994);
		
		System.out.println("Participante: " + miri.datosCompletos());
		
		Participante sebas = new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos());
		

		System.out.println("N. Total de participantes " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
//		System.out.println("Famosisimo Abue: "+ abue.datosCompletos("abue"));
	
	
		Participante abue = new Participante("Jorge", "Gonzalez", 1996);
		Participante Moi = new Participante("Moises Arturo", "Garcia", 2001);
		
		System.out.println("Participante: " + abue.datosCompletos());
		System.out.println("Participante: " + Moi.datosCompletos());
		//abue.amonestacion = 1; No se puede acceder a un atributo encapsulado
		System.out.println("RFC Abue " +abue.getRfc());
		
		
		//crear una clase(tema abietto)
		//implementar por lo menos 3 métodos
		//por lo menos 3 atributos de objeto
		//por lo menos un atributo de clase
		//implemetar 2 constructores  sobrecargados
		//implemetar setter and getters de los atributos
		//realizar pruebas de la clase.
		
		
		
			
		}

}
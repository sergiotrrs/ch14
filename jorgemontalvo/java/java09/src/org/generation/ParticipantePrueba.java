package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		
//		Participante abue;
//		abue = new Participante();
//		
//		abue.nombre = "Jorge Andrés";
//		abue.apellido = "González";
//		abue.edad = 25;
//		abue.musicFav = "Happy Punk";
//		
//		
//		System.out.println("Participante: " + abue.datosCompletos());
//		
//		Participante moi = new Participante();
//		moi.nombre = "Moises Arturo";
//		moi.apellido = "García";
//		moi.edad = 21;
//		moi.musicFav = "Pop";
		//moi.totalPersonas = 2;
//		System.out.println("Participante: " + moi.datosCompletos());
//		System.out.println("N. Total de Participantes: " + abue.totalPersonas);
		
		Participante miri = new Participante("Miri de la Luz", "Loera", 1994);
//		miri.rfc = "Miriri";
		System.out.println("Participante: " + miri.datosCompletos());
		Participante sebas = new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos());
		
		System.out.println("N. Total de Participantes: " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
//		System.out.println("Famosisimo Abue " + abue.datosCompletos("Abue"));
		
		Participante abue = new Participante("Jorge", "Gonzalez", 1996);
		Participante moi = new Participante("Moises", "García", 2001);
		System.out.println("Participante: " + abue.datosCompletos("Abue"));
		System.out.println("Participante: " + moi.datosCompletos("Moi"));
		
		//abue.amonestacion = 1; No se puede acceder a un atributo encapsulado
		abue.setNAmonestacion(1);
		abue.setNAmonestacion(1);
		System.out.println("N. amonetaciones " + abue.getNAmonestacion());
		System.out.println("RFC Abue " + abue.getRfc());
		
		//Crear una clase (tema abierto)
		//Implementar por lo menos 3 métodos
		//por lo menos 3 atributos de objeto
		//Implementar 2 constructores sobrecargados
		//implementar setters and getters de los atributos.
		//Realizar pruebas de la clase
		

	}

}

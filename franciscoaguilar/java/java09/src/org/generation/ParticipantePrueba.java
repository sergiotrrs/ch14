package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		
		//Participante es el tipo de dato 
		
		
//		Participante abue;
//		abue = new Participante();
//		
//		abue.nombre="Jorge Andrés";
//		abue.apellido="Gonzalez";
//		abue.edad=25;
//		abue.musicaFav = "Happy Punk";
//		
//		System.out.println("Participante: "+abue.datosCompleto());
//		System.out.println("********************************************");
//		System.out.println("");
//		
//		Participante moi = new Participante ();
//		moi.nombre = "Moisés Arturo";
//		moi.apellido = "García";
//		moi.edad = 21;
//		moi.musicaFav = "Pop";
//		moi.totalPersonas = 2; 
//		System.out.println("Participante: "+moi.datosCompleto());
//		System.out.println("********************************************");
//		System.out.println("");
		
//		System.out.println("Numero total de participantes: "+ abue.totalPersonas); 
		
		System.out.println("********************************************");
		System.out.println("");
		
		Participante miri = new Participante("Miri de la Luz", "Loera", 1994);
		System.out.println("Participante: "+miri.datosCompleto());
		System.out.println("********************************************");
		System.out.println("");
		
		Participante sebas = new Participante("Sebastián","Delgado",2000);
		System.out.println("Participante: "+sebas.datosCompleto());
		System.out.println("********************************************");
		System.out.println("");
		
		System.out.println("Numero total de participantes: "+ Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
		System.out.println("********************************************");
		System.out.println("");
	//	System.out.println("Famosísimo Abue "+abue.datosCompleto("Abue"));
	//	System.out.println("Famosísimo Abue "+abue.datosCompleto()); 
		
		Participante abue = new Participante("Jorge","Gonzalez",1996);
		System.out.println("Participante: "+abue.datosCompleto("Abue"));
		Participante moi = new Participante("Moisés Arturo","García",2001);
		System.out.println("Participante: "+moi.datosCompleto("Moi"));
		
		//abue.nAmonestacion = 1;  No se puede acceder porque está encapsulado 
		System.out.println("RFC Abue: "+abue.getRfc());
		
		
		//Crear clase de tema abierto implementando por lo menos 
		// 3 métodos, 2 constructores sobrecargados y setters y getters
		//3 atributos de objeto 
		//1 ATRIBUTO DE CLASE
		//Realizar pruebas de la clase
		
		
		
	}

}

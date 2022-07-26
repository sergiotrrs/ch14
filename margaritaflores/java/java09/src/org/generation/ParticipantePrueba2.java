package org.generation;

public class ParticipantePrueba2 {

	public static void main(String[] args) {

				Participante abue;
				//Para instanciaarlo se hace llamar al método constructor -> ()
//				abue = new Participante();
				
//				abue.nombre = "Jorge Andrés";
//				abue.apellido = "Trinidad Gonzalez";
//				abue.edad = 25;
//				abue.musicaFav = "Happy Punk";
//				
//				System.out.println("Participante: " + abue.nombreCompleto());
				
//				Participante moi = new Participante();
//				moi.nombre = "Moises Arturo";
//				moi.apellido = "García";
//				moi.edad = 21;
//				moi.musicaFav = "Pop";
//				moi.totalPersonas = 2;
////				System.out.println("Participante: " + moi.nombreCompleto());
//				System.out.println("N. total participantes: " + Participante.totalPersonas);
				
				Participante miri = new Participante ("Miri de la Luz", "Loera", 1994);
//				miri.rfc="Mir-Miri";
				System.out.println("Participante: " + miri.datosCompletos());
				
				Participante sebas = new Participante ("Sebastian", "Delgado", 2000);
				System.out.println("Participante: " + sebas.datosCompletos());
				System.out.println("N. Total participantes: " + Participante.totalPersonas);
				System.out.println(Participante.bootCampCohorte());
	
				//Para que sea contructuor debe tener el mismo nombre de la clase, no tiene retorno por lo tanto no se le pone la 
				//Palabra void y para que un método constructor, debe tener  diferente parametros de entrada
				//Los métodos sobrecargado se pueden usar varios a la vez pero tener cuidado, porque debe tener diferente parametro
				
//				System.out.println("Famosisimo Abue " + abue.datosCompletos());
//			

				Participante abue1 = new Participante ("Jorge", "Gonzalez", 1996);
				Participante moi =new Participante ("Moises Arturo", "García", 2001);
				System.out.println("Participante: " + abue1.datosCompletos());
				System.out.println("Participante: " + moi.datosCompletos());
				//abue.amoestacion = 1; No se puede acceder a un atributo acceder a un atributo encapsulado
				abue1.setNAmonestacion(2); // Para Establecer y modificar
				abue1.setNAmonestacion(1); //Colocando otro se suma
				System.out.println("N. amonestacioones: " + abue1.getNAmonestacion()); //Devuelve la inforamción
				System.out.println("RFC abue: " + abue1.getRfc());
				
				//Crear una clase (tema abierto)
				//Implementar por lo menos 3 métodos
				//Por lo menos 3 atributos de objeto
				//Por lo menos 1 atributo de clase
				//Implementar setters and getters de los atributos
				//Realizar pruebas de la clase.
	}

}



package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Participante abue; 
		abue = new Participante();
		
		abue.nombre = "Jorge Andrés";
		abue.apellido = "Gonzalez";
		abue.edad=25;
		abue.musicaFAv = "Happy Punk";
	
		System.out.println("Participante: "+abue.nombreCompleto());
		
		Participante moi = new Participante();
		
		moi.nombre="Moisés Arturo";
		moi.apellido = "García";
		moi.edad=21;
		moi.musicaFAv="Pop";
		moi.totalPersonas=2; //Warning porque se trata de un a de clase
		
		System.out.println("Participante: "+moi.nombreCompleto());
		
		System.out.println("N. total de participante: " + abue.totalPersonas); //2
		//Ups, se cambió el atributo de clase
		//Lo correcto:
		System.out.println("N. Total de participantes: "+Participante.totalPersonas);
		
		var miri = new Participante("Miri de la Luz", "Loera", 1994);
		System.out.println("Participante: "+miri.datosCompletos());
		
		var sebas = new Participante("Sebas", "Delgado", 2000);
		System.out.println("Participante: "+sebas.datosCompletos());
		
		System.out.println("N. total de participante: " + Participante.totalPersonas);
		
		System.out.println(Participante.bootCampCohorte());
		
		Integer y = new Integer(1) + new Integer(2);
		System.out.println(y);
		
		//Crear una clase (tema abierto)
		//implementar por los menos 3 métodos 
		//(mín 3 atrib. de objeto)
		//por lo menos 1 atribto de clase
		//implementar 2 constructores sobrecargados
		//implementar setters and getters de los atributos
		//Realizar pruebas de la clase.
		
		
	}

}

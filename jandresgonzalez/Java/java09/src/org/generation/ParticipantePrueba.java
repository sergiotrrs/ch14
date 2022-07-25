package org.generation;

import javax.swing.undo.AbstractUndoableEdit;

public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//
		int x=0;
		Participante azu;
		azu = new Participante();
		
		azu.nombre="Azucena";
		azu.apellido="Ceniceros";
		System.out.println("Participante: " + azu.fullName());
		
		Participante moi = new Participante();
		moi.nombre = "Moisés";
		moi.apellido = "García";
		moi.edad=21;
		moi.musicaFav="Pop";
		moi.nAmonestaciones=1;
		//moi.totalPersonas = 2;
		Participante.totalPersonas=2;
		System.out.println("Participante: " + moi.fullName());
		
		//System.out.println("N. personas: " + azu.totalPersonas);
		System.out.println("N. personas: " + Participante.totalPersonas);
		
		System.out.println(Participante.bootcampCohorte());
		
		Participante miri = new Participante("Miri de la Luz", "Loera", 1996);
		
		System.out.println(miri.datosCompletos());
		System.out.println(moi.datosCompletos());
		System.out.println(azu.datosCompletos());
		
		Participante santi = new Participante("santi", "delgao", 1994);
		System.out.println(santi.datosCompletos());
		System.out.println("N. personas: " + Participante.totalPersonas);
		
		System.out.println(Participante.bootcampCohorte());

		

	}

}

package com.mascotas;

import org.generation.mascota.Perrito;

public class Rescatados {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Perrito laila = new Perrito( (byte)10, "Laila", "Cocker" , (short)25 );
		System.out.println(laila.datos());
		
		laila.setNombre("Laila Alba");
		System.out.println(laila.datos());
		laila.setEdad((byte)(laila.getEdad()+1));
	}

}

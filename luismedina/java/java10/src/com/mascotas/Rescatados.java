package com.mascotas;

import org.generation.mascota.Perrito;

public class Rescatados {

	public static void main(String[] args) {
		Perrito laila = new Perrito((byte)10,"Laila","cocker",(short)25);
		System.out.println(laila.datos());

		laila.setNombre("Laila Alba");
		laila.setEdad((byte)(laila.getEdad()+1));
		System.out.println(laila.datos());
		
	}

}

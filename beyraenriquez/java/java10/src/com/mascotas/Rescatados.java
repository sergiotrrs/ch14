package com.mascotas;

import org.generation.Perrito;

public class Rescatados {

	public static void main(String[] args) {
		Perrito laila = new Perrito((byte)10, "Laila", "Cocker", (short)25);
		System.out.println(laila.datos());
		
		laila.setNombre("Laila Alba");
		System.out.println(laila.datos());
		laila.setEdad( (byte)(laila.getEdad()+1));
		
	}

}

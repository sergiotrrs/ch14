package com.rescatados;

import org.generation.Perrito;

public class Rescatados {

	public static void main(String[] args) {
		var Laila = new Perrito((byte)10, "Laila", "Cocker",(short)25);
		System.out.println(Laila.datos());
		
		Laila.setEdad( (byte)(Laila.getEdad()+1) );
		System.out.println(Laila.datos());


	}

}

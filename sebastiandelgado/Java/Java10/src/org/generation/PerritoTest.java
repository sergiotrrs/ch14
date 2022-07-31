package org.generation;

import org.generation.mascota.Perrito;

public class PerritoTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Perrito kraken = new Perrito((byte)2, "Kraken", "Minifrench", (short)15);
		
		System.out.println(kraken.datos());
		
	}

}

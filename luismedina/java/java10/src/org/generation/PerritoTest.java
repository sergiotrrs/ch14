package org.generation;

import org.generation.mascota.Perrito;

public class PerritoTest {

	public static void main(String[] args) {
		Perrito kraken = new Perrito((byte)10, "kraken", "miniFrench", (short)15);
		System.out.println(kraken.datos());

	}

}

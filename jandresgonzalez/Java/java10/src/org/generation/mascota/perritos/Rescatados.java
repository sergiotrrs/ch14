package org.generation.mascota.perritos;

import org.generation.mascota.Perrito;

public class Rescatados {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Perrito yaki = new Perrito((byte)11, "Yaqui", "Schnauzer", (short)50);
		System.out.println(yaki.datos());
		
		yaki.setNombre("Yaki Jaquelin");
		yaki.setEdad((byte) (yaki.getEdad()-2));
		System.out.println(yaki.datos());

	}

}

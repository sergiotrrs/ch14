package org.generation;

import org.generation.mascota.Perrito;

public class PerritoTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//Paso 1 Clase Perrito es ir a la otra hoja y crear el atributo.datos
		Perrito Kraken = new Perrito((byte)10,"Kraken", "miniFrench",(short)15);
		System.out.println(Kraken.datos());
	}

}

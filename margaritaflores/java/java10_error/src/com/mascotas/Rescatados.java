package com.mascotas;

import org.generation.mascota.Perrito;

public class Rescatados {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Perrito laila = new Perrito((byte)10, "Laila", "Cocker",(short)25);
		System.out.println(laila.datos());
		//Marca error al principio porque estamos en != paquetes
		//Por lo que se necesita importar la clase del otro paquete
		//Marca error por la tabla
		//Para tener acceso tenemos que poner la palabra reservada public
		//public String datos y public Perrito(int i, String nombre2, String raza2, int j)
		
		laila.setNombre ("Laila Alba");
		
		laila.setEdad((byte)(laila.getEdad()+1) );
		System.out.println(laila.datos());
	}

}

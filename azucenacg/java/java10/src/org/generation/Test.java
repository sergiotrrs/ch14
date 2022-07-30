package org.generation;

import org.generation.cohorte.*;
import org.generation.mascota.perrito;
import java.util.HashMap;

public class Test {

	public static void main(String[] args) {
		perrito chilaquil =new perrito((byte) 5,"Chilaquil", "FrenchPoodle", (short)30);
		Mentor nancy = new Mentor("Nancy", "0909124750",20);
		Mentor montse = new Mentor("Montse", "0909167840",22);
		Partipante cristofer = new Partipante("Cristofer", 24, chilaquil, nancy);

		Partipante lupita = new Partipante(
				"Guadalupe",
				23,
				new perrito((byte)9, "Kissie", "Husky", (short)60),
				montse
				);
	System.out.println(cristofer.datos());
	System.out.println(lupita.datos());
	
	//aqui creamos una colección 
	HashMap<Integer, Partipante> ch14 = new HashMap<Integer, Partipante>();
	ch14.put(1, lupita);
	ch14.put(2,cristofer);
	ch14.put(3,new Partipante(
			"Miri",
			28,
			new perrito((byte)12,"Milka","Husky",(short)60),
			nancy)
			);
	/**
	 * Aqui no tenía sentido crear a lupita y a cris porque
	 * no los vamos a reutilizar, in embargo a nancy y a montse si
	 * es util porque podemos reutilizarlas en cada participante
	 * por eso lo más optim
	 */
	nancy.setNombre("Nancy Maléfica");
	
	/**
	 * aunque esto de nancy se lo pusimos antes a lupita y cris
	 * como es un objeto se puede modificar su contenido con un 
	 * setter 
	 */
	
	for (Partipante partipante: ch14.values()) {
		System.out.println("Miembro de ch14 "+partipante.datos());
	}
	
	/**
	 * Actividad: 
	 * Crear un proyecto que tenga mínimo 2 paquetes 
	 * por lo menos 2 clases en 1 paquete
	 * relacionar las clases entre sí
	 * realizar una clase prueba
	 * Hacer una colección de la clase que relaciona 
	 * 
	 * 
	 * nota: las clases deben estar encapsuladas
	 */
	
	}

}

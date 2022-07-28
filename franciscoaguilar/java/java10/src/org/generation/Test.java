package org.generation;

import java.util.HashMap;

//import org.generation.Perrito;
//
//import com.cohorte.Participante;
import org.generation.cohorte.*;
import org.generation.mascota.*;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Creamos primero un objeto perrito
		Perrito Chilaquil = new Perrito((byte)5,"Chilaquil","FrenchPoole",(short)30);
		Mentor nancy = new Mentor("Nancy", 123456789);
		Mentor montse = new Mentor("Montse", 987654321);
		//Ya con perrito creado se puede dar de alta a Cristofer con el perrito  Chilaquil
		Participante cristofer = new Participante("Christofer",24, Chilaquil, nancy);
		
		//Podemos crear un objeto dentro de los parámetros al momento de instanciar al participante: 
		Participante lupita = new Participante(
				"Guadalupe",
				23,
				new Perrito((byte)9,"kissie","Husky",(short)60),
				montse
				);
		
		//System.out.println(cristofer.datos());
		//System.out.println(lupita.datos());
		
		HashMap<Integer, Participante> ch14 = new HashMap<Integer,Participante>();
		
		ch14.put(1, lupita);
		ch14.put(2, cristofer);
		ch14.put(3, new Participante(
				"Miri",
				28,
				new Perrito((byte)12,"Milka","Husky-Pitbull",(short)20),
				montse));
		
		for(Participante participante:ch14.values()) {
			System.out.println("Miembro de CH14: "+participante.datos());
		}
	/**
	 * 
	 * Crear un proyecto con mínimo 2 paquetes 
	 * En cada paquete 2 clases en 1 paquete
	 * Relacionar las clases entre sí 
	 * Realizar una clase de prueba
	 * Las clases deben estar encapsuladas
	 * 
	 * 
	 * 
	 * */
		
		
		
	}

}

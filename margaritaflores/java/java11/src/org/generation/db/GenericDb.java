package org.generation.db;

/*
 * Una interfase es una declaración formal de un contrato,
 * en la cuál los métodos no contienen implementación. Es similar
 * a lo métodos abstractos.
 * 
 * Una clase puede implementar varias interface, aunque no tengan relación.
 * 
 * Las clases abstractas se deben utilizar para objetos estrechamente relacionados
 * mientras que las interfaces son más adecuados para proporcionar
 * funcionalidad común a clases que no están relacionadas entre ellas.
 * 
 * 
 * */

public interface GenericDb {
	/*
	 * Los atributos de una interfaz son del tipo
	 * static y final, POR LO TANTO NO ES NECESARIO PONERLO EN LA CLASE
	 * */
	
	int MAX_REGISTROS = 10;
	/*
	 * Las interfaces no tiene constructores
	 * Los métodos de una interface 
	 * son del tipo public y abstracta;
	 * 
	 * La implementacion deberá realizar
	 * en las clases que utilicen la interfaz. 
	 * 
	 * 
	 * */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();

	/**
	 * Del ejercicio anterior de clases, implementar una interfaz y una clase abstracta,implementar y heredarla
	 * */
	
	
}

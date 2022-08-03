package org.generation.db;

/**
 * Interface es una declaración formal
 * de un contrato en la cual los métodos no contienen
 * implementación.
 * Interface es similar a métodos abstract.
 * 
 * Una clase puede implementar varias interfaces
 * aunque no tengan relación.
 * 
 * 
 * Las clases abstractas se deben utilizar para objetos estrechamente
 * relaciones mientras que las interfaces son más adecadas para proporcionar funcionalidad común
 * a clases que no están relacionadas entre ellas.
 * */

public interface GenericDb {
	
	/*
	 * Los atributos de una interfaz
	 * son de por sí:
	 * --static y final--
	 * */
	
	//Las interfaces no tienen constructores
	
	int MAX_REGISTROS = 10;
	
	
	/*
	 * Los métodoes de una interface 
	 * son del tipo public y abstract
	 * 
	 * La implementación se deberá realizar
	 * en las clases que utilicen la interfaz
	 * */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();
	
	
}

package org.generation.db;
/**
 * Una interface es una declaración formal de un contrato, 
 * en el cual los métodos no contienen implementación. Es similar
 * a los métodos abstractos.
 * 
 * Una clase puede implementar varias interfaces, aunque no tengan
 * relación.
 * 
 * Las clases abstractas se deben utilizar para objetos
 *  estrechamente relacionados, mientras que las interfaces 
 *  son más adecuados para proporcionar funcionalidad común
 *  a clases que no están relacionadas entre ellas.
 *  
 * @author enriq
 *
 */
public interface GenericDb {
	/**
	 * Los atributos de una interfaz son de tipo
	 * static y final.
	 */
	int MAX_REGISTROS = 10;
	
	
	/**
	 * Las interfaces no tienen constructores.
	 */
	
	/**
	 * Los métodos de una interface
	 * son de tipo public y abstract;
	 * 
	 * La implementación se deberá de realizar
	 * en las clases que utilicen la interfaz.
	 * @return
	 */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();
}


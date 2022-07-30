package org.generation.db;
/**
 *  * Una interface es una declaración 
 * formal de un contrato,
 * En la cual los métodos no contienen implementación.
 * Es similar a los métodos abstractos.
 * 
 * Una clase puede implementar varias interfaces, 
 * aunque no tengan relación.
 * 
 *Las clases abstractas se deben utilizar para objetos 
 *estrechamente relacionados, mientras qye las interfaces 
 *son más adecuados para proporcionar funcionalidad común
 *a clases que no están relacionadas entre ellas
 *
 */
public interface GenericDb {
/**
 * Los atributos de una interfaz son del tipo static
 * y final
 */
	int MAX_REGISTROS=10;
	
/**
 * Las interfaces NO TIENEN CONSTRUCTORES 
 * 
 * Los métodos de una interfaz son del tipo 
 * public y abstract 
 * La implementación 
 */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();	
}

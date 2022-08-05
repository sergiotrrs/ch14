package org.generation.db;
/**
 * Una interface es una declaración formal de un contracto,
 * en la cual los métodos no contienen implementación. Es similar
 * a los métodos abstractos.
 * 
 * Una clase puede implementar varias interfaces, aunque no tengan
 * relación.
 * Las clases abtractas se deben utilizR PARA OBJETOS 
 * ESTRECHAMENTE RELACIONADOS, MIENTRAS QUE LAS INTERFACES
 * SON MÁS ADECUADOS PARA PROPORCIONAR FUNCIONADLIDAD COMÚN.
 * A cclases que no están relacionadas entre ellas.
 */
public interface GebericDb {
	/**
	 * Los atributos de una interfaz son del tipo
	 * static y final.
	 */
	int MAX_REGISTROS = 10;
	
	/**
	 * Las interfaces no tienen constructores
	 * Los métodos de una interface
	 * son del tipo public y abstract;
	 * 
	 * la implementación se deberá realizar
	 * en las clases que utilicen las interfaz
	 * @return
	 */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();
	

}

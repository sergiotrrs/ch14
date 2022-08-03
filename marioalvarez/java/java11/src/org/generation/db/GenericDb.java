package org.generation.db;

/**
 * Una interface es una declaración formal de un contrato
 * en la cual los métodos no contienen implementación. Es similar a 
 * los métodos abstractos
 * 
 * Una clase puede implementar varias interfaces aunque no tengan relación
 * 
 * Las clases abstractas se deben utilizar para objetos estrechamente relacionados, mientras que
 * las interfaces son más adecudas para propocionar funcionalidad comun  a clases que no están
 * relacionadas entre ellas. 
 * 
 * La palabra final en un atributo lo hace tipo constante
 * final int EMPRESA="corsarios"
 * 
 * El modificador final  en una variable la vuelve constante
 * El modificador final en un método evita que éste pueda ser sobreescrito
 * El modificaor final en una clase evita que pueda ser heredado
 * 
 * @author mario
 *
 */

public interface GenericDb {
/**
 * Las interfaces no tienen constructores 
 * 
 * Los atributos de una interfz son del tipo static  y final
 * 
 *  Los métodos de una interface son del tipo public y abstract
 *  la implementación se deberá realizar  en las clases que utilizen la interfaz
 */
	int MAX_REGISTROS =10;
	
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();
	
	
}

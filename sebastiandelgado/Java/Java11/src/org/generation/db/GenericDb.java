package org.generation.db;

/*
 * Una interface es una declaración formal de un contrato,
 * en la cual,los métodos no contienen implementación. Es
 * similar a los métodos abstractos.
 * 
 * Una clase puede implementar varias interfaces, quneuq no
 * tengan relación.
 * 
 * Las clases abstractas deben utilizar para objetoss estrechamente
 * relacionados, mientras que las interfaces son más adecuados para
 * proporcionar funcionalidad común a clases que no están
 * relacionadas entre ellas
 */

public interface GenericDb {
/*
 * Los atributos de una interfaz son del tipo
 * statiic y final.
 */
	
	int MAX_REGISTROS = 10;
}

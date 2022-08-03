package org.generation.test;


import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class TestResta {

	/**
	 * Las pruebas unitarias son pruebas automatizadas escritas y ejecutadas para
	 * garantizar que una sección de nuestra aplicación (unidad) cumpla
	 * con su diseo y se comporte según lo previsto
	 * 
	 * En el desarrollo basado en pruebas ((TDD Test-Driven Development)
) la prueba unitarias se crean 
	 * antes de que se escriba el código. Cuando pasan las pruebas, ese código se 
	 * considera completo.
	 * 
	 *  Las pruebas unitarias permiten al desarrollador refactorizar el códgio o
	 *  actualizar bibliotecas y asegurarse que el módulo siga funcionando. 
	 */
	
	Aritmetica aritmetica;
	
	//Este método se realizará antes que nuestras pruebas, para solo
	//crear un  un objeto, y no uno en cada prueba
	@BeforeEach 
	void setUp() {
		aritmetica= new Aritmetica();
	}
	
	@Test
	@DisplayName("Resta de números enteros")
	void testResta() {
		//Aritmetica aritmetica = new Aritmetica();
		assertEquals(0,aritmetica.resta(5, 5),"Error en resta de entero positivo");
	}
	
	
	@Test
	@DisplayName("Resta de números de punto flotante")
	void testRestaDouble() {
		//Aritmetica aritmetica = new Aritmetica();
		assertEquals(0.5,aritmetica.resta(6, 5.5),"Error en resta de punto flotante positivo");
	}
	
	@Test
	@DisplayName("Verifica si la resta es positiva")
	void testIsPositive() {
		//Aritmetica aritmetica = new Aritmetica();
		assertTrue(aritmetica.resta(6, 5.5)>=0,"Error en resta, debe ser positiva");
	}
	
	
	//Hacer un paquete de pruebas
	@Test
	@DisplayName("Verifica los métodos resta con negativos")
	void testRestaNegativos() {
		//txto descriptivo y funciones flecha de las pruebas
		assertAll("Paquete de resta de negativos",
				()->assertEquals(-25,aritmetica.resta(-15, 10), "Resta negativa de enteros"),
				()->assertEquals(-26.5,aritmetica.resta(-15.0, 11.5),"Resta negativa de punto flotante")				
				);
	}

}

package org.generation.test;


import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class TestSuma {

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
	@DisplayName("Sumatoria de números enteros")
	void testSuma() {
		//Aritmetica aritmetica = new Aritmetica();
		assertEquals(10,aritmetica.suma(5, 5),"Error en sumataoria de entero positivo");
	}
	
	
	@Test
	@DisplayName("Sumatoria de números de punto flotante")
	void testSumaDouble() {
		//Aritmetica aritmetica = new Aritmetica();
		assertEquals(11.5,aritmetica.suma(6, 5.5),"Error en sumataoria de punto flotante positivo");
	}
	
	@Test
	@DisplayName("Verifica si la suma es positiva")
	void testIsPositive() {
		//Aritmetica aritmetica = new Aritmetica();
		assertTrue(aritmetica.suma(6, 5.5)>=0,"Error en sumatoria, debe ser positiva");
	}
	
	

}

package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class TestResta {
	
	/**
	 * Las pruebas unitarias son pruebas automatizadas
	 * escritas y ejecutas para garantizar que una
	 * sección de nuestra aplicación (unidad) cumpla su diseño 
	 * y se comporte según lo previsto.
	 * 
	 * En el desarrollo basado en pruebas (TDD: Test-Driven Development)
	 * las pruebas unitarias se crean antes de que se escriba el códgio. 
	 * Cuando pasan las pruebas, ese código se considera completo.
	 * 
	 * Las pruebas unitarias permiten al desarrollador
	 * refactorizar el código o actualizar bibliotecas
	 * y asegurarse que el módulo siga funcionando.
	 */

	Aritmetica aritmetica;
	
	/**
	 * Función que instancia el objeto
	 */
	@BeforeEach //Se debe importar
	void setUp() {
		aritmetica = new Aritmetica();
	}
	
	@Test
	@DisplayName("Suma de números enteros") //No lleva ; y se importa
	void testSuma() {
		
		assertEquals(10,aritmetica.suma(6, 5),"Error en suma de int positivos"); //aritmetica como objeto
		
	}
	
	@Test
	@DisplayName("Suma de números double")
	void testSumaDouble() {
		
		assertEquals(11.5,aritmetica.suma(6.3, 5.5)); //aritmetica como objeto
		//assertEquals tiene métodos sobrecargados para 'conocer' los tipos de datos de entrada
	}
	@Test
	@DisplayName("Verifica si la suma es positiva")
	void testSumaPositive() {
		assertTrue(aritmetica.suma(-6, 5)>=0,"Error en suma positiva");
	}

}

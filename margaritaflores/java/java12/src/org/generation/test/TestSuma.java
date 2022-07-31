package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;


/*
 * Las pruebas unitarias son pruebas automatizadas escritas y ejecutas para garantizar que una
 * sección de muestra aplicación(unidad) cumpla con su diseño y se comporte según lo previsto.
 * 
 * En el desarrollo basado en pruebas (TDD Test-Driver Development) las pruebas unitarias se crean antes de
 * que se escriba el código. Cuando pasan las pruebas, ese código se considera completo.
 * 
 * Las pruebas unitarias permiten al desarrollador refactorizar el código o actualizar 
 * bibliotecas y asegurarse que el modulo siga funcionando. 
 * 
 * 
 * 
 * */
class TestSuma {
	Aritmetica aritmetica;
	
	@BeforeEach //Palabra reservada
	void setUp() {
		aritmetica = new Aritmetica();
	}
	@Test
	@DisplayName("Sumatorio de números enteros") //No lleva;
	void testSuma() {
		//Se importa la clase aritmetica
		assertEquals(10, aritmetica.suma(6, 4), "error en sumatoria en int positivo");
	}

	@Test
	@DisplayName("Sumatorio de números de punto flotante") 
	void testSumaDouble() {
		assertEquals(11.5, aritmetica.suma(6, 5.5), "error en sumatoria double positivo");
	}
	
	@Test
	@DisplayName("Verifica si la sumatoria es positiva") 
	void testIsPositive() {
		assertTrue(aritmetica.suma(16, 5)>=0 , "error en sumatoria positiva");
	}

}

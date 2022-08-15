package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;
import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
/**
 * Las purebas unitarias son pruebas automatizadas escritas
 * y ejecutadas para garantizar que una sección de aplicación (unidad)
 * cumpla con su diseño y se comporte según lo previsto.
 * 
 * En el dearrollo basado en pruebas (TDD Test-Driven Development)
 * las pruebas unitarias se crean antes
 * de que se escriba el código. Cuando pasan las pruebas, ese código se considera ocompleto.
 * 
 * Las pruebas unitarias permiten al desarrollado
 * refactorizar el código o actualizar bibliotecas y asegurarse que
 * el módulo siga funcionando.
 */

class TestSuma {

	Aritmetica aritmetica;
	
	@BeforeEach
	void setUp() {
		aritmetica = new Aritmetica();
	}
	
	@Test
	@DisplayName("Sumatoria de números enteros")
	void testSuma() {
		assertEquals(11, aritmetica.suma(6, 5), "error en sumatorias de int positivo");
	}
	@Test
	@DisplayName("Sumatoria de números de punto flotante")
	void testDouble() {
		assertEquals(11.5, aritmetica.suma(6, 5.5),"error en sumatoria double positivo");
	}
	@Test
	@DisplayName("Verificar si la sumatoria es positiva")
	void testPositive() {
		assertTrue(aritmetica.suma(16, 5)>=0,"error en sumatoria positivoa");
	}
	
	
}

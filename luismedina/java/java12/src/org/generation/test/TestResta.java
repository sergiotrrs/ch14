package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.artimetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Las pruebas untarias son pruebas automatizadas, escritas y ejecutadas para
 * garantizar que una seccion de nuestra aplicacion (unidad) cumpla con su
 * diseño y se comporte segun lo previsto.
 * 
 * En el desarrollo basado en pruebas (TDD Test-Driven Development) se crean
 * antes de que se escriba el codigo. Cuando pasan las pruebas ese código se
 * conseidra completo.
 * 
 * Las pruebas unitarias permiten al desarrollador refactorizar el código o
 * actualizar bibliotecas y asegurarse que el modulo siga funcionando.
 * 
 * @author luisd
 *
 */
class TestResta {
	Aritmetica aritmetica;

	@BeforeEach
	void setUp() {
		aritmetica = new Aritmetica();
	}

	@Test
	@DisplayName("Sumatoria de numeros positivos")
	void testSuma() {
		assertEquals(10, aritmetica.suma(6, 4),"Error en sumatorias de int positivo");
	}

	@Test
	@DisplayName("Sumatoria de número flotantes")
	void testSumaDouble() {
		assertEquals(10.5, aritmetica.suma(5, 5.5),"Error en sumatoria de double positivo");
	}
	@Test
	@DisplayName("Verifica si la sumatoria es positiva")
	void testSumaPositiva() {
		assertTrue(aritmetica.suma(6, 5)>=0,"Error en sumatoria positiva");
	}

}

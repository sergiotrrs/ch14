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
class TestSuma {
	Aritmetica aritmetica;

	@BeforeEach
	void setUp() {
		aritmetica = new Aritmetica();
	}

	@Test
	@DisplayName("Resta de numeros positivos")
	void testSuma() {
		assertEquals(2, aritmetica.resta(6, 4), "Error en Restas de int positivo");
	}

	@Test
	@DisplayName("Resta de número flotantes")
	void testSumaDouble() {
		assertEquals(.5, aritmetica.resta(6, 5.5), "Error en Resta de double positivo");
	}

	@Test
	@DisplayName("Verifica si la Resta es positiva")
	void testSumaPositiva() {
		assertTrue(aritmetica.resta(6, 5) >= 0, "Error en Resta positiva");
	}

	@Test
	@DisplayName("Verifica los métodos de resta con negativos")
	void testRestaNegativos() {
		assertAll("Paquete de resta de negativos",
				() -> assertEquals(-25, aritmetica.resta(-15, 10), "Resta negativa de enteros"),
				() -> assertEquals(-26.5, aritmetica.resta(-15.0, 11.5), "Resta negativa de punto flotante"));
	}

}

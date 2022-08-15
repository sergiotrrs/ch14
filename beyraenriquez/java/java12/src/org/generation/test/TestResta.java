package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
/**
 * Las pruebas unitarias son pruebas automatizadas 
 * escritas y ejecutadas para garantizar que una
 * sección de nuestra aplicación(unidad) cumpla
 * con su diseño y se comporte según lo previsto.
 * 
 * En el desarrollo basado en pruebas (TDD Test-Driven Development)
 * las pruebas unitarias se crean antes de
 * que se escriba el código. Cuando pasan las
 * pruebas, ese código se considera completo.
 * 
 * Las pruebas unitarias permiten al desarrollador 
 * refactorizar el código o actualizar bibliotecas 
 * y asegurarse que el módulo siga funcionando.
 * 
 * @author enriq
 *
 */
class TestResta {
	Aritmetica aritmetica;
	
	@BeforeEach
	void setUp() {
		aritmetica = new Aritmetica();
	}
	
	@Test
	@DisplayName("Resta de números enteros")
	void testResta() {
		Aritmetica aritmetica = new Aritmetica();
		assertEquals(2, aritmetica.resta(6, 4), "error en resta de int positivo");
	}

	@Test
	@DisplayName("Resta de números de punto flotante")
	void testRestaDouble() {
		assertEquals(0.5, aritmetica.resta(6, 5.5), "error en resta double positivo");
	}

	@Test
	@DisplayName("Verifica si la resta es positiva")
	void testIsPositive() {
		assertTrue(aritmetica.resta(16, 5)>=0, "error en resta positiva");
	}
	
	@Test
    @DisplayName("Verifica los métos resta con negativos")
    void testRestaNegativos() {
        assertAll("Paquete de resta de negativos",
                ()-> assertEquals(-25, aritmetica.resta(-15, 10),"Resta negativa de enteros"),
                ()-> assertEquals(-26.5, aritmetica.resta(-15.0,11.5),"Resta negativa de punto flotante")
                );
	}
	
	
}

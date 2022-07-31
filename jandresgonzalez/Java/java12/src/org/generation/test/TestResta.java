package org.generation.test;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.*;

/**
 * 
 * Las pruebas unitarias
 * son pruebas automatizadas
 * escritas y ejecutadas para garantizar
 * que una sección de nuestra aplicación (unidad) cumpla con su diseño
 * y se comporte según lo previsto
 * 
 * 
 * En el desarrollo basado en pruebas(TDD), 
 * las pruebas unitarias se crean antes de escribir el código
 * y sólo si se pasan, el código está completo.
 * 
 * Las pruebas unitarias permiten al desarrollador refactorizar el código
 * o actualizar bibliotecas y asegurarse de que el módulo siga funcionando.
 * 
 * */


class TestResta {
	
	//Aritmetica aritmetica = new Aritmetica();
	Aritmetica aritmetica;
	
	@BeforeEach //hace que se ejecute algo antes de cada prueba
	void setUp() {
		aritmetica = new Aritmetica();
	}

	@Test //hace un test
	@DisplayName("Resta de números") //@DisplayName muestra texto en las pruebas
	void testSuma() {
		assertEquals(1, aritmetica.resta(6, 5), "error en resta");
	}
	@Test
	@DisplayName("Números double resta")
	void testSumaDouble() {
		assertEquals(0.5, aritmetica.resta(6, 5.5));
	}

	@Test //hace un test
	@DisplayName("Checar resta queda positiva") //@DisplayName muestra texto en las pruebas
	void testIsPositive() {
		//assertTrue
		//revisa si es true algo
		//
		assertTrue(aritmetica.resta(6, 5)>=0, "no es resta positiva");
	}
	
	@Test
	@DisplayName("Varios tests que se prueban al mismo tiempo con función flecha")
	void testRestaNegativos() {
		assertAll("Paquete de resta de negativos",
				()->assertEquals(-25, aritmetica.resta(-15, 10), "averaverkepazoai1"),
				()->assertEquals(-26.5, aritmetica.resta(-15.0, 11.5), "a ver a ver qué pasó ahí 2")
				);
	}

}

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


class TestSuma {
	
	//Aritmetica aritmetica = new Aritmetica();
	Aritmetica aritmetica;
	
	@BeforeEach //hace que se ejecute algo antes de cada prueba
	void setUp() {
		aritmetica = new Aritmetica();
	}

	@Test //hace un test
	@DisplayName("Sumatoria de números") //@DisplayName muestra texto en las pruebas
	void testSuma() {
		assertEquals(11, aritmetica.suma(6, 5), "error en sumatoria positiva");
	}
	@Test
	@DisplayName("Números double suma")
	void testSumaDouble() {
		assertEquals(11.55, aritmetica.suma(6, 5.55));
	}
	@Test //hace un test
	@DisplayName("Sumatoria de números") //@DisplayName muestra texto en las pruebas
	void testIsPositive() {
		//assertTrue
		//revisa si es true algo
		//
	assertTrue(aritmetica.suma(6, 5)>0,"error en sumatoria positiva");
	}

}

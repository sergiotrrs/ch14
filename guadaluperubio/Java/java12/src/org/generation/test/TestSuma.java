package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.generation.artitmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 *Las pruebas unitarias son ptuebas automatizadas escritas y ejecutadas
 *para garantizar que una sección de nuestra aplicación (unidad) cumpla 
 *con su diseño y se comprte según lo previsto.
 *
 * En el desarrollo basado en pruebas (TDD test-Driven Development)
 * las pruebas unitarias se crean antes de que se escriba el codigo.
 * cuando pasan las pruebas, el código se condiera completo.
 * 
 * Las pruebas unitarias permiten al desarrollador refactorizar el codigo
 * o actualizar bibliotecas, y asegurarse de que el modulo siga funcionando.
 * 
 * @author gina_
 *
 */


class TestSuma {	
	Aritmetica aritmetica;
	
	@BeforeEach
	void setUp() {
		aritmetica =new Aritmetica();
	}

	@Test
	@DisplayName("Sumatoria de número positivos enteros")
	void testSuma() {
		Aritmetica aritmetica =new Aritmetica();
		assertEquals(10,aritmetica.suma(6,4), "error en sumatoria de int positivos");
	}
	@Test
	@DisplayName("Sumatoria de número positivos punto flotante")
	void testSumaDoubles() {
		Aritmetica aritmetica =new Aritmetica();
		assertEquals(11.5,aritmetica.suma(6,5.5), "Error en sumatoria de double positivo");
		
		
	@Test
	@DisplayName("verifica que la sumatoria es positiva")
	void testIsPositive() {
		assertTrue(0, aritmetica.suma(6,4)>=0, "Error en sumatoria de double positivo");
	}

	private void assertTrue(int i, boolean b, String string) {
		// TODO Auto-generated method stub
		
	}

	@Test
	@DisplayName("Verifica que los métodos suma con positivos ")
	void testSumaPositivos() {
		assertAll("Paquete de suma de positivos"),
		()-> assertEquals(25,aritmetica.suma(15,10)),
		()->assertEquasl(26.5,aritmetica.suma(15.0,11.5))
		);
	}
	
}

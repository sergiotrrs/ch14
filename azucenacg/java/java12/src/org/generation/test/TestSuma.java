package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
/**
 * Las pruebas unitarias son pruebas automatizadas
 * escritas y ejecutadas para garantizar que una seccion
 * de nuestra aplicacion(unidad) cumpla
 * con su diseño y se comporte según lo previsto
 * 
 * En el desarrollo basado en pruebas (TDD)
 * las pruebas unitarias se crean antes de 
 * que se escriba el codigo, cuando pasal las pruebas
 * ese codigo se considera completo
 * 
 * Las pruebas unitarias permiten al desarrollador
 * refactorizar el codigo o actualizar bibliotecas
 * y asegurarse que el modulo siga funcionando
 *
 */
class TestSuma {
	
	//Esto es para no crear un objeto nuevo en cada 
	//prueba 
	Aritmetica aritmetica;
	
	/**
	 * beforeeach quiere decir que antes de cada prueba se 
	 *se va a correr esta instruccion
	 */
	
	@BeforeEach
	void setUp() {
		aritmetica=new Aritmetica();
	}
	
	@Test
	@DisplayName("Sumatoria de números enteros positivos")
	void testSuma() {
		
		assertEquals(10,aritmetica.suma(6, 4), "error en sum de int +");
		
	}

	@Test
	@DisplayName("Sumatoria de númerosdouble")
	void testSumaDouble() {
		
		assertEquals(11.5,aritmetica.suma(6, 5.5),"error en sum double +");
		
	}

	@Test
	@DisplayName("Verifica si la sumatoria es positiva")
	void testIsPositive() {
		assertTrue(aritmetica.suma(16, 5.5)>=0,"error en sum positiva");
	}
	


	

}

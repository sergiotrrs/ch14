package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
/**
 * Las pruebas unitarias son pruebas automatizadas
 * escritas y ejcutas para garantizar que una
 * seccion de nuestra aplicacion (unidad) cumpla
 * con su diseño y se comporte segun lo previsto
 * 
 * En el desarrollo basado en pruebas (TDD Test-driven development)
 * las pruebas unitarias se crean antes de
 * que se escriba el codigo. Cuando pasan las pruebas,
 * ese codigo se considera completo.
 * 
 * Las pruebas unitarias permiten al desarrollador
 * refactorizar el codigo o actualizar bibliotecas 
 * y asegurar que el modulo siga funcionando
 * 
 * @author cinth
 *
 */
class TestResta {
	Aritmetica aritmetica;
	@BeforeEach
	void setUp() {
		aritmetica =new Aritmetica();		
	}
	
	@Test
	@DisplayName("Resta de números enteros")
	void testSuma() {	
		assertEquals(2, aritmetica.suma(6,4),"Error en Resta de int positivo");
	}

	
	@Test
	@DisplayName("Resta de números de punto flotantes")
	void testSumaDouble() {
		
		assertEquals(0.5, aritmetica.suma(6,5.5),"error en Resta double positivo");
	}

	
	@Test
	@DisplayName("Resta de números de punto flotantes")
	void testIsPositive() {
		
		assertTrue(aritmetica.suma(16,5)>=0,"error en Resta  positivo");
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

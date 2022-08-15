package org.generation.test;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.*;
import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class TestResta {

	Aritmetica aritmetica;
	
	@BeforeEach
	void setUp() {
		aritmetica =new Aritmetica();
	}
	
	@Test
	@DisplayName("Resta de números enteros")
	void testResta() {
		
		assertEquals(14, aritmetica.resta(16,2));
	}
	@Test
	@DisplayName("Resta de números flotante")
	void testRestaD() {
		assertEquals(0.5, aritmetica.resta(6.5,6), "Error en resta double");
	}
	
	@Test
	@DisplayName("Verifica si la resta es positiva")
	void testIsPositive() {
		assertTrue(aritmetica.resta(16, 5)>=0, "error en Resta positiva");
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

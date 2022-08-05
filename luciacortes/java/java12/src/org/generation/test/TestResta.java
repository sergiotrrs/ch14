package org.generation.test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class TestResta {
	class TestSuma {

		Aritmetica aritmetica;
		
		@BeforeEach
		void setUp() {
			aritmetica = new Aritmetica();
		}
		
		@Test
		@DisplayName("Resta de números enteros")
		void testResta() {
			assertEquals(11, aritmetica.resta(6, 5), "error en sumatorias de int positivo");
		}
		@Test
		@DisplayName("Resta de números de punto flotante")
		void testDouble() {
			assertEquals(11.5, aritmetica.resta(6, 5.5),"error en sumatoria double positivo");
		}
		@Test
		@DisplayName("Verificar si la resta es positiva")
		void testPositive() {
			assertTrue(aritmetica.resta(16, 5)>=0,"error en sumatoria positivoa");
		}
		@Test
		@DisplayName("Verifica los métos resta con negativos")
		void testRestaNegativos() {
			assertAll("Paquete de resta de negativos",
					()->assertEquals(-25, aritmetica.resta(-15,-10),"Resta negativa de enteros"),
					()->assertEquals(-26.5, aritmetica.resta(-15.0,-11.5),"Resta negativo de punto flotante")
					);
		}		
		}
}


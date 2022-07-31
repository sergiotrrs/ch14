package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.aritmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;


	class TestResta {
		Aritmetica aritmetica;
		
		@BeforeEach //Palabra reservada
		void setUp() {
			aritmetica = new Aritmetica();
		}
		@Test
		@DisplayName("Sumatorio de números enteros") //No lleva;
		void testResta() {
			//Se importa la clase aritmetica
			assertEquals(2, aritmetica.resta(6, 4), "error en Resta en int positivo");
		}

		@Test
		@DisplayName("Resta de números de punto flotante") 
		void testRestaDouble() {
			assertEquals(0.5, aritmetica.resta(6, 5.5), "error en Resta double positivo");
		}
		
		@Test
		@DisplayName("Verifica si la Resta es positiva") 
		void testIsPositive() {
			assertTrue(aritmetica.resta(16, 5)>=0 , "error en Resta positiva");
		}

		
		@Test
		@DisplayName("Verifica los métodos resta con negativos")
		void testRestaNegativos() {
			assertAll("Paquete de resta de negativos",
					()-> assertEquals (-25, aritmetica.resta(-15, 10), "Resta negativa de enteros"),
					()-> assertEquals (-26.5,aritmetica.resta(-15.0,11.5), "Resta negativa de números flotantes")
					);
		}
}
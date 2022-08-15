package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.generation.artitmetica.Aritmetica;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class TestResta{

	@Test
	void testResta() {
		Aritmetica aritmetica;
		
		@BeforeEach
		void setUp() {
			 aritmetica = new Aritmetica();
		}

		@Test
		@DisplayName("Rest de número positivos enteros")
		void testResta() {
			Aritmetica aritmetica =new Aritmetica();
			assertEquals(10,aritmetica.resta(6,4), "error en resta de int positivos");
		}
		@Test
		@DisplayName("Resta de número positivos punto flotante")
		void testRestaDoubles() {
			Aritmetica aritmetica =new Aritmetica();
			assertEquals(11.5,aritmetica.resta(6,5.5), "Error en sumatoria de double positivo");
			
			
		@Test
		@DisplayName("verifica que la sumatoria es positiva")
		void testIsPositive() {
			assertTrue(11.5,aritmetica.resta(6,5.5)>=0, "Error en sumatoria de double positivo");
			
			@Test
			@DisplayName("Verifica que los métodos suma con positivos ")
			void testSumaPositivos() {
				assertAll "Paquete de suma de positivos",
				()-> assertEquals(25,aritmetica.suma(-15,10), "resta  de numero enteros"),
				()->assertEquasl(26.5,aritmetica.suma(15.0,11.5),"Suma Positiva de numeros flotantes")
				);
	}

}

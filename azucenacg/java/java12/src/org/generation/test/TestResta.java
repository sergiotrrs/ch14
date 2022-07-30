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
class TestResta {
	
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
	@DisplayName("Resta de números enteros positivos")
	void testResta() {
		
		assertEquals(2,aritmetica.resta(6, 4), "error en sum de int +");
		
	}

	@Test
	@DisplayName("Resta de númerosdouble")
	void testRestaDouble() {
		
		assertEquals(0.5,aritmetica.resta(6, 5.5),"error en sum double +");
		
	}

	@Test
	@DisplayName("Verifica si la resta es positiva")
	void testIsPositive() {
		assertTrue(aritmetica.resta(16, 5)>=0,"error en res positiva");
	}
	

	@Test
	@DisplayName("Verifica los metodos resta con negativos")
	void testRestaNegativos() {
		assertAll("Paquete de resta negativos",
				()->assertEquals(-25,aritmetica.resta(-15,10),"resta neg int"),
				()->assertEquals(-26.5,aritmetica.resta(-15.0,11.5),"resta neg doubl")
				);
	}
	
	

}

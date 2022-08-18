package org.generation.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;

import org.generation.app.controls.DivisasEnum;
import org.generation.app.entity.Dollar;
import org.generation.app.service.TipoDeCambio;
import org.generation.app.util.ConvertirToDolar;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class ConvertirToDolarTest {
	TipoDeCambio tipoDeCambio;
	
	@BeforeEach
	void setUp() {
		//Se prepara la prueba usando mockito para la simulación
		tipoDeCambio = Mockito.mock(TipoDeCambio.class); //Se "instancia" = se simula
		
		/*Se indica cómo se comporta el método cuando se utilice*/
		
		//Simulamos el valor de 1 dolar en pesos mexicanos
		Mockito.when(tipoDeCambio.getTipoDeCambio(DivisasEnum.MXN))
			.thenReturn(new Dollar(19.98,new Date())); 
		
	}	
	
	
	@Test
	@DisplayName("Prueba la conversión de MXN a Dólares")
	void MXNToDollar() {
		
		//Ejecutamos la prueba unitaria con JUnit
		Dollar precioDolar = tipoDeCambio.getTipoDeCambio(DivisasEnum.MXN);
		
		ConvertirToDolar conversor = new ConvertirToDolar();
		
		double valorDolar = conversor.conversorDolar(precioDolar, 39.96); //2 
		
		//Realizo mi comparación
		assertEquals(2.0,valorDolar); //ValorEsperado / ValorQueDa
	}
	

}

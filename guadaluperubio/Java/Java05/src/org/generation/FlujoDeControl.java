package org.generation;

public class FlujoDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * if (condición){
		 * Bloque de instrucciones
		 * }
		 */

		int edad  = 71;
		
//		if(edad > 70) System.out.println("Ya requiero cambio, denme mi pensión ");
//		System.out.println("Instrucción al final de if");
		
		if(edad > 50) {
			System.out.println("El director ya le duelen las rodillas");
			edad = 61;
			System.out.println("Se realizó cirugía el director, con nuestros impuestos");
			System.out.println("Nueva edad del Dir: "+ edad);
			
		}
		
		//System.out.println("N. autos: " + nAutos); Esta var no tiene alcance a nAutos
		int nAutos = 40;
		if(nAutos > 20 && edad < 80) {
			System.out.println("El dir puede conducir lo que quiera");
			//Tener un if dentro de otro if, sellaman if anidados
			int modeloAuto = 2019;
			if(modeloAuto < 2020) {
				System.out.println("El dir. regalará estas antiguedades");
				
				modeloAuto = 2014;
				System.out.println("N. de autos restantes: " + modeloAuto);
			}
		}
		
		int billonesSP = 198;
		int nBitcoins = 256;
		
		if( billonesSP > 200 || nBitcoins > 5892) System.out.println("Sea mi padrino");
		else System.out.println("No compro en tiendas conocidas");
		
		
		System.out.println("******");
		
		
		int retencionISR = 37;
		int retencionIVA = 18;
		
		if(retencionISR<30 && retencionIVA<15)System.out.println("Me alcanza");
		else if(retencionISR<36 && retencionIVA<17)
			System.out.println("No me alcanza, pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento :)");
		
		boolean esFrontera = false;
		int impuestoAplicar = esFrontera ? 8 :16;
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);
		
		System.out.println("Tipo de región: "+ ((impuestoAplicar>8)?"Centro" : "fronetra"));
		
		int mes = 5;
		String mesTxt;
		switch (mes) {
		case 1:
			mesTxt = "Enero";
			break;
		case 2:
			mesTxt = "Febrero";
			break;
		case 3:
			mesTxt = "Marzo";
			break;
		case 4:
			mesTxt = "Abril";
			break;
		case 5:
			mesTxt = "Mayo";
			break;
		case 6:
			mesTxt = "Junio";
			break;
		default:
			mesTxt = "No se tiene registrado";

		}
		System.out.println("Mes seleccionado: " + mesTxt);

		
		mes = 4;
		switch (mes) {
		case 3: case 4: case 5:
			System.out.println("Estamos en primavera");
			break;
		case 6: case 7: case 8:
			System.out.println("Estamos en verano");
			break;
		case 9: case 10: case 11:
			System.out.println("Estamos en otoño");
			break;
		//También se puede poner de la sig: manera
		case 12,1,2:
			System.out.println("Estamos en invierno");
			break;
		default:
			System.out.println("Error en el mes introducido");
		}
		
		String nombre = "Rafa";
		nombre = "Emiliano";
		String jugador ="Rafa";
		String apellido = "Dorantes";   // La va a aguardar el ID
		
		String participante = new String("Dorantes");
		
		if (apellido== "Dorantes")   //se comparan los Ids
			System.out.println("El apellido es de Abi");
		
		if (apellido.equals(participante))   //se comparan las literales 
			System.out.println("¡El apellido es de Abi!");
		
		
		apellido = new String ("Rubio");
		switch (apellido ) {
		case "Ruiz":
			System.out.println("Apellido de Gerardo");
			break;
			
		case "Dorantes":
			System.out.println("Apellido de abi");
			break; 
		case "Flores":
		System.out.println("Apellido de Maga");
		break;
		
	case "Delgado":
		System.out.println("Apellido de sebas");
		break; 
		default:
		System.out.println("Debe ser apellido de Santi");
		}
	}

}
					
					

package org.generation;

public class flujoDeControl {

	public static void main(String[] args) {
		int edad=71;
		
		if (edad>70)System.out.println("Ya requiero cambio, denme mi pensión");
		System.out.println("Instrucción al final del if");
		
		//para + de 1 instrucción se usan {}
		
		if (edad>50) {
			System.out.println("Al director ya le duelen las rodillas");
			edad-=10; //edad=edad-10
			System.out.println("El dir se hizo cirugia con nuestros impuestos");
			System.out.println("Nueva edad del dir: "+edad);
			
			//Esta variable solo tiene alcance en el bloque
			
		}
		
		//System.out.println("N. de autos: " nAutos); //Esta variable no tiene alcanze

		int nAutos=40;
		if (nAutos>20 && edad<80) {
			System.out.println("El dir puede conducir lo que quiera");
			int modeloAuto=2019;
			if (modeloAuto<2020) {
				System.out.println("El dir regalará estas antiguedades");
				modeloAuto-=5;
				
			}
		}
		
		int billonesSP=120;
		int nBitcoins =256;
		if (billonesSP > 200 || nBitcoins >5892 )System.out.println("Sea mi padrino");
		else System.out.println("No compro en tiendas conocidas");
		
		int retencionISR=35;
		int retencionIVA=16;
		
		if (retencionISR<30 && retencionIVA<15)
			System.out.println("Me alcanza");
		else if (retencionISR<36 && retencionIVA<17)
			System.out.println("No me alcanza, pero algo es algo");
		else 
			System.out.println("Debo trabajar más");
		
		/**
		 * Una forma rápida de realizar una evaluación condicional
		 * es con el uso de operador ternario.
		 * 
		 * (condicional)? "instrucciones para TRUE" : "Instrucciones para FALSE";
		 */
		boolean esFrontera =false;
		int impuestoAplicar = esFrontera ? 8 :16 ;
		System.out.println("Impuesto a aplicar: "+ impuestoAplicar+ "%");
		System.out.println("Tipo de region: "+ ((impuestoAplicar>8)? "centro":"frontera"));
		
		/**
		 * La condición switch, ppodemos evaluar múltiples opciones
		 * switch (expresión a evaluar){
		 * case 1: bloque codigo
		 * 		break;
		 * 
		 * case 2: bloque codigo
		 * 		break;
		 * 
		 * default: bloque de codigo si nada se cumple
		 * 		break;
		 * 
		 * }
		 */
		
		int mes=8;
		String mesTxt;
		switch (mes){
			case 1: mesTxt="Enero";
					break;
			case 2: mesTxt="Febrero";
					break;
			case 3: mesTxt="Marzo";
					break;
			case 4: mesTxt="Abril";
					break;
			case 5: mesTxt="Mayo";
					break;
			case 6: mesTxt="Junio";
					break;
			default: mesTxt ="no se tiene registrado";		
		}
		System.out.println("El mes es: "+ mesTxt);
		//mesTxt tiene alcance en bloques abajo, pero no arriba
		
		//de preferencia no se usan floats en 
		//las sentencias switch
		mes=1;
		switch(mes) {
		case 3: 
		case 4: 
		case 5:
			System.out.println("Estamos en pimavera");
			break;
		case 6: case 7: case 8:
			System.out.println("Estamos en verano");
			break;
		case 9: case 10: case 11:
			System.out.println("Estamos en otoño");
			break;
		case 12,1,2: //esta forma solo se puede en java
			System.out.println("Estamos en invierno");
			break;
		default:
			System.out.println("Error en el mes");
			break;
		}
		
		String nombre="Rafa";
		nombre="Emiliano";
		String jugador="Rafa"; //en esta instrucción
		//como es rafa otra vez se manda a llamar 
		//al string rafa que ya se había guardado en 
		//"nombre", por eso en la taba muestra el mismo
		//id que se muestra en la línea "nombre"
		//En el caso de Emiliano si tiene un nuevo id
		String apellido = "Dorantes"; //id de la literal "Dorantes" es: 31 
		String participante =new String ("Dorantes");
		//id de la literal "Dorantes" es: 32 por el newString
		
		//compara id 31 con id 32
		if (apellido==participante) //compara IDs, no los strings
			System.out.println("El apellido es de Abi");
		
		//equals es un método de la clase string
		if (apellido.equals(participante))//aqui si se comparan las literales
			System.out.println("El apellido SI es de Abi!");
		
		//el switch usa equals ya por default 
		//pa comparar strings 
		
		participante="Flores";
		apellido=new String("Flores");
		switch (apellido) {
		case "Ruiz":
			System.out.println("Apellido de Gera");
		case "Flores":
			System.out.println("Apellido de Maga");
		}
	}
}

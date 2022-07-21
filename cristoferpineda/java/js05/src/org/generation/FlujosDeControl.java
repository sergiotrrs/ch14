package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * if(condicion){ Bloque de instruccion }
		 */
		int edad = 71;
//	 if(edad>70) System.out.println("Ya requiere cambio , denle su pension");
//	 System.out.println("Instructor al final del if");

		// Si requiere mas de una instruccion , realice un bloque con {}
		if (edad > 50) {
			System.out.println("Al director ya le duelen las rodillas");
			edad -= 10; // edad=edad-10
			System.out.println("Se realizo cirugias el Dir , con nuestros impuestos");
			System.out.println("Nueva edad del Dir " + edad);

		}
		// Esta variable solo tiene alcance en el bloque
		int numeroAutos = 40;
		if (numeroAutos > 20 && edad < 80) {
			System.out.println("El dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			// Tener un if dentro de otro if se llama if anidados
			if (modeloAuto < 2020) {
				System.out.println("El director me regalara estas antiguedades");
				modeloAuto -= 5;// baja el modelo del auto de 2019 a 2014 , tiene alcance solo dentro del bloque
				System.out.println("Numero de autos restantes: " + modeloAuto);
			}

		}
		/**
		 * En caso de que no se aplique la condicion , se aplique la siguiente else
		 * if(declaracion){ } else{ Bloque de codigo }
		 * 
		 */
		int billonesSp = 198;
		int numBitcoins = 256;
		if (billonesSp > 200 || numBitcoins > 5892)
			System.out.println("Sea mi padrino");
		else
			System.out.println("No compro en tiendas conocidad");

		/**
		 * if(condicion) bloqueInstruccion else if (condicion nueva ) bloque instruccion
		 * else if (condicion nueva)bloque instruccion else bloqueInstruccion
		 */
		int retencionISR = 37;
		int retencionIVA = 18;

		if (retencionISR < 30 && retencionIVA < 15)
			System.out.println("Me alcanza");
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alcanza , pero es algo");
		else
			System.out.println("Debo trabajar mas , siempre contento :( ");
		/**
		 * Una forma rapida de realizar una evaliuacion condicional es con el uso del
		 * operador ternario "?" (condicional) ? "Instrucciones si es true " :
		 * "Instrucciones si es false";
		 */
		boolean esFrontera = false;
		int impuestoAplicar = esFrontera ? 8 : 16; // Si fuera true es 8 , false 16
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);

		System.out.println("Tipo de region:" + ((impuestoAplicar > 8) ? "Centro" : "Frontera"));

		/**
		 * Con la condicion switch, podemos evaluar multiples opciones switch(expresion
		 * a evaluar){ case opcion 1: bloque de codigo break; case opcion 2: bloque de
		 * codigo break; case opcion n: bloque de codigo break; default: Bloque de
		 * codigo si ningun case se cumple break; }
		 */

		int mes = 8;
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
			mesTxt = "No se tiene registro";
		}
		System.out.println("No se tiene registrado" + mesTxt);
      
		mes = 4;
		switch(mes){
			case 3: case 4: case 5:
				System.out.println("Estamos en primavera");
				break;//Si no colocan breaks imprime los print de otros case 
			case 6: case 7: case 8:
				System.out.println("Estamos en verano");
				break;
			case 9: case 10: case 11:
				System.out.println("Estamos en otoño");
				break;
			case 12: case 1: case 2:
				System.out.println("Estamos en invierno");
				break;
			default:
				System.out.println("Error en el mes introducido");
		}
		//las variables cuando no son primitivos los datos guardan el ID y no el dato como tal en la variable
		String nombre = "Rafa";//string es inmutable en memoria 
		nombre= "Emiliano";//se puede modificar el valor de la variable string , pero no sustituye el valor en memoria
		String jugador = "Rafa";//Rafa sigue teniendo el mismo Id en memoria aunque ahora este en otra variable
		String apellido = "Dorantes";//Garbage collector se encarga de eliminar los datos en memoria que no se utilicen en un tiempo
		
		String participante = new String("Dorantes"); //new string crea el string con nuevo id , por eso en memoria ya hay dos veses el mismo string pero con diferente id
		if(apellido == participante)//No se recomienda usar == con los strings por lo que se comento en la linea 127 ,Se comparan los IDs pero si se uso new 
		 System.out.println("El apellido es de Abi");//No se imprime
		
		if(apellido.equals(participante))//No se comparan las literales 
			System.out.println("El apellido es de Abi");//Se imprime porque las literales son iguales , arroja un true la comparacion de las literales usando el ".equals"
	    
		apellido = new String("Stark");//
		switch(apellido) {//switch compara las literales no los id
		case "Ruiz":
			System.out.println("Apellido de Gera");
			break;
		case "Dorantes":
			System.out.println("Apellido de Abi");
			break;
		case "Flores":
			System.out.println("Apellido de Maga");
			break;
		case "Delgado":
			System.out.println("Apellido de Sebas");
			break;
		default:
			System.out.println("Debe ser el apellido de Santi");
		}
	}
}

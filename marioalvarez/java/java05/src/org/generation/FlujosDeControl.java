package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		/**
		 * if(condición){
		 * 		Bloque de instrucciones
		 * }
		 */
		int edad=71;
		
		if(edad>70)
			System.out.println("Ya quiero mi pensión");
		System.out.println("Instrucción al final del if");
		
		//Si se requiere más de una intrucción, utilize {}
		
		if(edad>70) {
			System.out.println("Ya quiero mi pensión");
			System.out.println("Me duele la espalda");
		}
		System.out.println("Instrucción al final del if");
		
		//if anidados
		int nAutos=10;
		if(nAutos>20 && edad<80) {
			System.out.println("Puede condducir lo que quiera");
			int modelo=2020;
			if(modelo<2020) {
				System.out.println("El director venderá  estas antiguedades");
			}
		}  
		
		//if-else
		int billonesSP=232;
		int nBitcoins=256;
		if(billonesSP>200 || nBitcoins>5892)
			System.out.println("Sea mi padrino");
		else
			System.out.println("No comporo en tiendas conocidas");
		
		//if-else if
		int retencionISR=35;
		int retencionIVA=16;
		if(retencionISR<30 && retencionIVA<15)
				System.out.println("Me alcanza");
		if(retencionISR<36 && retencionIVA<17)
			System.out.println("No me alcanza, pero algo es algo");
		else
			System.out.println("Debo trabajar más");
		
		/**
		 * Una forma ráida de realizar una evaluación condicional
		 * (Operador ternario)
		 *  (condicional) ? "Instrucciones si es true":"Instrucciones si es false";
		 */
		
		boolean esFrontera= true;
		int impuestoAplicar = (esFrontera)? 8: 16;
		System.out.println("Impuesto a aplicar"+impuestoAplicar);
		
		//Switch
		int month = 8;
        String monthString;
        switch (month) {
            case 1:  monthString = "January";
                     break;
            case 2:  monthString = "February";
                     break;
            case 3:  monthString = "March";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "May";
                     break;
            case 6:  monthString = "June";
                     break;
            case 7:  monthString = "July";
                     break;
            case 8:  monthString = "August";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "October";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
        }
        System.out.println(monthString);
        
        //Cada String creado (literal String) se le asigna un id internamente para ponerlo en el string pull (Puedo ver el ID en el debugger)
        //Comparar string
        String nombre ="Rafa"; // Cada String s almacena con  un id interno;
        nombre="Emiliano"; //Tiene un id diferente
        String jugador ="Rafa"; //BUsca en el string pull y obtiene el id de rafa y lo asigna (reusa el string)
        String apellido="Dorantes";
        
        //Si funciona porque  porque comprara los id, pero no es recomendada
        if(apellido=="Dorantes") {
        	System.out.println("El apellido es de Abi");
        }
        
        //Creo un String e una forma diferente, // Al usar new String crea un Nuevo String, no le importa si existe en
        //memoria el mismo String, crea uno nuevo con un nuevo string  (mismas literales con diferente ID) 
        String participante = new String ("Dorantes");
        
        if(apellido== participante) { // No lo imprime porque tienen Difernete ID (Compar id)
        	System.out.println("El apellido es de Abi");
        }
        
        if(apellido.equals(participante)) { // Se comparan las literales
        	System.out.println("El apellido es de Abi!!!");
        }
        
        //Si quisiera aplicar el "Son diferentes" es con  !apellido.equals(participante)
        
        
	}
	
	
}

package java05;

public class Condicionales {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * if(condicion){
		 * 	Bloque de instruciones
		 * }
		 * */
		int edad=71;
		if(edad>70)System.out.println("Ya requiero cambio, denme mi pensión");
		System.out.println("Instrucion al final del if");
		
		//Si se requiere mas de una instrucción realicé un bloque
		//de codigo con {y}
		
		if(edad>50) {
			System.out.println("El director ya le duele la dos rodillas");
			edad-=10;
			System.out.println("Se realizó cirujias el Dir, con nuestros impuestos");
			System.out.println("Nueva edad del Dir, "+ edad);
			
			//Esta variable solo tiene alcace en l bloque
			int nAutos=10;
		}
		//System.out.println("N. autos: " + nAutos); //Esta variable solo tiene alcace en el bloque
		int nAutos=40;
		if(nAutos>20&&edad<80) {
			System.out.println("El director puede conducir lo que quiera");
			int modeloAuto=2019;
			if(modeloAuto<2020) {
				System.out.println("El Dir. regalara estas antiguedades");
				modeloAuto-=5;
				System.out.println("N. de autos restantes: "+ modeloAuto);
			}
		}
		/*
		 * En caso de que no se aplique la condición if, podemos usar la
		 * 
		 * Si se realiza la declaración if, la declaración else ya no se ejecuta
		 * if(declaración){
		 * 	
		 * }else{
		 * 
		 * }
		 * */
		int billonesSP=235;
		int nBitcoins=256;
		if(billonesSP>200||nBitcoins>5892) System.out.println("Sea mi padrino");
		else System.out.println("No se compro en tiendas conocidas");
		
		/*
		 * 
		 * if(condición)bloqueInstruciones
		 * else if(condición)bloqueInstriciones
		 * else if(condición)bloqueInstruciones
		 * else bloqueInstruciones
		 * 
		 * 
		 * */
		int retencionISR=37;
		int retencionIVA=18;
		
		 if(retencionISR<30&&retencionIVA<15)
			 System.out.println("Me alcanza");
		 else if(retencionISR<36&&retencionIVA<17)
			 System.out.println("No me alcanza, pero algo es algo");
		 else 
			 System.out.println("Deba trabajar más, siempre contento =)");
		 
		 /**
		  * Una forma rapida de realizar una evalución condicional es 
		  * cpn el uso del operador ternario.
		  * (condicional)? "instruciones su estrue" : "Instruciones si es false";
		  */
		 boolean esFrontera =false;
		 int impuestoAplicar=esFrontera ? 8:16;
		 System.out.println("Impuesto a aplicar: "+ impuestoAplicar);
		 
		 System.out.println("Tipo de región: "+((impuestoAplicar>8)?"Centro":"frontera"));
		 
		 /**
		  * La condición switch, podemos evaluar multiple condiciones
		  * switch(expresión a evaluar){
		  * 	case opción1: bloque de código
		  * 			break;
		  * 	case opción2: bloque de código
		  * 			break;
		  * 	case opciónn: bloque de código
		  * 			berak;
		  * 	default:
		  * 		Bloque de código si ningún case cumple la expresión
		  * 			break;
		  * }	 
		  */
		 int mes=9;
		 String mesTxt;
		 switch(mes) {
		 case 1: mesTxt = "Enero";
		 	break;
		 case 2: mesTxt = "Febrero";
		 	break;
		 case 3: mesTxt = "Marzo";
		 	break;
		 case 4: mesTxt = "Abril";
		 	break;
		 case 5: mesTxt = "Mayo";
		 	break;
		 case 6: mesTxt = "Abril";
		 	break;
		 case 7: mesTxt = "Mayo";
		 	break;
		 case 8: mesTxt = "Junio";
		 	break;
		 default: mesTxt = "No se tiene registrado";
		 	break;
		 }
		 System.out.println("Mes seleccionado: " + mesTxt);
		 
		 mes =1;
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
		 case 12, 1, 2:
			 System.out.println("Estamos en invierno");
			 break;
		default:
			System.out.println("Error en el mes introducido");
			 break;
		 }
		 
		 String nombre = "Rafa";
	     nombre = "Emiliano";
	     String jugador = "Rafa";//El valor se guarda en el primer nombre y no se puede cambiar rafa,guarda es el id usando String.
	     String apellido = "Dorantes";
	       
	      //f (apellido == "Dorantes")//se comparan los id
	        // System.out.println("El apellido es de Abi");
	           
	       String participante = new String("Dorantes");//new crea una nuevba instancia
	       
	    if (apellido ==participante);
	              System.out.println("El apellido es de Abi");
	              
	     if (apellido.equals(participante))//se comparan y salen iguales
	              System.out.println("!El apellido es de Abi");
	     
	     apellido = new String("Flores");
	     
	     //string es mejor usar string porque cambia el valor automaticamente sin escribir equals
	     
	     switch(apellido) {
	     case "Ruiz":
	         System.out.println("El apellido es de Gerardo");
	         break;
	     case "Flores":
	         System.out.println("El apellido es de Maga");
	         break;
	     case "Delgado":
	         System.out.println("El apellido es de Sebastian");
	         break;
	     default:
	           System.out.println("apellido se..");
	     }
	     
	     int N=24;
	     
	        if(N%2==0 && (N>=1 || N<=100) ){
	            System.out.println("Weird");
	            if(N>=2 || N<=5){
	                System.out.println("Not Weird");
	            }else if(N>=6 || N<=20){
	                System.out.println("Weird");    
	            }else{
	                System.out.println("Not Weird");
	            }
	            
	        }else{
                System.out.println("Weird");
            }
		 
	}

}

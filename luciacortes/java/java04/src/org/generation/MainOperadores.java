package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// El operador =, es el operador de asignación 
		
		int myVar = 12;
		
		int a = 3;
		int b = 5;
		//operadores aritméticos
		int sumatoria = a + b;
		int resta = a - b;
		int multiplica = a * b;
		//Necesitamos hacer un casteo para que primero 
		float division =(float) a / b;
		int residuo = a % b;
		
		System.out.println("Sumatoria: "+ sumatoria);
		System.out.println("Resta: "+ resta);
		System.out.println("Multiplica: "+ multiplica);
		System.out.println("División: "+ division);
		System.out.println("Residuo: "+ residuo);
		
		//Operadores unarios
		
		//hacer un valor positivo
		int valorInicial = 5;
		int valorPos = +valorInicial;
		
		// Hacer un valor negativo
		int valorNeg = -valorInicial;
				
		System.out.println("Valor positivo :"+valorPos);
		System.out.println("Valor negativo :"+valorNeg);
		
		//Operador unario de potsincremento (var++) y preincremento (++var)
		valorInicial = 10;
		int valorIncremento= ++valorInicial;
		System.out.println("Valor con incremento: "+valorIncremento);
		
		valorIncremento= valorInicial++;
		System.out.println("Valor con incremento: "+valorIncremento);

		valorInicial = 3;
		System.out.println("Valor con preincremento: "+ ++valorInicial);
		System.out.println("Valor con postincremento: "+ valorInicial++);
		System.out.println("Valor de la vairble: "+ valorInicial);
		
		//Operador unario not !, invierte un valor booleano
		boolean success = false;
		System.out.println("Valor booleano: "+ success);
		System.out.println("Valor booleano negado: "+ !success);
		System.out.println("Valor booleano: "+ success);
		
		//Operadores de igualdad y de relación
		
		//== igual que 
		System.out.println("40 == 40: "+ (40==40));
		System.out.println("40 != 40: "+ (40!=40));
		System.out.println("40 != 30: "+ (40!=30));
		//No puedo comparar diferentes tipos
		//System.out.println("40 != 30: "+ (40!= "30"));
		System.out.println("40 == 30: "+ (40== Integer.parseInt("30") ));
		//Compara el hexadecimal
		System.out.println("40 == 0x0A: "+ (40== Integer.parseInt("0A", 16) ));
		
		System.out.println("20 > 10 :"+ (20 > 10 ) );
		System.out.println("20 < 10 :"+ (20 < 10 ) );
		System.out.println("20 < 20 :"+ (20 < 20 ) );
		System.out.println("20 <= 20 :"+ (20 <= 20 ) );
		System.out.println("15 >= 15 :"+ (15 >= 15 ) );
		
		//Operadores condicionales &&(AND) y || (OR)
		//Evalúan condiciones booleanas
		//En operaciones AND, los dos operadores deben ser true para ser true
		//Para que sea true los dos deben ser true
		System.out.println("true && true :"+(true && true));
		System.out.println("true && false :"+(true && false));
		System.out.println("false && true :"+(false && true));
		System.out.println("false && false :"+(false && false));

		//|| OR
		//Para que sea false los dos deben ser false
		System.out.println("true || true :"+(true || true));
		System.out.println("true || false :"+(true || false));
		System.out.println("false || true :"+(false || true));
		System.out.println("false || false :"+(false || false));
		
		System.out.println("4>2 && 3<2 :" +(4>2 && 3<2)); //false
		System.out.println("20>=2 && 3<=3 :" +(20>=2 && 3<=3)); //true
		System.out.println("20==2 && 3<=3 && 2<6 :" +(20==2 && 3<=3 && 2<6)); //false
		System.out.println("8==45 && 3>3 || 2<6 :" +(8==45 && 3>3 || 2<6)); //true
		//AND tiene la prioridad que el OR para que no haya confusión pordemos usar los paréntesis
		System.out.println("true || (3>3 && false) :" +(true || (3>3 && false))); //true
		System.out.println("(true || 3>3) && false) :" +((true || 3>3) && false)); //true
		System.out.println("2>1 || 3>3 && !false) :" +(2>1 || 3>3 && !false)); //true
		
		System.out.println("!(4>2 && 3<2 || true) :" +!(4>2 && 3<2 || true)); //false
		
		//Operadores a nivel de bits
		//Operador negado de bits ~
		int myBits = ~0b0000_0000_0000_0000_0000_1000;
		System.out.println("Valor negado de 8: "+ myBits);
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento a la derecha: "+ myBits);
		System.out.println("Corrimiento a la derecha "+ Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la izquierda <<
		myBits = 0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento a la izquierda: "+ myBits);
		System.out.println("Corrimiento a la izquierda "+ Integer.toBinaryString(myBits));
		
		//Operadpr & AND a nivel de bits
		//REcomendación hacer en los If un && porque si solo hago un & se hace a nivel de bits.
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND a nivel de bits: "+ myBits);
		System.out.println("AND a nivel de bits "+ Integer.toBinaryString(myBits));
		
		//Operado | Or a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_1011;
		System.out.println("OR a nivel de bits: "+ myBits);
		System.out.println("OR a nivel de bits "+ Integer.toBinaryString(myBits));
		
		/**************Ejercicio Evaluación*/
		boolean X = true;
        boolean Y = false;
        boolean Z = true;
        
        System.out.println("(X && Y) || (X && Z) = "+ ( (X && Y) || (X && Z) ));
        System.out.println("X || Y && Z = "+ ( X || Y && Z ));
        System.out.println("X || Y || X && !Z && !Y = "+ ( X || Y || X && !Z && !Y ));
        System.out.println("(X || !Y)&& (!X || Z) = "+ ( (X || !Y)&& (!X || Z) ));
        System.out.println("!(X || Y) && Z = "+ ( !(X || Y) && Z  ));
        System.out.println("!X || !Y || Z && X && !Y = "+ ( !X || !Y || Z && X && !Y ));
        
        int a = 8;
        int b= 3;
        int c= -5;
        
        System.out.println(" a + b + c = "+ ( a + b + c ));
        System.out.println("a * b / c = "+ ( a * b / c ));
        System.out.println("(a * c) % b  = "+ ( (a * c) % b ));
        System.out.println("2 * b + 3 * (a - c) = "+ ( 2 * b + 3 * (a - c) ));
        System.out.println("a * (b / c) = "+ ( a * (b / c) ));
        System.out.println("a * (c % b) = "+ ( a * (c % b) ));
        System.out.println("a - b - c * 2 = "+ ( a - b - c * 2 ));
	}

}

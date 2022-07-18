package java04;

public class MainOperadores {

	public static void main(String[] args) {
		int myVar =12;
		
		int a = 3;
		int b = 5;
		//Operadores aritméticos
		int sumatoria = a + b ;
		int resta = a - b ;
		int multiplica = a * b ;
		double division = (double) a / b ; //Primero se ejecuta a/b
		int residuo = a%b; //modulo, lo que sobra en la división 
		
		System.out.println("Sumatoria: " + sumatoria );
		System.out.println("Resta: " + resta );
		System.out.println("Multiplicación: " + multiplica );
		System.out.println("División: " + division );
		System.out.println("Residuo: " + residuo );
		
		//Operadores unarios
		
		// hacer un valor positivo
		int valorInicial = 5;
		int valorPos =  + valorInicial;
			
		// Hacer un valor negativo
		int valorNeg = valorInicial;
		
		System.out.println("Valor positivo: " + valorPos);
		System.out.print("Valor negativo: " + valorNeg);
		//Operador unario de postincremento (var++)y preincremento (++var)
		valorInicial = 10;
		int valorIncremento = ++valorInicial;
		System.out.println("Valor con incremento: " + valorIncremento);
		
		int valorPosIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: " + valorPosIncremento); //11
		
		valorInicial = 3;
		System.out.println("Valor con preincremento: " + ++valorInicial); //4
		System.out.println("Valor con postincremento: " + valorInicial++);//4
		System.out.println("Valor de la variable: " + valorInicial);
		
		//Operador unario not !, invierte un valor booleano
		boolean success = true;
		System.out.println("Valor booleano: " + success );
		System.out.println("Valor booleano: " + !success );
		System.out.println("Valor booleano: " + success );
		
		//Operadores de igualdad y relación 
		
		// == igual que 
		System.out.println("40 == 40 : " + (40 == 40));
		System.out.println("40 != 30 : " + (40 != 30));
		//System.out.println("40 != 30 : " + (40 != "30")); No se pueden comparar los diferentes tipos
		System.out.println("40 != 30 : " + (40!= Integer.parseInt ("30") )); //para que pueda compararlos se hace un parseInt
		System.out.println("40 != 30 : " + (40== Integer.parseInt ("30") )); //para que pueda compararlos se hace un parseInt
		System.out.println("10 == 0x0A : " + (10 == Integer.parseInt ("0A",16) )); //para que pueda compararlos se hace un parseInt, aquí se compara 
		
		System.out.println(" 20 > 10 : " + ( 20 > 10) );
		System.out.println(" 20 < 10 : " + ( 20 < 10) );
		System.out.println(" 20 < 10 : " + ( 20 < 20) );
		System.out.println(" 20 <= 10 : " + ( 20 <= 20) );
		System.out.println(" 15 >= 15 : " + ( 15 >= 15) );
		
		//Operadores condicionales &&(and) y ||(or)
		//En operaciones AND los dos operando deben ser true para ser true
		System.out.println(" true && true : " + ( true && true) );// true
		System.out.println(" false && false : " + ( true && false) ); //false
		System.out.println(" false && true : " + ( false && true) );// false
		System.out.println(" false && false : " + ( false && false) ); //false

		System.out.println(" true || true : " + ( true || true) );// true
		System.out.println(" false || false : " + ( true || false) ); //true
		System.out.println(" false || true : " + ( false || true) );// true
		System.out.println(" false || false : " + ( false || false) ); //false
		
		System.out.println(" 4>2 && 3<2 : " + ( 4>2 && 3<2) ); //false
		System.out.println(" 20>=2 && 3<=3 : " + ( 20>=2 && 3<=2) ); //true
		System.out.println(" 20==2 && 3<=3 : " + ( 20==2 && 3<=3) ); //false
		System.out.println(" 0==45 && 3>3 || 2<6 : " + ( 8==45 && 3>3 || 2<6) ); // true
		System.out.println(" true || (3>3 && false) : " + (true || 3>3 && false) ); // true
		System.out.println(" 2>1 || (3>3 && !false) : " + (2>1 || (3>3 && !false) ) ); // true porque el primero es true, true || false = true
		
		System.out.println(" !(4>2 && 3<2 || true) : " + !(4>2 && 3<2 || true) ); // true
		
		//Operadores a nivel de bits
		//Operadorar negado de bits
		//byte myBits = ~8;
		//System.out.println("Valor negado de 8: " + myBits);
		//A nivel de bits es más sencillo trabajar con su versión binaria
		int myBits = ~0b0000_1000; //-8 en número binario
		System.out.println("Valor negado de 8: " + myBits);
		System.out.println("Valor negado de 8: " + Integer.toBinaryString(myBits));
		//Negar a nivel de bits... en número binario los 0 se cambian a 1 y viceversa
		
		//Corrimiento de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento a la derecha: " + myBits);
		System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(myBits));

		//Corrimiento de bits a la izquierda <<
		myBits = 0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento a la izquierda: " + myBits);
		System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(myBits));


		//Operador & AND a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_0000 & 0b1111_1111; //se van a comparar entre todos
		System.out.println("AND a nivel de bits: " + myBits);
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits));

		//Operador |OR a nivel de bits
				myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_1111; 
				System.out.println("OR a nivel de bits: " + myBits);
				System.out.println("OR a nivel de bits: " + Integer.toBinaryString(myBits));

		
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

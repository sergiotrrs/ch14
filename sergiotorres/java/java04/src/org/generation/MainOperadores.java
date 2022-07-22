package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		//El operador =, es el operador de asignación		
		int myVar = 12;
		
		int a = 3;
		int b = 5;
		//Operadores aritméticos
		int sumatoria = a +b ;
		int resta = a - b;
		int multiplica = a * b;
		float division = (float)a / b;
		int residuo = a%b;
		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("Multiplica: " + multiplica);
		System.out.println("division: " + division);
		System.out.println("residuo: " + residuo);
		
		//Operadores unários
		
		// hacer un valor positivo (+)
		int valorInicial = 5;
		int valorPos = +valorInicial;
		
		//Hacer un valor negativo
		int valorNeg = -valorInicial; 
		
		System.out.println("Valor positivo: " + valorPos);
		System.out.println("Valor negativo: " + valorNeg);
		
		//Operador unrario de postincreemento (var++) y preincremento(++var)
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento ++val: "+ valIncremento);//11
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: "+ valIncremento);//11
		System.out.println("Valor inicial: " + valorInicial);
		
		valorInicial = 3;
		System.out.println("Valor con preincremento: " + ++valorInicial);//4
		System.out.println("Valor con postincremento: " + valorInicial++);//4
		System.out.println("Valor de la variable: " + valorInicial);
		
		//Operador unario not !, invierte un valor booleano
		boolean success = false;
		System.out.println("Valor booleano: " + success);
		System.out.println("Valor booleano negado: " + !success);
		System.out.println("Valor booleano: " + success);
		
		//Operadores de igualdad y relación
		
		// == igual que
		System.out.println(" 40 == 40 :" + ( 40==40) );
		System.out.println(" 40 != 40 :" + ( 40!=40) );
		System.out.println(" 40 != 30 :" + ( 40!=30) );
		//System.out.println(" 40 != 30 :" + ( 40!= "30" ) ); Diferentes tipo
		System.out.println(" 10 == 0x0A :" + ( 10== Integer.parseInt("0A",16) ));
		
		System.out.println(" 20 > 10 :"+ ( 20 > 10 ) );
		System.out.println(" 20 < 10 :"+ ( 20 < 10 ) );
		System.out.println(" 20 < 20 :"+ ( 20 < 20 ) );
		System.out.println(" 20 <= 20 :"+ ( 20 <= 20 ) );
		System.out.println(" 15 >= 15 :"+ ( 15 >= 15 ) );
		
		// Operadores condicionales &&(AND) y ||(OR)
		//En operacion AND, los dos operandos deben ser true para ser true
		System.out.println(" true && true :" + (true && true )); //true
		System.out.println(" true && false :" + (true && false )); //false
		System.out.println(" false && true :" + (false && true )); // false
		System.out.println(" false && false :" + (false && false )); //false
		
		System.out.println(" true || true :" + (true || true )); // true
		System.out.println(" true || false :" + (true || false )); // true
		System.out.println(" false || true :" + (false || true )); // true
		System.out.println(" false || false :" + (false || false )); // false
		
		System.out.println(" 4>2 && 3<2 :"+ (4>2 && 3<2) );//false
		System.out.println(" 20>=2 && 3<=3 :"+ (20>=2 && 3<=3) );//true
		System.out.println(" 20==2 && 3<=3 && 2<6 :"+ (20==2 && 3<=3 && 2<6) );//false
		System.out.println(" 8==45 && 3>3 || 2<6 :"+ (8==45 && 3>3 || 2<6) );//true
		System.out.println(" true || 3>3 && false :"+ (true || 3>3 && false) );//true
		System.out.println(" 2>1 || (3>3 && !false) :"+ (2>1 || 3>3 && !false ) );//true
		
		System.out.println(" !(4>2 && 3<2 || true) :"+ !(4>2 && 3<2 || true) );//false
		
		
		//Operadores a nivel de bits
		//Operador negado de bits ~
		int myBits = ~0b0000_0000_0000_0000_0000_1000;
		System.out.println("Valor negado de 8: "+ myBits);
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits));
		
		//Corrimiento de bist a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_1000 >> 2;
		System.out.println("Corrimiento a la derecha: "+ myBits);
		System.out.println("Corrimiento a la derechaa: "+ Integer.toBinaryString(myBits));
		
		//Corrimiento de bist a la izquirda <<
		myBits = 0b0000_0000_0000_0000_1000_0001 << 3;
		System.out.println("Corrimiento a la izquierda: "+ myBits);
		System.out.println("Corrimiento a la izquierda: "+ Integer.toBinaryString(myBits));
				
		//Operador & AND a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND a nivle de bits: "+ myBits);
		System.out.println("AND a nivel de bits: "+ Integer.toBinaryString(myBits));

		//Operador | OR a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_0111;
		System.out.println("OR a nivle de bits: "+ myBits);
		System.out.println("Or a nivel de bits: "+ Integer.toBinaryString(myBits));

		
	}

}

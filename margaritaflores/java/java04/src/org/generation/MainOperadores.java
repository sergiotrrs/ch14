package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// El operador =, es el operador de asignación
		int myVar = 12;
		
		int a = 8;
		int b = -5;
		//Operadores aritméticos
		int sumatoria = a + b ;
		int resta = a - b;
		int multiplica = a * b;
		float division = (float)a / b; //Como el resultado es decimal se tiene que castear con float ó double
		int residuo = a%b;
		
		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("Multiplica: " + multiplica);
		System.out.println("División: " + division);
		System.out.println("residuo: "+ residuo);
		
		//Operadores unários
		
		//hacer un valor positivo
		int valorInicial = 5;
		int valorPos = +valorInicial;
		
		System.out.println("Valor positivo: " + valorPos);
		//Hace un valor negativo
		int valorNeg = -valorInicial;
		System.out.println("Valor negativo: " + valorNeg);
		
		//Operador unario de postincremento(var++) y preincemento(++var)
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento ++val: " + valIncremento);
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: " + valIncremento);
		System.out.println("Valor inicial: " + valorInicial);
		
		valorInicial = 3;
		System.out.println("Valor con preincremento: " + ++valorInicial);
		System.out.println("Valor con proincremento: " + valorInicial++);
		System.out.println("Valor de la variable: " + valorInicial);
		
		//Operador unario not !, invierte un valor booleano
		boolean success = true;
		System.out.println("Valor booleano: " + success);
		System.out.println("Valor booleano negado: " + !success);
		//No modifica el valor de la variable, solo lo modifica momentaneamente
		System.out.println("Valor booleano: " + success);
		
		//Operadores de igualdad y relación
		
		// == igual que
		System.out.println(" 40 == 40 : " + (40==40));
		System.out.println(" 40 != 40 : " + (40!=40));
		System.out.println(" 40 != 30 : " + (40!=30));
		//System.out.println(" 40 !=30 : " + (40!="30")); Diferentes tipo
		System.out.println(" 40 !=30 : " + (40!= Integer.parseInt("30"))); //Se castea con el Integer.parseInt
		System.out.println(" 40 == 30 : " + (40 == Integer.parseInt("30")));
		System.out.println(" 10 == 0x0A : " + (10 == Integer.parseInt("0A",16)));
		
		System.out.println("20 > 10 : " + (20 > 10));
		System.out.println("20 < 10 : " + (20 < 10 ));
		System.out.println("20 < 20 : " + (20 < 10 ));
		System.out.println( "20 <= 20 : " + (20 <= 20 ));
		System.out.println(" 15 >= 15 " + ( 15 >= 15 ));
		
		//Operadores condicionales &&(AND) y || (OR)
		//En operación AND, los dos operandos deben ser true para ser true
		//será true si y solo si ambos son true
		System.out.println(" true && true : " + (true && true)); //true
		System.out.println(" true && false : " + (true && false)); //false
		System.out.println(" false && true : " + (false && true)); //false
		System.out.println(" false && false : " + (false && false)); //false
		
		//Para que de false, los dos operandos deben de ser FALSE
		System.out.println(" true || true : " + (true && true)); //true
		System.out.println(" true || false : " + (true && false)); //true
		System.out.println(" false || true : " + (false && true)); //true
		System.out.println(" false || false : " + (false && false)); //false
		
		System.out.println(" 4 >2 && 3<2 : " + (true && false )); // false 
		System.out.println(" 20 >=2 && 3<=3: " + (20>=2 && 3<=3));// true
		System.out.println(" 20 == 2 && 3<=3 && 2<6 : " + (20 == 2 && 3<=3 && 2<6 )); // false
		System.out.println(" 8 == 45 && 3>3 || 2<6 : " + (8 == 45 && 3>3 || 2<6 ) ); //true
		System.out.println(" true || (3>3 && false) : " + (true || 3>3 || 2<6) ); //true
		System.out.println(" 2>1 || (3>3 && !false) : " + (2>1 || 3>3 && !false ));// True
		System.out.println(" !(4>2 && 3<2 || true) : " + !(4>2 && 3<2 || true) ); // false
		
		//Operadores a nivel de bits. Se debe trabajar en formato de bits
		//Operadores negado de bits
		int myBits = ~0b0000_0000_0000_0000_0000_1000; //Valor 8 binario
		System.out.println("Valor negado de 8: " + myBits);
		System.out.println("Valor negado de 8: " + Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento a la derecha: " + myBits);
		System.out.println("Corrimiento a la derechar: " + Integer.toBinaryString(myBits));
		
		myBits = 0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento a la izquierda: " + myBits);
		System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la izquierda <<
		myBits = 0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento a la derecha: " + myBits);
		System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(myBits));
	
		//Operador & AND a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND a nivel de bits: " + myBits);
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits));
	
		//Operador & | OR a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_0111;
		System.out.println("AND a nivel de bits: " + myBits);
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits));
	
	}

}

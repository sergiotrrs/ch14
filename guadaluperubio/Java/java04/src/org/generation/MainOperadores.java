package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// El operador =, es el operador de asignacion
		int miVar =12;
		
		int a = 3;
		int b = 5;
		//operadores aritmeticos
		int sumatoria = a + b;
		int resta = a - b;
		int multiplica = a * b;
		float division =(float)  a / b;
		float residuo =(float) a % b;
		
		System.out.println("Sumatoria: " +sumatoria);
		System.out.println("resta: " +resta);
		System.out.println("multiplicación: " +multiplica);
		System.out.println("división: " +division);
		System.out.println("residuo: " +residuo);
		
		//operadores unários
		
		//hacer un valor positivo
		int valorInicial = 5;
		int valorPos = +valorInicial;
		
		//hacer un valor negativo
		int valorNeg = -valorInicial;
		System.out.println("valor positivo. " +valorPos);
		System.out.println("valor genativo. " +valorNeg);
		
		//operador unário de postincremento (var++) y preincremento (++var)
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("valor ocn incremento: ++val: " + valIncremento);
		
		valIncremento = valorInicial++;
		System.out.println("valor con incremento val++: " + valIncremento);
		System.out.println("valor inicial: " +valorInicial);
		
		valorInicial = 3;
		System.out.println("valor con preincremento: " + ++valorInicial);
		System.out.println("valor con postincremento: " +valorInicial++ );
		System.out.println("valor de la variable: " +valorInicial);
		
		//operador unarios not !, este invierte un valor booleano
		boolean success = true;
		System.out.println("Valor booleano: " +success);
		System.out.println("valor boolenao negado: " + !success);
		System.out.println("Valor booleano: " +success);
	
		
		//operadores de igualdad y relación
		
		//== (igual que)
		System.out.println("40 == 40: " + ( 40==40) );
		System.out.println("40 == 30: " + ( 40!=30) );
		System.out.println("40 != 40: " + ( 40!=40) );
		//System.out.println("40 == 300: " + ( 40!="30") ); Diuferentes tipos
		//casteamos
		System.out.println("40 ==30: " + ( 40== Integer.parseInt("30")) );
		
		System.out.println(" 20 > 10: " + (20 > 10) );
		System.out.println(" 20 < 10: " + (20 < 10) );
		System.out.println(" 20 > 20: " + (20 < 20) );
		System.out.println(" 20 > 20: " + (20 <= 20));
		System.out.println(" 15 > 15: " + (15 >= 15));
		
		
		//operadores condicionales &&(AND) y ||(OR)
		
		System.out.println("true && true: " + (true && true) );
		System.out.println("true && false : " + (true && false) );
		System.out.println("false && true: " + (false && true) );
		System.out.println("false && false: " + (false && false) );
		
		System.out.println("true || true: " + (true || true) );
		System.out.println("true || false : " + (true || false) );
		System.out.println("false || true: " + (false || true) );
		System.out.println("false || false: " + (false || false) );
		
		System.out.println(" 4> && 3<2 :" + (4<2 && 3<2) );
		System.out.println(" 20>= && 3<=3 :" + (20 >=20 && 3<=3) );
		System.out.println(" 20=2 && 3<=3 && 2<6 :" + (20==2 && 3<=3 && 2<6) );
		System.out.println(" 8==45 && 3>3 || 2<6 :" + ( 8==45 && 3>3 || 2<6) );
		System.out.println(" 8==45 && 3>3 || 2<6 :" + ( 8==45 && 3>3 || 2<6) );
		System.out.println(" 2>1 || (3>3 && !false) :" + ( 2>1 ||  3>3 && !false) );
	
		System.out.println("!(4>2 && 3<2 || true) " +!(4>2 && 3<2 || true) );
	
		//operador a nivel de bits
		//operador negado de bits ~
		
		//byte myBits = ~8;
		int myBits = ~0b0000_0000_0000_0000_0000_10000; 
		System.out.println("Valor negado de 8: " +myBits);
		System.out.println("valor negado de 8 "+  Integer.toBinaryString(myBits));
		
		
		//corrimiento de bits a la derecha >>
		
		myBits = 0b0000_0000_0000_0000_1000_0000 >>2; 
		System.out.println("corrimiento a la derecha: " +myBits);
		System.out.println("corrimiento a la derecha "+  Integer.toBinaryString(myBits));
		
		//corrimiento de bits a la izquierda
		myBits = 0b0000_0000_0000_0000_1000_0000 <<3; 
		System.out.println("corrimiento a la izquierda: " +myBits);
		System.out.println("corrimiento a la izquieda "+  Integer.toBinaryString(myBits));
		
		//operador & AND a nivel de bits
		
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000; 
		System.out.println("and a nivel de bits: " +myBits);
		System.out.println("and a nivel de bits "+  Integer.toBinaryString(myBits));
		
		// operador | OR a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_0111;
		System.out.println("OR a nivel de bits: " +myBits);
		System.out.println("OR a nivel de bts "+  Integer.toBinaryString(myBits));
		
	
	}

}

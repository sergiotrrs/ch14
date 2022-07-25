package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//El operador = es assignator operator
		int myVar = 9;
		
		int a = 3;
		int b = 5;
		//Operadores aritméticos
		int sumatoria = a + b;
		int resta = a - b;
		int multiplica = a*b;
		float divi = (float) a/b;
		float remainder = (float) a%b;
		
		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("Multiplic: " + multiplica);
		System.out.println("Division: " + divi);
		System.out.println("Residuo: " + remainder);
		
		//Unary operators
		
		//Valor positivo
		int valorInicial = 5;
		//valor negativo
		valorInicial = -30;
		int valorPos = (int) (+valorInicial);
		System.out.println("Valor negativo:" + valorInicial);
		System.out.println("Valor positivo: " + valorPos);
		
		//Posincremento y preincremento
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println(valIncremento);
		valIncremento = valorInicial++;
		System.out.println(valIncremento);
		System.out.println(valorInicial);
		
		valorInicial = 3;
		System.out.println("Preincr: " + ++valorInicial); //4
		System.out.println("Preincr: " + valorInicial++); //4
		System.out.println("Valor: " + valorInicial); //5
		
		
		boolean success = true;
		System.out.println("Boole: " + success);
		System.out.println("Negando boole: " + !success);
		System.out.println("Boole: " + success);
		
		//Operadores de igualdad y relación
		
		// == igual que
		System.out.println(" 40 igual que 40?: " + (40 == 40));
		System.out.println(" 40 distinto que 40?: " + (40 != 40));
		System.out.println(" 40 igual que 30?: " + (40 == 30));
		System.out.println(" 40 distinto que 30?: " + (40 != 30));
		//System.out.println((40 != "30")); //No se puede comparar 
		System.out.println("40 distinto que 30?:" + (40 != Integer.parseInt("30") ));
		System.out.println("10 igual que 0A?: " + (10 == Integer.parseInt("0A", 16) ));
		
		System.out.println("20 > 10: " + (20>10));
		System.out.println("20 < 10: " + (20<10));
		System.out.println("20 < 20: " + (20 < 20));
		System.out.println("20 <= 20: " + (20 <= 20));
		System.out.println("15 >= 15: " + (15 >= 15));
		
		//Operadores condicionales && || !
		System.out.println("True && true: "+ (true && true));
		System.out.println("True && false: "+(true && false));
		System.out.println("False && true: "+(false && true));
		System.out.println("False && false: "+(false && false));
		
		String result = (20 >= 20) ? ("Sí") : ("No");
		System.out.println(result);
		
		//||
		System.out.println("True || true: "+ (true || true));
		System.out.println("True || false: "+(true || false));
		System.out.println("False || true: "+(false || true));
		System.out.println("False || false: "+(false || false));
		
		System.out.println((4 > 2 && 3<2));
		System.out.println((20 >= 2 && 3<=3));
		System.out.println(((2>1 || 3>3) && !false));
		
		//Jerarquía: se realizan && primero, luego |1
		
		//Operadores a nivel de bits
		//Negado de bits: ~
		int myBits = ~0b0000_0000_0000_0000_0000_1000;
		System.out.println(myBits);
		System.out.println("Negado en bits " + Integer.toBinaryString(myBits));
		
		//Bitwise operators
		//Corrimiento de bits a la derecha
		myBits = 0b0000_0000_0000_0000_1000_0000 >>2;
		System.out.println("Corrimiento a la derecha: " + myBits);
		System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la izquierda
		myBits = 0b0000_0000_0000_0000_1000_0000 <<2;
		System.out.println("Corrimiento a la izquierda: " + myBits);
		System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(myBits));
		
		//Operador AND a nivel bits
		//1 es true, 0 es false. Se resuelve como común
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND en bits (dec) " + myBits);
		System.out.println("AND en bits: " + Integer.toBinaryString(myBits));
		
		//Operador or a nivel bits
		//1 es true, 0 es false. Se resuelve como común
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1010_0000;
		System.out.println("AND en bits (dec) " + myBits);
		System.out.println("AND en bits: " + Integer.toBinaryString(myBits));
		
		
		
		
	}

}

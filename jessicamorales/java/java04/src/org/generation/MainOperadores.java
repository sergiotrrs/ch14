package org.generation;

public class MainOperadores {

	private static final boolean Y = false;

	public static void main(String[] args) {
		//El operador = es el operador de asignación
		int myVar = 12;
		int a = 3;
		int b = 5;
		//Operadores aritméticos
		int sumatoria = a + b;
		int resta = a - b;
		int multiplica = a * b;
		int residuo = a%b;
		//Se necesita hacer el casteo para mostrar los decimales
		double division = (double)a / b; 
		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("Multiplica: " + multiplica);
		System.out.println("Division: " + division);
		System.out.println("Residuo: " + residuo);
		
		//Operadores unários
		//Hacer un valor positivo (+)
		int valorInicial = 5;
		int valorPositivo = +valorInicial;
		
		//Hacer un valor negativo (-)
		int valorNegativo = -valorInicial;
		
		System.out.println("Valor positivo: " + valorPositivo);
		System.out.println("Valor negativo: " + valorNegativo);
		
		//Operador unario de post-incremento (var++) y pre-incremento(++var)
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento ++val: " + valIncremento); //11
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: " + valIncremento);
		System.out.println("Valor inicial: " + valorInicial);
		
		valorInicial = 3;
		System.out.println("Valor con preincremento: " + ++valorInicial); //4
		System.out.println("Valor con posincremento: " + valorInicial++); //4
		System.out.println("Valor de la variable: " + valorInicial); //5
		
		//Operador unario not !, invierte un valor booleano
		boolean success = false;
		System.out.println("Valor booleano: " + success); //false
		System.out.println("Valor booleano negado: " + !success); //true
		System.out.println("Valor booleano: " + success); //false
		
		//Operadores de igualdad y relación
		// == igual que
		System.out.println("40 == 40: " + (40==40)); //true
		System.out.println("40 != 40: " + (40!=40)); //false
		System.out.println("40 != 30: " + (40!=30)); //true
		//System.out.println("40 == 40: " + (40!="30")); //Diferente tipo de dato
		System.out.println("40 != '30': " + (40 != Integer.parseInt("30")));
		System.out.println("40 != '30': " + (40 != Integer.parseInt("0A", 16)));
		
		System.out.println("20 > 10: " + (20 > 10)); //true
		System.out.println("20 < 10: " + (20 < 10)); //false
		System.out.println("20 > 20: " + (20 < 20)); //false
		System.out.println("20 <=10: " + (20 <=20)); //true
		System.out.println("20 >=10: " + (20 >=15)); //true
		
		//Operadores condiciones &&(AND) y ||(OR)
		System.out.println("true && true: "+(true && true)); //true
		System.out.println("true && true: "+(true && false)); //false
		System.out.println("true && true: "+(false && true)); //false
		System.out.println("true && true: "+(false && false)); //false
		
		//Operadores condiciones &&(AND) y ||(OR)
		System.out.println("true || true: "+(true || true)); //true
		System.out.println("true || true: "+(true || false)); //true
		System.out.println("true || true: "+(false || true)); //true
		System.out.println("true || true: "+(false || false)); //false
		
		System.out.println("4>2 && 3<2" + (4>2 && 3<2)); //false
		System.out.println("20>=2 && 3<=3: " + (20>=2 && 3<=3)); //false
		System.out.println("20==2 && 3<=3 && 2 <6: " + (20==2 && 3<=3 && 2<6)); //false
		System.out.println("8==45 && 3>3 || 2<6: " + (8==45 && 3>3 || 2<6)); //true
		System.out.println("true || 3>3 && false: " + (true || 3>3 && false)); //true
		System.out.println("2>1 || 3>3 &&!false: " + (2>1||3>3 &&!false)); //true
		System.out.println("!( 4>2 && 3<2 || false)" +!( 4>2 && 3<2 || true)); //false
	
		//Operadores a nivel de bits
		//Operador negado de bits ~
		//Los 1 se convierte en 0 y viceversa
		int myBits = ~0b0000_0000_0000_0000_0000_1000;
		System.out.println("Valor negado de 8 " + myBits);
		System.out.println("Valor negado de 8 :" + Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento a la derecha: " + myBits);
		System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la izquierda
		myBits = 0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento a la derecha: " + myBits);
		System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(myBits));
		
		//Operador & AND a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND a nivel de bits: " + myBits);
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits));
		
		//Operador & AND a nivel de bits
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_0111;
		System.out.println("AND a nivel de bits: " + myBits);
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits));
		
		boolean X = true;
        boolean Y = false;
        boolean Z = true;
        
        System.out.println("(X && Y) || (X && Z) = "+ ( (X && Y) || (X && Z) ));
        System.out.println("X || Y && Z = "+ ( X || Y && Z ));
        System.out.println("X || Y || X && !Z && !Y = "+ ( X || Y || X && !Z && !Y ));
        System.out.println("(X || !Y)&& (!X || Z) = "+ ( (X || !Y)&& (!X || Z) ));
        System.out.println("!(X || Y) && Z = "+ ( !(X || Y) && Z  ));
        System.out.println("!X || !Y || Z && X && !Y = "+ ( !X || !Y || Z && X && !Y ));
        
        int a1 = 8;
        int b1= 3;
        int c= -5;
        
        System.out.println(" a + b + c = "+ ( a1 + b1 + c ));
        System.out.println("a * b / c = "+ ( a1 * b1 / c ));
        System.out.println("(a * c) % b  = "+ ( (a1 * c) % b1 ));
        System.out.println("2 * b + 3 * (a - c) = "+ ( 2 * b1 + 3 * (a1 - c) ));
        System.out.println("a * (b / c) = "+ ( a1 * (b1 / c) ));
        System.out.println("a * (c % b) = "+ ( a1 * (c % b1) ));
        System.out.println("a - b - c * 2 = "+ ( a1 - b1 - c * 2 ));
	}
	

}

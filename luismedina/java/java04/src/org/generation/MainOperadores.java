package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// El operador =, es el operador de asignacion
		int Myvar = 12;

		int a = 3;
		int b = 5;
		int sumatoria = a + b;
		int resta = a - b;
		int multiplica = a * b;
		float divide = (float) a / b;
		int residuo = a % b;

		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("Multiplicacion: " + multiplica);
		System.out.println("Division: " + divide);
		System.out.println("Residuo: " + residuo);

		// operadores unarios

		// Hacer un valor positivo
		int valorInicial = 5;
		int valorPos = +valorInicial;
		System.out.println("Valor positivo: " + valorPos);

		// Hacer un valor negativo
		int valorNeg = -valorInicial;
		System.out.println("Valor positivo: " + valorNeg);

		// Operador urinario de postincremento (var++)y preincremento (++var)
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento ++val: " + valIncremento);
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: " + valIncremento);
		System.out.println("Valor inicial: " + valorInicial);

		valorInicial = 3;
		System.out.println("Valor con preincremento: " + ++valorInicial);
		System.out.println("Valor con postincremento: " + valorInicial++);
		System.out.println("Valor de la variable: " + valorInicial);

		// Operaodor unario not!, invierte un valor booleano
		boolean succes = true;
		System.out.println("Valor booleano: " + succes);
		System.out.println("Valor booleano: " + !succes);
		System.out.println("Valor booleano: " + succes);

		// Operadores de igualdad y relacion
//		 == igual que
		System.out.println("40 == 40: " + (40 == 40));
		System.out.println("40 != 40: " + (40 != 40));
		System.out.println("40 != 40: " + (40 != 30));
//		System.out.println("40 != 30: " + (40!="30")); Diferentes tipos por lo cual no se pueden comparar
		System.out.println("40 != 30: " + (40 != Integer.parseInt("30")));
		System.out.println("1 != 30: " + (40 != Integer.parseInt("30")));

		System.out.println("20>10: " + (20 > 10));
		System.out.println("20<10: " + (20 < 10));

		System.out.println("20>10 " + (20 > 10));// true
		System.out.println("20<10 " + (20 < 10));// false
		System.out.println("20<20 " + (20 < 20));// false
		System.out.println("20<=20 " + (20 <= 20));// true
		System.out.println("15<=15 " + (15 >= 15));// true

		// Operadores condicionales &&(AND) y ||(OR)
		// Evaluan concidicones booleanas
		// En operaciones AND , solo si los operandos son true la respuesta sera true
		System.out.println("true && true: " + (true && true));// true
		System.out.println("true && false: " + (true && false));// false
		System.out.println("false && true: " + (false && true));// false
		System.out.println("false && false: " + (false && false));// false

		// En operaciones Or , solo si los dos operandos son false la respuesta es false
		System.out.println("true || true: " + (true || true));// true
		System.out.println("true || false: " + (true || false));// true
		System.out.println("false || true: " + (false || true));// true
		System.out.println("false || false: " + (false || false));// false

		System.out.println(" 4>2 && 3<2: " + (4 > 2 && 3 < 2));// false , uno es true y otro false
		System.out.println(" 20>=2 && 3<=3: " + (20 >= 2 && 3 <= 3));// true , ambas condiciones son true
		System.out.println(" 20==2 && 3<=3 && 2<6: " + (20 == 2 && 3 <= 3 && 2 < 6));// false , true y false dan false ,
																						// y un false y un true dan
																						// false
		System.out.println(" 8==45 && 3>3 || 2<6: " + (8 == 45 && 3 > 3 || 2 < 6));// true , false y false dan false or
																					// true
		System.out.println(" true || 3>3 && false: " + (true || 3 > 3 && false));// true , prioridad de los operadores
																					// and tiene prioridad del or
		System.out.println(" 2>1 || (3>3 && !false): " + (2 > 1 || 3 > 3 && !false));// true , prioridad de los
																						// operadores
																						// and tiene prioridad del or

		System.out.println("!(4>2 && 3<2 || true): " + !(4 > 2 && 3 < 2 || true));

		// Operadores a nivel de bits
		// operador negado de bits alt+126 (~)
		int mybits = ~8;
		mybits = ~0b0000_0000_0000_0000_0000_1000;
		System.out.println("Valor negado de ~8: " + mybits);
		System.out.println("Valor negado de ~8: " + Integer.toBinaryString(mybits));
		// Corrimiento de bits a la derecha >>
		mybits = 0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento de bits a la derecha: " + mybits);
		System.out.println("Corrimiento de bits a la derecha: " + Integer.toBinaryString(mybits));

		// Corrimiento de bits a la derecha >>
		mybits = 0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento de bits a la Izquierda: " + mybits);
		System.out.println("Corrimiento de bits a la Izquierda: " + Integer.toBinaryString(mybits));

		// Operador & ANd a nivel de bits
		mybits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND a nivel de bits: " + mybits);
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(mybits));

		// Operador OR | a nivel de bits
		mybits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1111;
		System.out.println("OR a nivel de bits: " + mybits);
		System.out.println("Or a nivel de bits: " + Integer.toBinaryString(mybits));
	
		
	}

}

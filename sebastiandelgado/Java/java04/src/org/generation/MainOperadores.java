package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//El operador =, es el operador de asignación
		int myVar = 12;
		
		int a=3;
		int b=5;
		
		//Operadores aritméticos
		
		int sumatoria = a +b;
		int resta = a - b;
		int multiplica = a * b;
		float división = (float) a / b;
		int residuo = a%b;
		
		System.out.println("Suamtoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("Multuplica: " + multiplica);
		System.out.println("División " + división);
		System.out.println("residuo: " + residuo);
		
		//Operadores unarios
		
		//Hacer un valor positivo
		int valorInicial = 5;
		int valorPos = + valorInicial;
		
		//Hacer un valor negativo
		int valorNeg = -valorInicial;
		
		System.out.println("Valor positivo: "+ valorPos);
		System.out.println("Valor negativo: " + valorNeg);
		
		//Operador unario de postincremento (var++) y pre incremento (++var)
		valorInicial =10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incrmento ++val: " + valIncremento); //11
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: " + valIncremento);  //11
		System.out.println("Valor con incremento val++: " + valorInicial);
		
		valorInicial = 3;
		System.out.println("Valor con preincremento: " + ++valorInicial);
		System.out.println("Valor con post incremento: "+ valorInicial++ );
		System.out.println("Valor de la variable: "+ valorInicial);
		
		
		//Operador unario not !, invierte un valor boolean
		boolean success = true;
		System.out.println("Valor booleano: " + success);
		System.out.println("Valor booleano negado: "+ !success);
		System.out.println("Valor booleano: "+ success);
		
		//Operadores de igualdad y relación
		
		// == igual que
		System.out.println(" 40 == 40 :" + (40 == 40));
		System.out.println(" 40 != 40 :" + (40 != 40));
		System.out.println(" 40 != 30 :" + (40!=30));
		//System.out.println(" 40 != 30 :" + (40!= "30" )); Diferentes tipo
		System.out.println(" 40 == 30 :"+ (40 == Integer.parseInt("30")));
		
		System.out.println(" 20 > 10 :"  + (20 > 10));
		System.out.println(" 20 < 10 :"  + (20 < 10));
		System.out.println(" 20 > 20 :"  + (20 < 20));
		System.out.println(" 20 >= 20 :"  + (20 >= 20));
		System.out.println(" 15 >= 15 :"  + (15 >= 15));
		
		//Operaciones condicionales &&(AND) y ||(OR)
		//En operación AND, los dos operandos deben ser true para ser true
		System.out.println("true && true: "+ (true && true)); //true
		System.out.println("true && false: "+ (true && false)); //false
		System.out.println("false && true: "+ (false && true)); //false
		System.out.println("false && false: "+ (true && true)); //false
		
		System.out.println("true || true: "+ (true || true));  //true
		System.out.println("true || false: "+ (true || false)); //true
		System.out.println("false || true: "+ (false || true)); //true
		System.out.println("false || false: "+ (true || true)); //false
		
		System.out.println(" 4>2 && 3<2 :" +(4>2 && 3<2)); //false
		System.out.println(" 20>=2 && 3<=3 :" +(20>=2 && 3<=3)); //true
		System.out.println(" 20==2 && 3<=3 && 2<6 :" +(20>=2 && 3<=3 && 2<6)); //true
		System.out.println(" 8==45 && 3>3 || 2<6:" +(20>=2 && 3<=3 || 2<6)); //true
		System.out.println(" 20>=2 && 3<=3 :" +(20>=2 && 3<=3 )); //true
		System.out.println(" 20>=2 && 3<=3 :" +(20>=2 && 3<=3)); //true
		
		//Hay prioridades de operadores (AND) va primero que (OR)
		
		
		//Operadores a nivel de bits
		//Operador negado de bits ~
		
		int myBits = ~0b0000_0000_0000_0000_0000_1000;
		System.out.println("Valor negado de 8: " + myBits);
		System.out.println("Valor negado de 8: " + Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_1000 >>2;
		System.out.println("Corrimiento a la derecha: "+ myBits);
		System.out.println("Corrimeinto a la izquierda: "+ Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la izquierda <<
		myBits = 0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento a la derecha: "+ myBits);
		System.out.println("Corrimeinto a la izquierda: "+ Integer.toBinaryString(myBits));
		
		//Operador & AND a nivel de bits
		myBits= 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("AND a nivel de bits: "+ myBits);
		System.out.println("AND a nivel de bits" + Integer.toBinaryString(myBits));
		
		//Operador | OR a nivel de bits
		myBits= 0b0000_0000_0000_0000_1000_1100 | 0b1111_0111;
		System.out.println("OR a nivel de bits: "+ myBits);
		System.out.println("OR a nivel de bits: " + Integer.toBinaryString(myBits));
		
		
		
	}

}

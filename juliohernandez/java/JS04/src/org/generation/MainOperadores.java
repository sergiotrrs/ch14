package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int myVar = 12;
		
		int a = 3; 
		int b = 5;
		
		System.out.println("Sumatoria: " + (a+b));
		
		//Operadores aritméticos
		int sumatoria = a+b;
		int resta = a-b;
		int multiplica = a*b;
		double division = (double) a/b; //Imprime 0 porque a y b son enteros
		float otraDivision = (float) a/b; //Imprime 0 porque a y b son enteros
		int residuo = a%b; 
		
		System.out.println("Sumatoria: "+ sumatoria);
		System.out.println("resta: "+ resta);
		System.out.println("multiplica: "+ multiplica);
		System.out.println("division: "+ division);
		System.out.println("division: "+ otraDivision);
		System.out.println("residuo: "+residuo );
		
		//Operadores unários
		//i) Hacer un valor positivo (+) Pero si es negativo no lo cambia: Sigue la regla de los signos
		int valorInicial = 5;
		int valorPos = +valorInicial; //5
		
		//ii) Hacer valor negativo
		int valorNeg = -valorInicial;
		
		System.out.println("Valor positivo: " + valorPos);
		System.out.println("Valor negativo: " + valorNeg);

		//Post y pre INCREMENTO
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento: " + valIncremento);//11
		
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento: " + valIncremento);//11
		//valInicial = 12
		
		//Otro ejercicio
		valorInicial = 3;
		System.out.println("Valor con pre incremento: " + ++valorInicial);
		System.out.println("Valor con post incremento: " + valorInicial++);
		
		//Operador not !, invierte un valor booleano pero no lo cambia
		boolean success = false; 
		System.out.println("Valor booleano: " + success);
		System.out.println("Valor booleano: " + !success);
		System.out.println("Valor booleano: " + success);
		
		//Operadores de igualdad y relación
		//No tiene sentido que exista el === porque solo se pueden comparar mismo tipo
		
		//igual que ==
		System.out.println("40 == 40: "+(40==40));
		System.out.println("40 != 30: "+(40!=30));
		System.out.println("40 != 40: "+(40!=40));

		System.out.println("40 != \"30\": "+(40 != Integer.parseInt("30")));
		System.out.println("40 != \"0x0A\": "+(40 != Integer.parseInt("0A",16))); //YA NO SE ESCRIBE EL 0X
		
		System.out.println(" 20 > 10 : " + (20 > 10));
		System.out.println(" 20 < 10 : " + (20 < 10));
		System.out.println(" 20 >= 10 : " + (20 >= 10));
		System.out.println(" 20 <= 10 : " + (20 <= 10));
		
		//Operadores condicionales && (AND) y || (OR)
		System.out.println("true && true : " + (true && true)); //true
		System.out.println("true && false : " + (true && false)); //false
		System.out.println("false && true : " + (false && true)); //false
		System.out.println("false && false : " + (false && false)); //false
		
		//Prioridades && antes que ||
		System.out.println("8==45 && 3>3 || 2<6:" + (8==45 && 3>3 || 2<6)); //Se evalúan por pares izq->der
		System.out.println("true || 3>3 && false :" + (true || 3>3 && false )); //Se evalúan por pares izq->der
		
		
		//OPERADORES A NIVEL DE BITS
		//Operador negado de bits ~
		int miBits = ~0b0000_0000_0000_0000_0000_1000; //convierte unos es ceros y viceversa
		System.out.println("miBits: " + miBits);
		System.out.println("miBits: " + Integer.toBinaryString(miBits));
		
		//Corrimiento de bits a la derecha >>
		miBits = 0b0000_0000_0000_0000_1000_0000;
		System.out.println("\nSin corrimiento: " + Integer.toBinaryString(miBits));
		miBits = 0b0000_0000_0000_0000_1000_0000 >> 2;  //Disminuyen los ceros
		System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(miBits));
		
		//Corrimiento de bits a la izq <<
		miBits = 0b0000_0000_0000_0000_1000_0000;
		System.out.println("\nSin corrimiento           : " + Integer.toBinaryString(miBits));
		miBits = 0b0000_0000_0000_0000_1000_0000 << 3; //Aumentan los ceros
		System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(miBits));
				
		//Operador & (AND) a nivel de bits
		miBits = 0b0000_0000_0000_0000_1000_1100; 
		System.out.println("\nSin AND           : " + Integer.toBinaryString(miBits));
		System.out.println("Elemento a evaluar: " + Integer.toBinaryString(0b1111_1000));
		miBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000; //Se hace un and elemento a elemento (bit)
		System.out.println("Con AND           : " + Integer.toBinaryString(miBits));
		
		//Operador | (OR) a nivel de bits
		miBits = 0b0000_0000_0000_0000_1000_1100; 
		System.out.println("\nSin or                 : " + Integer.toBinaryString(miBits));
		System.out.println("Elemento a evaluar (or): " + Integer.toBinaryString(0b1111_1000));
		miBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_1000; //Se hace un and elemento a elemento (bit)
		System.out.println("Con or                 : " + Integer.toBinaryString(miBits));
		
	}

}

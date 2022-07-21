package org.generation;

public class operadores {

	public static void main(String[] args) {
		//El operador =, es el operador de asignación 
		int myVar = 12;
		
		int a = 3;
		int b = 5;
		//Operadores aritméticos
		int sumatoria = a+b;
		int resta = a-b;
		int multiplicacion = a*b;
		double division = (double)a / b;
		int residuo = a % b;
		
		System.out.println("sumatoria: " + sumatoria);
		System.out.println("resta: " + resta);
		System.out.println("multiplicacion: " + multiplicacion);
		System.out.println("division: " + division);
		System.out.println("residuo: " + residuo);
		
		//Operadores unarios 
		
		int valorInicial = 5;
		
		//valor positivo
		int valorPos = +valorInicial;// funciona como multiplicación de los signos
		
		//Hacer valor negativo
		int valorNeg = -valorInicial;
		
		System.out.println("Valor positivo: "+valorPos);
		System.out.println("Valor negativo: "+valorNeg);
		
		//Operador de postincremento var++ y preincremento ++var
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento: "+ valIncremento);
	
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento: "+ valIncremento);
		
		valorInicial = 3;
		System.out.println("Valor con preincremento: "+ ++valorInicial);//4
		System.out.println("Valor con postincremento: "+ valorInicial++);//entrega 4 y después incrementa la variable
		System.out.println("Valor con preincremento: "+ valorInicial);//imprime 5 
		
		//Operador unarion not !, invierte un valor booleano
		boolean success = true;
		System.out.println("Valor success: "+ success);
		System.out.println("Valor !success: "+ !success);
		
		//Operadores de igualdad y relación 
		// == igual que
		System.out.println("40 == 40 " + (40 == 40)); // la respuesta siempre será booleana 
		System.out.println("40 != 40 " + (40 != 40)); // la respuesta siempre será booleana 
		System.out.println("40 != 30 " + (40 != 30)); // la respuesta siempre será booleana 
		//System.out.println("40 != 30 " + (40 != "30")); // no se puede comparar diferentes tipos
		//Casteo de string a numerico con la envolvente Integer.parseInt
		//también existe el Float.parsefloat y Double.parsefloat
		System.out.println("40 != 30 " + (40 != Integer.parseInt("30")));
		System.out.println("40 == 30 " + (40 == Integer.parseInt("30")));
		
		//Castear a hexadecimal: parseInt("numero", base) ej: 
		
		System.out.println("10 == 0A " + (10 == Integer.parseInt("0A",16)));
		
		System.out.println("20 > 10 : " + (20 > 10));
		System.out.println("20 < 10 : " + (20 < 10));
		System.out.println("20 < 20 : " + (20 < 20));
		System.out.println("20 <= 20 : " + (20 <= 20));
		System.out.println("15 >= 15 : " + (15 >= 15));
		
		
		
		//Operadores condicionales && (and) y || (or) evalúan condiciones booleanas
		
		//En los operadores AND los operadores deben ser ambos true para que la 
		// respuesta sea true, de lo contrario será false
		System.out.println("true && true: " + (true && true )); // true 
		System.out.println("true && false: " + (true && false )); // false
		System.out.println("false && true: " + (false && true )); // false
		System.out.println("false && false: " + (false && false )); // false
		
		System.out.println("true || true: " + (true || true ));
		System.out.println("true || false: " + (true || false ));
		System.out.println("false || true: " + (false || true ));
		System.out.println("false || false: " + (false || false ));
		
		System.out.println("4>2 && 3<2 " + ( 4>2 && 3<2 ));
		System.out.println("20>=2 && 3<=3 " + ( 20>=2 && 3<=3 ));
		//Al evaluar 3 condiciones se evalúan las primeras 2 de izquierda a derecha
		// y después se evalúa el resultado con la última
		
		System.out.println("20==2 && 3<=3 && 2<6 " + ( 20==2 && 3<=3 && 2<6));
		System.out.println("8==45 && 3>3 || 2<6 " + (8==45 && 3>3 || 2<6));
		// Prioridad de los operadores: las operaciones de and && tienen prioridad sobre los OR ||
		// Primero se hace el AND y después el OR 
		System.out.println("true || 3>3 && false: " + (true || 3>3 && false));
		System.out.println("2>1 || 3>3 && !false: " + (2>1 || 3>3 && !false));
		
		System.out.println("!(4>2 && 3<2 || true): " + !(4>2 && 3<2 || true));
		
		
		//operadores a nivel de bits
		//operador negado de bits ~
		//byte myBits = ~8;
		int myBits = 0b0000_1000; // --> 11111111111110111; --> -9 
		int myBitsn = ~0b0000_1000; // --> 11111111111110111; --> -9 
		System.out.println("valor negado de 8:" + myBits); 
		System.out.println("valor negado de 8 en binario: " + Integer.toBinaryString(myBits)); //-9
		System.out.println("valor negado de 8 en binario: " + Integer.toBinaryString(myBitsn)); //-9
		
		//Corrimiento de bits a la derecha 
		myBits = 0b1000_0000 >> 2;
		
		System.out.println("Corrimiento a la derecha: " + myBits); 
		System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(myBits)); //-9
		
		
		//Corrimiento de bits a la izquierda 
		myBits = 0b1000_0000 << 3;
		
		System.out.println("Corrimiento a la izquierda: " + myBits); 
		System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(myBits)); //-9
		
		//Operador AND a nivel de Bits
		// El resultado va a ser el and del primer valor con el primer valor
		// con AND 1+1 = 1 y 1+0 = 0 
		//Esta operación se hace elemento a elemento 
		myBits = 0b1000_0000 & 0b1111_1111;
		
		System.out.println("AND a nivel de bits: " + myBits); 
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits)); //-9
		
		myBits = 0b1000_1100 & 0b1111_1000;
		
		System.out.println("AND a nivel de bits: " + myBits); 
		System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits)); //-9
		
		//Operador | OR a nivel de bits
		// En OR 1+1 = 1 y 1+0 = 1 
		myBits = 0b1000_1100 | 0b1111_1111;
		
		System.out.println("OR a nivel de bits: " + myBits); 
		System.out.println("OR a nivel de bits: " + Integer.toBinaryString(myBits)); //-9
		
		
		boolean X = true;
        boolean Y = false;
        boolean Z = true;
        
        System.out.println("(X && Y) || (X && Z) = "+ ( (X && Y) || (X && Z) ));
        System.out.println("X || Y && Z = "+ ( X || Y && Z ));
        System.out.println("X || Y || X && !Z && !Y = "+ ( X || Y || X && !Z && !Y ));
        System.out.println("(X || !Y)&& (!X || Z) = "+ ( (X || !Y)&& (!X || Z) ));
        System.out.println("!(X || Y) && Z = "+ ( !(X || Y) && Z  ));
        System.out.println("!X || !Y || Z && X && !Y = "+ ( !X || !Y || Z && X && !Y ));
        
         a = 8;
         b= 3;
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

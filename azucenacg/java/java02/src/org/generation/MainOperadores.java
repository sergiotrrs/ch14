package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// El operador =, es de asignacion
		int myVar=12;
		
		int a=3;
		int b=5;
		int sumatoria=a+b;
		int resta= a-b;
		int multiplica =a*b;
		double division = (double)a/b;
		//tenemos que poner el double en la izquierda porque
		//asi convertimos el a y b a double en vez de int
		int residuo = a%b;
		
		System.out.println("Sumatoria: "+ sumatoria);
		System.out.println("Resta: "+ resta);
		System.out.println("Multiplica: "+ multiplica);
		System.out.println("Division: "+ division);
		System.out.println("Residuo: "+ residuo);
		
		//Operadores unarios
		
		//Hacer un valor positivo (+)
		int valorInicial=5;
		int valorPos=+valorInicial;
		
		//Hacer un valor negativo 
		int valorNeg = -valorInicial;
		
		System.out.println("valor positivo: "+ valorPos);
		System.out.println("valor negativo: "+ valorNeg);
		
		//Operador unario de post (var ++) y pre incremento (++ var)
		
		valorInicial =10;
		int valIncremento =++valorInicial;
		System.out.println("Valor preincremento: " + valIncremento);
		
		valIncremento=valorInicial++;
		System.out.println("Valor postincremento: " + valIncremento);
		System.out.println("Valor inicial: " + valorInicial);
		
		valorInicial=3;
		System.out.println("Valor con preincremento: "+ ++valorInicial);//4
		System.out.println("Valor con postincremento: "+ valorInicial++);//4
		System.out.println("Valor de la variable: "+ valorInicial);//5
		//estos operadores si afectan el valor de la variable
		//por eso valorInicial es 5 ahora
		
		//Operador unario not !, invierte un valor booleano
		
		boolean success=true;
		System.out.println("Valor booleano: "+ success); //true
		System.out.println("Valor booleano negado: "+ !success);//false
		//este operador no afecta el valor de la variable
		//por eso success sigue siendo true
		System.out.println("Valor booleano: "+ success); //true
		
		//Operadores de igualdad y relación
		// == igual que 
		System.out.println("40 == 40 : "+ (40 == 40));
		System.out.println("40 != 40 : "+ (40 != 40));
		System.out.println("40 != 30 : "+ (40 != 30));
		//System.out.println("40 != 30 : "+ (40 != "30")); //no se puede
		System.out.println("parse 40 != 30: "+ (40!=Integer.parseInt("30") ) );
		System.out.println("10 == 0x0A "+ (10==Integer.parseInt("0A",16) ) );

		System.out.println("20>10: "+(20>10) );
		System.out.println("20<10: "+(20<10) );
		System.out.println("20<20: "+(20<20) );
		System.out.println("20<=20: "+(20<=20) );
		System.out.println("15>=15: "+(15>=15) );
		
		//Operadores condicionales &&(AND) y ||(OR)
		System.out.println("true && true: "+ (true && true));
		System.out.println("true && false: "+ (true && false));
		System.out.println("false && true: "+ (false && true));
		System.out.println("false && false: "+ (false && false));
		
		System.out.println("true || true: "+ (true || true));
		System.out.println("true || false: "+ (true || false));
		System.out.println("false || true: "+ (false || true));
		System.out.println("false || false: "+ (false || false));
		
		System.out.println(" 4>2 && 3<2 : "+ (4>2 && 3<2)); //false
		System.out.println(" 20>=2 && 3<=3 : "+ (20>=2 && 3<=3)); //true
		System.out.println(" 20==2 && 3<=3 && 2<6 : "+ (20==2 && 3<=3 && 2<6)); //false
		System.out.println(" 8==45 && 3>3 || 2<6 : "+ (8==45 && 3>3 || 2<6)); //true
		System.out.println(" true || 3>3 && false: "+ (true || 3>3 && false)); //true
		System.out.println(" 2>1 || 3>3 && !false : "+ (2>1 || 3>3 && !false)); //true
		
		//Operadores a nivel de bits 
		//Operador negado de bits
		int myBits=~0b0000_0000_0000_0000_0000_1000; //0b se le pone a los binarios
		System.out.println("Valor negado de 8: "+ myBits);
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits));
		
		//Corrimiento de bits a la derecha 
		myBits = 0b0000_0000_0000_0000_1000_0000 >>2;
		System.out.println("Corrimiento a la derecha: "+ myBits);
		System.out.println("Corrimiento a la derecha 2: "+ Integer.toBinaryString(myBits));

		//Corrimiento de bits a la izquierda <<
		myBits = 0b0000_0000_0000_0000_1000_0000 <<3;
		System.out.println("Corrimiento a la izquierda: "+ myBits);
		System.out.println("Corrimiento a la izquierda 2: "+ Integer.toBinaryString(myBits));
	
		//Operador & AND a nivel bits 
		myBits = 0b0000_0000_0000_0000_1000_1100& 0b1111_1000; 
		//se hace and con el 0 y 0 de los 1100 y del 1000
		//luego con el otro cero hacia a la izquierda y así
		System.out.println("AND a nivel de bits: " + myBits);
		System.out.println("AND a nivel de bits: "+ Integer.toBinaryString(myBits));

		//Operador | OR a nivel bits  
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_0111; 
		//se hace or con el 0 y 0 de los 1100 y del 1000
		//luego con el otro cero hacia a la izquierda y así
		System.out.println("OR a nivel de bits: " + myBits);
		System.out.println("OR a nivel de bits: "+ Integer.toBinaryString(myBits));
	
		
	}
}

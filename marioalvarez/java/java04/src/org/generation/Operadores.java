package org.generation;

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int myVar=12;
		int a=3;
		int b=5;
		//Operadores aritmeticos
		int sumatoria=a+b;
		int resta=a-b;
		int multiplica=a*b;
		float division=(float)a/b; // a lo convierte a tipo float y después lo divide entre b
		int residuo=a%b;
		System.out.println("Sumatoria:"+sumatoria);
		System.out.println("Resta:"+resta);
		System.out.println("Multiplica:"+multiplica);
		System.out.println("división:"+division);
		System.out.println("residuo:"+residuo);
		
		//Operadores unários
		
		//Postincrementeo (val++) y preincremento (ver--)
		int valorInicial=10;
		int valIncremento=++valorInicial;
		System.out.println("Valor con incremento ++val "+valIncremento);
		valIncremento=valorInicial++;
		System.out.println("Valor con incremento val++ "+valIncremento);
		
		//Operador unario not !. invierte un valor booleano
		boolean success=true; 
		System.out.println("Valor booleano"+success); //true
		System.out.println("Valor booleano"+!success); //false (no modifica la variable)
		System.out.println("Valor booleano"+success); //true
		
		//Operadores de igualdad y relación
		System.out.println("40 == 40:"+(40==40)); //true
		System.out.println("40 != 30:"+(40!=30)); //true
		System.out.println("40 != 30:"+(40!=Integer.parseInt("30"))); //true
		System.out.println("10 == 0x0A:"+(10!=Integer.parseInt("0A",16))); //true
		
		System.out.println("20>10:"+(20>10)); //true
		System.out.println("20<10:"+(20<10)); //false
		System.out.println("20<20:"+(20<20)); //false
		System.out.println("20<=20:"+(20<=20)); //true
		System.out.println("20>=20:"+(20>=20)); //true
		
		//Operadores condicionales && (AND) y || (OR)
		System.out.println("true && true:"+ (true && true)); //true
		System.out.println("true && false:"+ (true && false)); //false
		System.out.println("false && false:"+ (false && false)); //false
		System.out.println("false || true:"+ (false || true)); //true
		//El and tiene prioirdad sobre el or (Es como la suma y multiplicación)
		//true || 3>3 && false -> true || (3>3 && false)
		System.out.println("true || 3>3 && false:"+ (true || 3>3 && false)); //true
		
		//Operador a nivel de bits
		//Operador negado de bits ~
		
		//byte myBits=~8; resulta más facil trabajar con notación binaria
		int myBits=~0b0000_0000_0000_0000_0000_0000_0000_1000;// 8 binario
		//Negar todos los ceros se convierten en 1, y los 1 en ceros
		// 0b11110111;
		System.out.println("Valor negado de 8: "+ myBits); //-9
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits)); //
		
		//Corrimiento a la derecha
		myBits=0b0000_0000_0000_0000_0000_0000_1000_0000>>2;
		System.out.println("Valor negado de 8: "+ myBits);
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits)); //
		//Corrimiento a la izquierda
		myBits=0b0000_0000_0000_0000_0000_0000_1000_000<<2;
		System.out.println("Valor negado de 8: "+ myBits);
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits)); //
		
		
	}

}

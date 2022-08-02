package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//El operador = es el operador de asignacion
		int myVar = 12;
		
		int a = 3;
		int b = 5;
		//Operadores aritmeticos
		int sumatoria=a+b;
		int resta = a-b;
		int multiplica = a*b;
		//se castea 
		double division = (double)a/ b;
		int residuo = a%b;
		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta " + resta);
		System.out.println("Multipica " + multiplica);
		System.out.println("Division " + division);
		System.out.println("Residuo " + residuo);
		
		//Operadores unirarios
		
		//hacer un valor positivo(+)
		int valorInicial = 5;
		int valorPos = +valorInicial;
		int valorNeg = -valorInicial;
		System.out.println("Valor positivo : " + valorPos);
		System.out.println("Valor negativo : " + valorNeg);
		//Operador de posincremento (var ++) y preincremento (++var)
		valorInicial=10;
		int valIncremento=++valorInicial;
		System.out.println("Valor con incremento ++val: " +valIncremento);;//11
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val--: " + valIncremento);;//11
		System.out.println("valor inicial: " + valorInicial);
		
		valorInicial = 3;
		System.out.println("Valor con preincrmeneto" + ++valorInicial);
		System.out.println("Valor con posincrmeneto" + valorInicial++);
		System.out.println("Valor de la variable " + valorInicial);
		
		//Operador unario not !, inivierte un valor booleano, solo modifica el resultado
		//no el valor
		boolean sucess = false;
		System.out.println("Valor booleano: " + sucess);
		System.out.println("Valor booleano negado: " + !sucess);
		System.out.println("Valor booleano: " + sucess);
		
		//Operadores de igualdad y relacion
		//no existe estrictamente igual, no se puede mesclar los tipos de datos
		
		// ==igual que 
		System.out.println("40==40: "+ (40==40));
		System.out.println("40 !=40" +(40 !=40));
		System.out.println("40 !=30" +(40 !=30));
		//System.out.println("40 !=30 " +(40!="30"));No se puededifernte tipo
		System.out.println("40 != 30:" + (40==Integer.parseInt("30")));
		System.out.println("10 == 0x0A :" + (10== Integer.parseInt("0A",16)));
		
		System.out.println("20>10: " + (20>10) );
		System.out.println("20>10: " + (20<10) );
		System.out.println("20<20: " + (20<10) );
		System.out.println("20 <=20 : " + (20<=20) );
		System.out.println("15>=15: " + (15>=15) );
		
		//Operadores condicionales && (and) y || (or)
		//En operadores AND, de los dos operando deben de ser true para ser true 
		System.out.println("true && true: " + (true && true)); //true
		System.out.println("true && false: " + (true && false)); // false
		System.out.println("false && true: " + (false && true )); //false
		System.out.println("false && false: " + (false && false)); // false
	 
		//Operador or ||
		System.out.println("true || true: " + (true || true)); //true
		System.out.println("true || false: " + (true || false)); // true
		System.out.println("false || true: " + (false || true )); //true
		System.out.println("false || false: " + (false || false)); // false
		
		System.out.println(" 4>2 && 3<2 " + ( 4>2 && 3<2)); //false
		System.out.println(" 20>=2 && 3<=3 " + (  20>=2 && 3<=3 )); //true
		System.out.println(" 20==2 && 3<=3 && 2<6 " + (  20==2 && 3<=3 && 2<6   )); //false
		System.out.println(" 8==45 && 3>3 || 2<6 " + (  8==45 && 3>3 || 2<6  )); //true
		//Primero se realizar el and y posteriormente el ||. Es decir la prioridad es &&
		System.out.println(" true || 3>3 && false " + (  true || 3>3 && false  )); //true
		System.out.println(" true || (3>3 && false) " + (  true || (3>3 && false)  )); //true
		System.out.println(" 2>1 || (3>3 && !false) " +  (2>1 || (3>3 && !false) ) ); //true
		
		System.out.println(" !((4>2 && 3<2) || true) " + !((4>2 && 3<2) || true)); //false
		//Operador a nivel de bits
		//Operador negado de bits ~
		int myBits = ~0b0000_1000;
		System.out.println("Valor negado de 8: " + myBits);
		System.out.println("Valor negado de 8: " + Integer.toBinaryString(myBits));
		//Corrimeinto de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_0000 >>2;
		System.out.println("corrimiento a la derecha " + myBits);
		System.out.println("corrimiento a la derecha : " + Integer.toBinaryString(myBits));
		//Corrimeinto de bits a la derecha >>
		myBits = 0b0000_0000_0000_0000_1000_0000 <<2;
		System.out.println("corrimiento a la izquierda " + myBits);
		System.out.println("corrimiento a la izquierda " + Integer.toBinaryString(myBits));
		
		//Operador & AND a nivel bits
		myBits = 0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;//El primer valor con su repectiva posicion 
		System.out.println("AND a nivel de bits " + myBits);	
		System.out.println("AND a nivel de bits " + Integer.toBinaryString(myBits));
		
		//Operador | or a nivel bits
		myBits = 0b0000_0000_0000_0000_1000_1100 | 0b1111_1000;//El primer valor con su repectiva posicion 
		System.out.println("or a nivel de bits " + myBits);	
		System.out.println("or a nivel de bits " + Integer.toBinaryString(myBits));
	}

}















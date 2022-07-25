package java04;

public class Mainoperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//El operado =, es el operador de asignación
		int myVar = 12;
		
		int a=3;
		int b=5;
		//Operadores aritméticos
		int sumatoria=a+b;
		int resta = a-b;
		int multiplica = a*b;
		double division= (double) a/b; //Se castea para que me de decimales
		int residuo=a%b;
		System.out.println("Sumatoria: " + sumatoria);
		System.out.println("Resta: " + resta);
		System.out.println("multiplica: " + multiplica);
		System.out.println("division: "+division);
		System.out.println("reciduo: "+ residuo);
	
		//Operadores unários
		
		//hacer un valor positivo
		int valorInicial =-5;
		int valorPos=+valorInicial;
		
		//Hacer un valor negativo
		int valorNegativo = -valorInicial;
		
		System.out.println("Valor positivo: "+ valorPos);
		System.out.println("Valor negativo: "+ valorNegativo);
		
		//Operador unario posincremento (var ++) y preincremento(++var)
		valorInicial=10;
		int valorIncremento=++valorInicial;
		System.out.println("Valor con incremento ++val: "+valorIncremento);
		valorIncremento=valorInicial++;
		System.out.println("Valor incremento vall++: "+valorIncremento);
		System.out.println("Valor inicial: " +valorInicial);
		
		valorInicial=3;
		System.out.println("Valor con preincremento: "+ ++valorInicial);
		System.out.println("Valor con postincremento: "+ valorInicial++);
		System.out.println("Valor de la variable: "+ valorInicial);
		
		//Operador unario not !, invierte un valor booleano
		boolean success=true;
		System.out.println("Valor booleano: " + success);
		System.out.println("Valor booleano negado: " + !success);
		System.out.println("Valor booleano: "+ success);
		
		//Operadores de igualdad y relación
		
		//== igual que
		System.out.println("40==40 "+ (40==40));
		System.out.println("40!=30 "+ (40!=40));
		System.out.println("40!=30 "+ (40!=30));
		//System.out.println("40!=30 "+ (40!="30"));//No se puede comparar Diferentes tipos
		System.out.println("40!=30 "+ (40!= Integer.parseInt("30")));
		System.out.println("10!=0x0A "+ (10!= Integer.parseInt("0A",16)));//Se le tiene que indicar la base a la que se quiere convertir
		
		System.out.println("20 > 10 : "+(20>10));
		System.out.println("20 < 10 : "+(20<10));
		System.out.println("20 < 20 : "+(20<20));
		System.out.println("20 <= 10 : "+(20<=20));
		System.out.println("15 >= 15 : "+(15>=15));
		
		//Operadores condicionales &&(ADN) y || (OR)
		//En operaciones AND, los dos operando deben ser true para ser true
		System.out.println("true && treu : " + (true&&true));
		System.out.println("true && treu : " + (true&&false));
		System.out.println("false && treu : " + (false&&true));
		System.out.println("false && false : " + (false&&false));
		
		System.out.println("true || treu : " + (true||true));
		System.out.println("true || treu : " + (true||false));
		System.out.println("false || treu : " + (false||true));
		System.out.println("false || false : " + (false||false));
		
		System.out.println("4>2 && 3<2: "+(4>2 && 3<2));
		System.out.println("20>=2 && 3<=3: "+(20>=2 && 3<=3));
		System.out.println("20==2 && 3<=3 && 2<6: "+(20==2 && 3<=3 && 2<6));
		System.out.println("8==45 && 3>3 || 2<6: "+(8==45 && 3>3 || 2<6));
		System.out.println("true || 3>3 && false: "+(true || 3>3 && false));
		System.out.println("2>1 || 3>3 && !false: "+(2>1 || 3>3 && !false));
		System.out.println("!(4>2 && 3<2 || true) : "+!(4>2 && 3<2 || true));
		
		//Operadores a nivel de bits
		//Operador negado de bits ~
		int myBits=~0b0000_0000_0000_0000_0000_1000;
		System.out.println("Valor negado de 8: "+ myBits);
		System.out.println("Valor negado de 8: "+ Integer.toBinaryString(myBits));
		
		//Corrimineto de bits a las derecha >>
		myBits=0b0000_0000_0000_0000_1000_0000 >> 2;
		System.out.println("Corrimiento a la derecha: "+ myBits);
		System.out.println("Corrimiento a la derecha"+ Integer.toBinaryString(myBits));
		
		//Corrimineto de bits a la Izquierda >>
		myBits=0b0000_0000_0000_0000_1000_0000 << 3;
		System.out.println("Corrimiento a la izquierda: "+ myBits);
		System.out.println("Corrimiento a la izquierda"+ Integer.toBinaryString(myBits));
		
		//Operador & And a nivel de bits
		myBits=0b0000_0000_0000_0000_1000_0000 & 0b1111_1111;
		System.out.println("And a nivel de bits: "+ myBits);
		System.out.println("AND a nivel de bits: "+ Integer.toBinaryString(myBits));
		
		myBits=0b0000_0000_0000_0000_1000_1100 & 0b1111_1000;
		System.out.println("And a nivel de bits: "+ myBits);
		System.out.println("AND a nivel de bits: "+ Integer.toBinaryString(myBits));

		//Operador | OR a nivel de bits
		myBits=0b0000_0000_0000_0000_1000_0000 & 0b1111_1111;
		System.out.println("And a nivel de bits: "+ myBits);
		System.out.println("AND a nivel de bits: "+ Integer.toBinaryString(myBits));
		
		myBits=0b0000_0000_0000_0000_1000_1100 | 0b1111_1111;
		System.out.println("OR a nivel de bits: "+ myBits);
		System.out.println("OR a nivel de bits: "+ Integer.toBinaryString(myBits));
		
		myBits=0b0000_0000_0000_0000_1000_1100 | 0b1111_0111;
		System.out.println("OR a nivel de bits: "+ myBits);
		System.out.println("OR a nivel de bits: "+ Integer.toBinaryString(myBits));

		
		
	}

}

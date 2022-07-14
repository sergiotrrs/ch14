package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		//El operador =, es el operador de asignación.
		
		int myVar = 12;
		
		int a = 3;
		int b = 5;
		
		//Operadores aritmeticos
		int sumatoria = a + b;
		int resta = a - b;
		int multiplicacion = a*b;
		double division = (double)a/b;
		int residuo = a%b;
		System.out.println("***********************");
		
		System.out.println("La sumatoria es:" + sumatoria);
		System.out.println("Resta: "+ resta);
		System.out.println("Multiplicación: " + multiplicacion);
		System.out.println("División: " + division);
		System.out.println("Residuo: " + residuo);
		
		
		
		System.out.println("------------------------");
		
		//Operadores unários
		
		//Hacer un valor Positivo(+)
		int valorInicial = 5;
		int valorPos = +valorInicial;
		
		//Hacer un valor negativo(-)
		int valorNeg = -valorInicial;
		
		System.out.println("Valor Positivo:" +valorPos);
		System.out.println("Valor Negativo: "+ valorNeg);
		
		
		//Operador Unário de postincremento y preincremento
		
		valorInicial = 10;
		int valIncremento = ++valorInicial;
		System.out.println("Valor con incremento ++val: " + valIncremento);
		valIncremento = valorInicial++;
		System.out.println("Valor con incremento val++: " + valIncremento);
		System.out.println("Valor Incial: " + valorInicial);
		
		System.out.println("---------------------");
		valorInicial = 3;
		
		System.out.println("Valor con preincremento: " + ++valorInicial);
		System.out.println("Valor con postincremento: " + valorInicial++);
		System.out.println("Valor de la variable: " + valorInicial);
		
		System.out.println("-----------------");
		boolean success = true;
		System.out.println("El valor booleano " + success);
		System.out.println("El valor booleano " + !success);
		System.out.println("El valor booleano " + success);

		//Operadores de Igualdad y Relación 
		
		System.out.println("40 == 40 : " + (40 == 40) );
		System.out.println("40 != 40 : " + (40 != 40) );
		System.out.println("40 != 30 : " + (40 != 30) );
		System.out.println("40 == 30 : " + (40 == Integer.parseInt("30")) );
		
		
		
		
		
		System.out.println("*****************");
		System.out.println(" 20 > 10 : " + (20 > 10));
		System.out.println(" 20 < 10 : " + (20 < 10));
		System.out.println(" 20 < 20 : " + (20 < 20));
		System.out.println(" 20 <= 20 : " + (20 <= 20));
		System.out.println(" 15 >= 15 : " + (15 >= 15));
		System.out.println("********************");
		//Operadores Condicionales
		System.out.println("true && true :" + (true && true));//true
		System.out.println("true && false :" + (true && false));//false
		System.out.println("false && true :" + (false && true));//false
		System.out.println("false && false :" + (false && false));//false
		System.out.println("********************");
		System.out.println("true || true :" + (true || true));//true
		System.out.println("true || false :" + (true || false));//true
		System.out.println("false || true :" + (false || true));//true
		System.out.println("false || false :" + (false || false));//false
		System.out.println("****** Subiendo el nivel XD");
		
		System.out.println("4>2 && 3<2 : " + (4>2 && 3<2));//false
		System.out.println("20 >= 2 && 3<=3 : " + (20 >= 2 && 3<=3));//true
		System.out.println("20 == 2 && 3<=3 && 2<6: " + (20 == 2 && 3<=3 && 2<6));//False
		System.out.println("8 == 45 && 3<3 || 2<6: " + (8 == 45 && 3<3 || 2<6));//True
		System.out.println("true || 3>3 && false: " + (true || 3>3 && false));//true
		System.out.println("2>1 || (3>3 && !false): " + (2>1 || 3>3 && !false));//true
		System.out.println("!(4>2 && true): " + (!(4>2 && true)));//false
		
		
		
		
		
		
	}

}

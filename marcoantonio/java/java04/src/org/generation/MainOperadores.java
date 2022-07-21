package org.generation;

public class MainOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// El operador =, es el operador de asignacion
				int miVar =12;
				
				int a = 3;
				int b = 5;
				//operadores aritmeticos
				int sumatoria = a + b;
				int resta = a - b;
				int multiplica = a * b;
				float residuo = a%b;
				double division =(double)  a / b;
				
				
				System.out.println("Sumatoria: " +sumatoria);
				System.out.println("resta: " +resta);
				System.out.println("multiplicación: " +multiplica);
				System.out.println("división: " +division);
				
				//Operadores unarios 
				//Haer un valor positvo
				
				int valorInicial = 5;
				int valorPos = +valorInicial;
				
				//Hacer un valor Negativo 
				
				int valorIncremento = ++valorInicial; 
				System.out.println("Valor con incremento val++"+ valIncremento);
				valIncremento = valorinicial++;
				System.out.println("Valor con incremento val++: "+valIncremento); 
				System.out.println("Valor con postincremento:" +valorinicial++);
				
				valorInicial= 3; 
				
				
				// igual que 
				 System.out.println("40 == 40:" + (40 == 40) );
				 System.out.println("40 == 40:" + (40 != 40) );
				 System.out.println("40 == 30:" + (40 != 30) );
				 // System.out.println("40 == 30:" + (40 != 30) );
				 
				 System.out.println(" true || true :" +(true || true));
				 System.out.println(" true || true :" +(true || false));
				 System.out.println(" true || true :" +(false || true));
				 System.out.println(" true || true :" +(false || false));
				 
				 
				 System.out.println("4>2 && 3>2 :"+ (4>2 && 3>2)); // false 
				 System.out.println("20>2 && 3<=2 :"+ (4>=2 && 3<=2)); // true 
				 System.out.println("4>2 && 3>2 :"+ (20==2 && 3<=2 && 2<6)); // false 
				 System.out.println("4>2 && 3>2 :"+ (8==45 && 3>3 || 2<6)); // true
				 System.out.println("4>2 && 3>2 :"+ (2>1 || 3>3 && !false)); // true 
				 System.out.println("4>2 && 3>2 :"+ (true || 3>3 && !false)); // true 
				 
				 
				 // operadoeres a nivel de bits
				 // operador negado de bits 
				 
				 
				 // Corrimiento de bits a la derecha 
				 byte myBits = ~0b0000_0000_0000_0000_0000_1000 << 3;
				 Sytem.out.ptintln("Corriemineto a la izquierda" + myBits);
				 System.out.println("Valor negado de 8 "+ Integer.toBinaryString(myBits));
				 
				 
				 // Operador & AND a nivel de bits 
				 
				 byte myBits = ~0b0000_0000_0000_0000_0000_1000 && 0b1111_1111;
				 Sytem.out.ptintln("AND a nivel de bits" + myBits);
				 System.out.println("AND a nivel de bist "+ Integer.toBinaryString(myBits));
				 
				 byte myBits = ~0b0000_0000_0000_0000_0000_1000 | 0b1111_1000;
				 Sytem.out.ptintln("Corriemineto a la izquierda" + myBits);
				 System.out.println("Valor negado de 8 "+ Integer.toBinaryString(myBits));
				 
				 
				
				 
				 
				 
				
				
				
		
				
				
				
		
		
	}

}

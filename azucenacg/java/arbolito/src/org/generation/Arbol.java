package org.generation;

public class Arbol {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//int filas=3;
		//int numxt=filas+(filas-1);
		
		
//		int numE=2; //se le resta 1
//		int numX=1; //se le suman 2
		
//		for (int i = 0, j = 0; isMatrixElement(i,j,myArray); i++, j++) { 
//			   // ...
//			}
		//i es espacios
		//j es las x
		
		
		int filas=6;//Número de filas deseadas
		int xBase=filas+(filas-1); //X en total que tiene la base del arbol
		//System.out.println("x en la base del arbol: "+xBase);
		
		int eInicial=filas-1;//Espacios que debo dejar para posicionar la 1ra X (o los: *)
		//System.out.println("espacios antes de la 1ra x: "+eInicial);
		
		//los espacios inician con einicial y terminan cuando no hay espacios
		//antes de las x, que es la base
		//la x inicia cuando solo hay una y termina cuando 
		//se cumplen las x totales en la base que son las xBase
		
		for (int e = eInicial, x = 1; e>=0 && x<=xBase ; e--, x+=2) { 
//			System.out.println(" ");
//			System.out.println("e es: "+ e);
//			System.out.println("la x es: "+ x);
			
			//estas funciones simplemente me imprimen las veces que 
			//yo les indico que impriman
			//las variables e y x indican las veces que el for
			//va a dar vuelta para imprimir 
			
			for (int i = 1; i <= e; i+=1) {
				  System.out.print(" ");
				  
				}
			
			for (int j = 1; j <= x; j+=1) {
				  System.out.print("*");
				}
			
//			for (int i = 1; i <= e; i+=1) {
//				  System.out.print(" ");
//				  
//				}
			System.out.println(" ");
		}
		
		//int xTronco=xBase;
		
//		System.out.println(" otra cosa");
//		for (int e = 1; e <= numE; e = e + 1) {
//			  System.out.print("o");
//			}
//		
//		for (int x = 1; x <= numX; x = x + 1) {
//			  System.out.print("X");
//			}
//		for (int e = 1; e <= numE; e = e + 1) {
//			  System.out.print("e");
//			}
		
	}

}

package org.generation;

import java.util.*;

public class PracticaArbolito {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Arbolito de navidad
		// Problemática, un arbolito de Navidad, se da a conocer visualmente por
		// espacios y puntos

		int hoja = 1;
		int espacio;
		int fila, m;
		Scanner n = new Scanner(System.in);

		System.out.println("Programa de Arbolito de navidad :D ");
		System.out.println("Ingresa la cantidad de filas de su arbolito");
		espacio = n.nextInt();
		fila = espacio / 2;

		int i, j, k;

		//Arbusto
		for (i = 1; i < espacio + (espacio / 2); i++) {
			for (j = espacio + (espacio / 2); j > i; j--) {
				System.out.print(" ");
			}
			for (k = 1; k <= 2 * i - 1; k++) {
				System.out.print("*");
			}
			System.out.println("");
		}

		// Tronco
		for (i = 1; i < espacio - (espacio / 2); i++) {
			for (j = espacio+(espacio / 2); j > 1; j--) {
				System.out.print(" ");
			}
			for (k = (espacio / 2); k <= (espacio / 2)+1; k++) {
				System.out.print("*");
			}
			System.out.println("");
		}

//        for(i=1; i<m-(m/2); i++){
//            for(j=m+(m/2); j>1; j--){
//                System.out.print(" ");}
//            for(k=m/2; k<=(m/2)+1; k++){
//                System.out.print("*");}
//            System.out.println("");
//        }
	}

}

//@Francisco  class Solution{
//    public static void main(String []argh){
//        Scanner in = new Scanner(System.in);
//        int t=in.nextInt();
//        for(int i=0;i<t;i++){
//            int a = in.nextInt();
//            int b = in.nextInt();
//            int n = in.nextInt();
//            
//            int aux=a;
//            for(int j=0; j<n;j++){
//                
//                aux=aux+(int)Math.pow(2.0,j)*b;
//                System.out.print(aux+" ");
//            }
//            System.out.println("");
//        }
//        in.close();
//    }
//}

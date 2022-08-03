package org.generation;

import java.util.Scanner;

public class ArbolNavidad {

	public static void main(String[] args) {
		
		Scanner sc1= new Scanner(System.in);
		System.out.println("Ingrese el número de filas");
		int filas=sc1.nextInt();
		int limit= 2*(filas-1)+1;
		
		for(int i=0; i<filas; i++) {
			int numAste= 2*(i)+1;
			int numEspacios = (limit-numAste)/2;
			for(int j=0; j<numEspacios; j++) {
				System.out.print(" ");
			}
			for(int j=0; j<numAste; j++) {
				System.out.print("*");
			}
			System.out.println("");
		}
		
		//tronco
		for(int i=0; i<3;i++){
			
			for(int k=0; k<limit/2-1;k++) {
				System.out.print(" ");
			}
			for(int k=0; k<3;k++) {
				System.out.print("*");
			}
			System.out.println("");
		}
		//base
		for(int i=0; i<2;i++){
			
			for(int k=0; k<limit/2-3;k++) {
				System.out.print(" ");
			}
			for(int k=0; k<7;k++) {
				System.out.print("*");
			}
			System.out.println("");
		}
		
	}

}

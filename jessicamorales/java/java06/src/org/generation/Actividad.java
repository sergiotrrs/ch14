package org.generation;

import java.util.Scanner;

public class Actividad {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int i,j,k,n;
		System.out.println("Ingrese el número de filas del arbolito: ");
		n = sc.nextInt();
		for(i=0; i<n; i++){
			for(j=0; j<n-i; j++){
			System.out.print(" ");
			}
			for(k=0; k<2*i+1; k++){
			System.out.print("*");
			}
			System.out.println("");
		}
		for(k= 1; k<= 3; k++) {	
			for(i=1;i<=((n*2-1)/2)+1; i++)
					System.out.print(" ");
				for(j=1; j<=3; j++)
		             System.out.print("*");
					System.out.println(" ");
		}
	}

}

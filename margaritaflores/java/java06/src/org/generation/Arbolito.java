package org.generation;

import java.util.Iterator;

import javax.swing.plaf.synth.SynthOptionPaneUI;

public class Arbolito {

	//private static int ;

	public static void main(String[] args) {
		String texto = " Feliz Navidad \n Ch14";
		String ANSI_RED = "\u001B[31m";
		
		System.out.println (ANSI_RED + texto + ANSI_RED);
		
int i,j,k,n;
n=10; //Se modifica este parametro /para ver el tamaño


for(i=1; i<n+(n/2); i++){
    for(j=n+(n/2); j>i; j--){
       
    	System.out.print(" ");}
    
    for(k=1; k<=2*i-1; k++){
        System.out.print("*");}
    System.out.println("");
}
for(i=2; i<n-(n/3); i++){
    for(j=n+(n/2); j>1; j--){
        System.out.print(" ");}
    for(k=n/2; k<=(n/2)+1; k++){
        System.out.print("*");}
    System.out.println("");
}
}
}
		
//			//set height
//			int height = 10;
//			for (int i=1; i<=height; i++) {
//			//prints indentation
//				
//	for (int space=1; space<=height-i; space++) {
//		System.out.print(" ");
//	}		
//				//prints stars
//				for (int star=1; star<=i*2-1; star++) {
//					System.out.print("*");
//				}
//				//prints new line
//				System.out.println();						
//			}							
//		}
//	}
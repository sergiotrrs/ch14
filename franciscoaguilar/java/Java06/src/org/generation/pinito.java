package org.generation;

import java.util.Scanner;

public class pinito {
	public static void main(String[] args) {
		Scanner valor= new Scanner(System.in);
        System.out.println("¿Cuantas filas quieres?");
        int renglon=valor.nextInt();
        int asterisco=1,espacio;
        int tronco, mitad,maceta;
        
        //copa del arbol
        espacio=renglon;
        inicio: //Es una etiqueta para indicar a qué for se refiere el continue
        for(int i=1;i<=renglon;i++) {//es el numero de renglones
            for(int j=1;j<=espacio-1;j++) {
            	if(i==4||i==5) continue inicio; // continúa a partir del for con  etiqueta inicio
            	System.out.print(" ");//es el número de espacios
            }
            for(int k=1;k<=asterisco;k++)System.out.print("*");
            asterisco+=2;//Aumenta los asteriscos cada dos
            espacio--;//Disminulle el espacio cada 1
            
            System.out.println(""); //Imprimimos el salo de linea
        }    
        
//        //Tronco
//        tronco=2*renglon/3;
//        mitad=renglon/2;
//        
//        
//            
//        
//        
//        for(int i=1;i<=mitad;i++) {
//            for(int j=1;j<=tronco;j++)System.out.print(" ");
//            for(int k=1;k<=mitad;k++)System.out.print("*");
//            System.out.println("");        
//        }
//        System.out.println(mitad);
        
        //Maceta
//        maceta=(2*renglon/3)+2;
//        for(int i=1;i<=mitad-2;i++) {
//            for(int j=1;j<=tronco-2;j++)System.out.print(" ");
//            for(int k=1;k<=mitad;k++)System.out.print("*");
//            System.out.println("");        
//        }

    
		
		
		
	}

}

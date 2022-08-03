package org.generation;

import java.util.Scanner;

public class Navidad2 {

	public static void main(String[] args) {
		Scanner valor= new Scanner(System.in);
        System.out.println("¿Cuantas filas quieres?");
        int renglon=valor.nextInt();
        int asterisco=1,espacio;
        int tronco, mitad,maceta;
        
        //copa del arbol
        espacio=renglon;
        for(int i=1;i<=renglon;i++) {//es el numero de renglones
            for(int j=1;j<=espacio-1;j++)System.out.print(" ");//es el número de espacios
            for(int k=1;k<=asterisco;k++)System.out.print("*");
            asterisco+=2;//Aumenta los asteriscos cada dos
            espacio--;//Disminulle el espacio cada 1
            
            System.out.println(""); //Imprimimos el salo de linea
        }      

	}

}

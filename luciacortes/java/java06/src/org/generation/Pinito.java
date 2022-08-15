package org.generation;

import java.util.Scanner;

public class Pinito {

	public static void main(String[] args) {
			//Arbolito de navidad
		int i;
		int espacios;
		int asteriscos;
		System.out.println("Ingrese cuán alto quiere su arbolito de navidad");
		Scanner sc = new Scanner(System.in);
		int filas = sc.nextInt();
		
	//Copa depende del tamaño de filas más las filas a la mitad 
        for(i=1; i<filas+(filas/2); i++){
            for(espacios=filas+(filas/2); espacios>i; espacios--){
                System.out.print(" ");}
            
            for(asteriscos=1; asteriscos<=2*i-1; asteriscos++){
                System.out.print("*");}
            System.out.println("");
        }
        //Tronco
        for(i=1; i<filas-(filas/2); i++){
            for(espacios=filas+(filas/2); espacios>1; espacios--){
                System.out.print(" ");}
            
            for(asteriscos=filas/2; asteriscos<=(filas/2)+1; asteriscos++){
                System.out.print("*");}
            System.out.println("");
        }
//		
//		Scanner valor= new Scanner(System.in);
//        System.out.println("¿Cuantas filas quieres?");
//        int renglon=valor.nextInt();
//        int asterisco=1,espacio;
//        int tronco, mitad, maceta;
//        
//        //Copa del árbol
//        espacio=renglon;
//        inicio:
//        for(int i=1;i<=renglon;i++) {//número de renglones
//        
//            for(int j=1;j<=espacio-1;j++) {
//            	if (i==4||i==5) break inicio;
//            	System.out.print(" ");//es el número de espacios
//            }
//            for(int k=1;k<=asterisco;k++) System.out.print("*");
//            
//            asterisco+=2;//Aumenta los asteriscos cada dos
//            espacio--;//Disminuye el espacio cada 1
//            
//            System.out.println(""); //Imprimimos el salto de linea
//        }    
//        
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
        
//        Maceta
//        maceta=(2*renglon/3)+2;
//        for(int i=1;i<=mitad-2;i++) {
//            for(int j=1;j<=tronco-2;j++)System.out.print(" ");
//            for(int k=1;k<=mitad;k++)System.out.print("*");
//            System.out.println("");        
//        }

	}

}

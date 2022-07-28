package org.generation;

public class Pinito {

	public static void main(String[] args) {
		// Valores para primera línea
				int TotalLineas=6;
				int totalEspacios = TotalLineas-1; // El primero tiene 10 espacios
				int totalPuntos = 1; // Inicia con 1 punto
				
				//Copa
				for (int filas = 1; filas <= TotalLineas; filas++) {// Se repetirá por 10 filas

					for (int espacios = 1; espacios <= totalEspacios; espacios++) // Se hacen los espacios
						{//if (filas == 4 || filas == 5) continue;
						System.out.print(" ");
						}

					for (int puntos = 1; puntos <= totalPuntos; puntos++) // Se hacen los puntos
						{
						System.out.print("*");
						}

					totalEspacios--;
					totalPuntos += 2;
					System.out.println(""); // Se hace el salto de línea
				}
				
				//Tronco
				for (int linea=1;linea<=3;linea++) {
					for (int espacios=1;espacios<=(TotalLineas*2+1-4)/2;espacios++)
					System.out.print(" ");
					
					System.out.print("****\n");
				}
				
				//Base
				for (int linea=1;linea<=2;linea++) {
					for (int espacios=1;espacios<=(TotalLineas*2+1-4)/2-2;espacios++)
						System.out.print(" ");
					System.out.print("********\n");
				}

	}

}

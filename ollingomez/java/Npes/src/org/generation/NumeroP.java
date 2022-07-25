package org.generation;

public class NumeroP {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * Actividad 1:
		 * Determinar cunatas letras P (Mayuscula y minusculas)hay en
		 * "Pepe Pecas pica papas con un pico y palito"
		 * 
		 * Determinar el número mayor de:
		 * {23,56,7,98,23,1,6}
		 * Usar una función Math
		 * 
		 * System.out.println("¿A quien le gustan los limones? "+texto.substring(2,9));
		 */
		
		String texto="Pepe Pecas pica papas con un pico y palito";
		int cuenta=0;
		String mayusculas= texto.toUpperCase();
		
		for(int i=0; i<mayusculas.length(); i++) {
			if(mayusculas.charAt(i)=='P') {
				cuenta++;
				
			}
	
		}
		System.out.println("Encontre "+cuenta+" veces la letra P");
		
		int [] myArray= {23,56,7,98,23,1,6};
		//static int	max(int a, int b)

//		for(int numero: myArray) {
//			
//			max=Math.max(numero,);
//
//		}



	
	}

}

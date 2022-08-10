package ClasesYObjetos;

import javax.swing.JOptionPane;

public class Operacion {
		//Atributos
		
//	int numero1;
//	int numero2;
//	int suma;
//	int resta;
//	int multiplicacion;
//	int division;
//	
		//Métodos
	//Método para pedir al usuario que nos dijite dos números
//	
//	public void leerNumeros(){ //el siguiente es para solicitar un número al usuario
//		numero1 = Integer.parseInt(JOptionPane.showInputDialog("Digite un número"));
//		numero2 = Integer.parseInt(JOptionPane.showInputDialog("Digite un número"));
//	}
	
	
	public int sumar(int numero1, int numero2){
//		suma = numero1 + numero2;
		int suma = numero1 + numero2;
		return suma;
			
	}
	

	public int restar(int numero1,int numero2){
//		resta = numero1 - numero2;
		int resta = numero1 -numero2;
		return resta;
	}
	

	public int multiplicar(int numero1,int numero2){
//		multiplicacion = numero1 * numero2;
		int multiplicacion = numero1 * numero2;
		return multiplicacion;
	}
	

	public int dividir(int numero1,int numero2){
//		division = numero1 / numero2;
		int division = numero1 / numero2;
		return division;
	}
	
//	public void mostrarResultado (int suma, int resta, int multiplicacion, int division) {
//		System.out.println("La suma es : " + suma);
//		System.out.println("La resta es : " + resta);
//		System.out.println("La multplicación es : " + multiplicacion);
//		System.out.println("La división es : " + division);
	}
	
}

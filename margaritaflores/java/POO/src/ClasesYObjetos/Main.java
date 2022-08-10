package ClasesYObjetos;

import javax.swing.JOptionPane;

public class Main {

		public static void main (String [] args) {
//			Operacion opera = new Operacion();
//			
//			opera.leerNumeros();
//			opera.sumar();
//			opera.resta();
//			opera.multiplicar();
//			opera.dividir();
//			opera.mostrarResultado();
//			
			int n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite un número: "));
			int n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite un número: "));
			
		Operacion opera = new Operacion();
		
	System.out.println("La suma es : " + opera.sumar(n1, n2));
	 opera.restar(n1, n2);
	 opera.multiplicar(n1, n2);
	 opera.dividir(n1, n2);
//		
//	opera.mostrarResultado(suma, resta, multi, div);
		
			
			
			
			
		}
}

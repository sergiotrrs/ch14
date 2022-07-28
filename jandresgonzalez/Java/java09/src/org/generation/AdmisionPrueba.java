package org.generation;

public class AdmisionPrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
				
		AdmisionEnes andresLopez = new AdmisionEnes("Andres", "Tocayo", "Geociencias");
		andresLopez.encontrarPirita();
		
		AdmisionEnes abueglez = new AdmisionEnes("Andres", "Abue", "Literatura");
		abueglez.encontrarPirita();
		
		abueglez.setNocuenta(33);
		int noCuentaAbue = abueglez.getNocuenta();
		System.out.println("El número de Abue es " + noCuentaAbue);
		
		AdmisionEnes itzayana = new AdmisionEnes("Itzayana", "Itza", "Geociencias");
		itzayana.encontrarPirita();
		

	}

}

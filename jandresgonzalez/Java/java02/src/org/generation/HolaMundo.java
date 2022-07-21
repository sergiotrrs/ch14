package org.generation;

public class HolaMundo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte datoByte = 15;
		short datoShort = 1525;
		int datoInt = 150336;
		//Dato long lleva una L
		long datoLong = 21474836480L;
		
		
		//System.out.printIn(byte);
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Mix Byte: " + Byte.MIN_VALUE);
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Mix Short: " + Short.MIN_VALUE);
		System.out.println("Max INT: " + Integer.MAX_VALUE);
		System.out.println("Mix INT: " + Integer.MIN_VALUE);
		System.out.println("Max LONG: " + Long.MAX_VALUE);
		System.out.println("Mix LONG: " + Long.MIN_VALUE);

		//Dato de tipo float
		//Dato float lleva una f
		float datoFloat = 256.32f;
		System.out.println("Max Float:" + Float.MAX_VALUE);
		System.out.println("Min Float:" + Float.MIN_VALUE);
		
		double datoDouble = 3216541.3646545;
		System.out.println("Max double: " + Double.MAX_VALUE);
		System.out.println("Min double: " + Double.MIN_VALUE);
	}

}

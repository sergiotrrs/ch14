package org.generation.db; 

public class ServiceDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean developing=false;
		GenericDb conexion;
		if (developing) {
			conexion = new ConexionMySQL("localhost", 3039);
		} else {
			conexion = new ConexionOracle("10.0.1.50", 5550, "Permitido");
		} //Otro polimorfismo
			
		
		
		System.out.println(conexion.insertar(528));
		System.out.println(conexion.insertar(10));
		System.out.println(conexion.insertar(100));
		System.out.println(conexion.actualizar());
		System.out.println(conexion.eliminar());
	}
	
	/**
	 * Actividad:
	 * Del ejercicio anterior de clases, implementar una interfaz 
	 *  y una clase abstracta, implementarla y heredarlas
	 * 
	 */

}

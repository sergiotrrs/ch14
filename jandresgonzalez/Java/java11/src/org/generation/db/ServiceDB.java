package org.generation.db;

public class ServiceDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean developing = false;
		GenericDb conexion;
		if (developing) {
			conexion = new ConexionMySQL("localhost", 5500);
		}
		else {
			conexion = new ConexionOracle("8.83.83.8", 5090, "permitidísimo");
		}
		
		System.out.println(conexion.insertar(25));
		System.out.println(conexion.insertar(528));
		System.out.println(conexion.insertar(2000));
		
		System.out.println(conexion.actualizar());
		System.out.println(conexion.eliminar());
		
		/*
		 * Actividad:
		 * 
		 * Del ejercicio de Gomitas, implementar una interfaz y una clase abstracta
		 * implementar y heredarlas
		 * */

	}

}

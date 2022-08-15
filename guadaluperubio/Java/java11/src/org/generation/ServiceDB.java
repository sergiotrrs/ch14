package org.generation;

public class ServiceDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GeneriDb conexion = new ConexionMySQL("localhost", 3039);
		
		System.out.println(conexion.insertar(598));
		System.out.println(conexion.insertar(100));
		System.out.println(conexion.insertar(10));
		
	}

}

package org.generation.db;

public class ServiceDb {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean developing=true;
		GenericDb conexion;
		
		if(developing) {
			conexion= new ConexionMySQL("localhost",3039);	
		}else {
			conexion= new ConexionOracle("10.0.2.50",5090,"Permitido");
		}
		
		
		System.out.println(conexion.insertar(528));
		System.out.println(conexion.insertar(10));
		System.out.println(conexion.insertar(100));
		System.out.println(conexion.actualizar());
		System.out.println(conexion.eliminar());
		

	}

}

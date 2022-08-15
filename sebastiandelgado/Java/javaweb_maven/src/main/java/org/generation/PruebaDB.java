package org.generation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class PruebaDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Asignamos la dirección de la base de datos IP/NomBaseDatos/otras cosas
		String url ="jdbc:mysql://192.168.64.2:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
		try {
			//HAcemos la conexión con la clase conexión, con url, usuario y contraseña
			Connection conexion = DriverManager.getConnection(url,"root", "generation");
			Statement instruccion = (Statement) conexion.createStatement();
//			String query = "SELECT * FROM paleta;";
//			String query = "SELECT * FROM paleta WHERE nombre LIKE '%fre%';";
			String query = "CALL dorime;";
			ResultSet resultado = instruccion.executeQuery(query);
			
			while(resultado.next()) {
				//Lo mando a llamar con el número de columna
//				System.out.print("nombre: "+ resultado.getInt(1));
//				System.out.println("\t nombre: "+ resultado.getString(2));
				//O puedo mandarlo por nombre de columna
				System.out.print("nombre: "+ resultado.getInt("idpaleta"));
				System.out.println("\t nombre: "+ resultado.getString("nombre"));
			}
			//Es buena práctica cerrar la conexión así como se abre, se cierra
			resultado.close();
			instruccion.close();
			conexion.close();
			
		} catch (SQLException e) {
			System.out.println(e);
		}
	}

}

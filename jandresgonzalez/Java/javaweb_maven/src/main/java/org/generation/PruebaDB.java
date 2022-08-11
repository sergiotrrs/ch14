package org.generation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.*;

public class PruebaDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Esta es nuestra conexión 
		String url = "jdbc:mysql://localhost:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
		//javadatabaseconnecion/mysql/iplocal/puerto/basededatos/?SSL=false/zonahorariausar,yquéZonahoraria/llavepública
		
		try {
			//Se crea la conexión
			//Connection conexion = DriverManager.getConnection(url, "root", "generation");
			//pero suele no usarse el root para esto para evitar errores
			Connection conexion = DriverManager.getConnection(url, "bicho", "siu");
			//Se crea un statement con la instrucción del objeto creado
			Statement instruccion = conexion.createStatement();
			//Se crea una query de SQL
			String query = "CALL dorime()";
			//Esto ejecuta líneas de la query
			ResultSet resultado;
			resultado = instruccion.executeQuery(query);
			//Esto hace que se siga ejecuentado mientras siga habiendo líneas
			//del query
			while (resultado.next()) {
				/* OBTENIENDO INFO CON INDEX DE LAS COLUMNAS
				System.out.print("ID: " + resultado.getInt(1));
				System.out.println("\tNombre: " + resultado.getString(2));
				index de las columnas*/
				/*OBTENIENDO INFO CON NOMBRE DE COLUMNAS
				System.out.print("ID: " + resultado.getInt("idpaleta"));
				System.out.println("\tNombre: " + resultado.getString("nombre"));
				*/
				System.out.print("Nombre: " + resultado.getString("nombre"));
				System.out.print("\tSabor: " + resultado.getString("sabor"));
				System.out.println("\tPrecio: $" + resultado.getDouble("precio") + "MXN");
				
			}
			/*------
			 * La mejor práctica es cerrar las conexiones
			 * al dejar de usarlas en el ritmo inverso en el que
			 * se realizó, primero por lo de atrás hasta el principio
			 * ---------------- */
			resultado.close();
			instruccion.close();
			conexion.close();
		
		}
		catch(SQLException e) {
			System.out.println(" Error: " + e);			
		}

	}

}

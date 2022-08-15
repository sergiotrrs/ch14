package org.generation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class PruebaDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Conexión antes de Springboot
		String url = "jdbc:mysql://localhost:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";

		//jdbc = java-data-base-conection:lenguaje/localhosto/puerto-de-la-base-de-datos/base-de-datos ? otros parametros
		
		/* useSSL = Security Socket Layer
		 * useTimezone
		 * Timezone
		 * */
		try {
		Connection conexion = DriverManager.getConnection(url, "root", "generation"); //Se le dió acceso al usuari root.
		//Se debe importar Connection
		//Lanza una excepcion: dos soluciones en la firma o bloque try-catch
		
		Statement instruccion = conexion.createStatement();
		//Se debe importar java.sql.Statement
		
		//Se hace la query
		//String query = "SELECT * FROM paleta;";
		String query = "SELECT * FROM paleta WHERE nombre LIKE '%ti%' ";
		String query2 = "CALL dorime";
		
		//Se ejecuta con:
		//ResultSet resultado = instruccion.executeQuery(query);
		//Y la el resultado en la variable resultado del tipo coleccion
		ResultSet resultado = instruccion.executeQuery(query);
		ResultSet resultado2 = instruccion.executeQuery(query2);
		
		//iterar coleccion
		while(resultado.next()) {
			//Itera línea por línea
			//Next regresa
			
			//Con indice de columna
			/*System.out.print("id: "+resultado.getInt(1)); //La columna con índice 1 la regresa como int
			System.out.println("\t nombre: "+resultado.getString(2));*/
			
			//Con nombre de columna 
			System.out.print("id: "+resultado.getInt("idpaleta")); //La columna con índice 1 la regresa como int
			System.out.println("\t nombre: "+resultado.getString("nombre"));
			
		}
		
		while(resultado2.next()) {
			System.out.println("paleta: "+resultado2.getInt("idpaleta"));
			System.out.println("\t nombre: "+resultado2.getString("nombre"));
	
			
		}
		
		//Se debe cerrar la conexion por buenas practicas
		resultado.close();
		instruccion.close();
		conexion.close();
		
		} catch (SQLException e) { //Se debe importar java.sql.SQLException;
			System.out.println(e);
		}
		
		
	}

}

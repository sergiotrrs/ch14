package org.generation.app.model;

import java.sql.Date;

import lombok.Data;

@Data //Se importa desde Lombot
public class AdminUser {
	
	private Long id;
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String lastLogin;
	private Date created_at;
	private Date modified_at;
	private Long role_id;
	
	

}

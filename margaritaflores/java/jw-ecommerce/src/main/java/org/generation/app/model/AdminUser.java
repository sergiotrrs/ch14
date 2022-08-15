package org.generation.app.model;

import java.sql.Date;


public class AdminUser {

		private Long id;
		private String username;
		private String password;
		private String firstName;
		private String lastName;
		private Date lastLogin;
		private Date create_at;
		private Date modified_at;
		private Long rol_id;
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public Date getLastLogin() {
			return lastLogin;
		}
		public void setLastLogin(Date lastLogin) {
			this.lastLogin = lastLogin;
		}
		public Date getCreate_at() {
			return create_at;
		}
		public void setCreate_at(Date create_at) {
			this.create_at = create_at;
		}
		public Date getModified_at() {
			return modified_at;
		}
		public void setModified_at(Date modified_at) {
			this.modified_at = modified_at;
		}
		public Long getRol_id() {
			return rol_id;
		}
		public void setRol_id(Long rol_id) {
			this.rol_id = rol_id;
		}
		
		
}


package org.generation.app.model;

import java.sql.Date;
import java.util.Objects;

public class AdminUser {
	private Long id;
	private String username;
	private String password;
	private String first_name;
	private String last_name;
	private Date last_login;
	private Date created_at;
	private Date modified_at;
	private Long role_id;
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the first_name
	 */
	public String getFirst_name() {
		return first_name;
	}
	/**
	 * @param first_name the first_name to set
	 */
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	/**
	 * @return the last_name
	 */
	public String getLast_name() {
		return last_name;
	}
	/**
	 * @param last_name the last_name to set
	 */
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	/**
	 * @return the last_login
	 */
	public Date getLast_login() {
		return last_login;
	}
	/**
	 * @param last_login the last_login to set
	 */
	public void setLast_login(Date last_login) {
		this.last_login = last_login;
	}
	/**
	 * @return the created_at
	 */
	public Date getCreated_at() {
		return created_at;
	}
	/**
	 * @param created_at the created_at to set
	 */
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	/**
	 * @return the modified_at
	 */
	public Date getModified_at() {
		return modified_at;
	}
	/**
	 * @param modified_at the modified_at to set
	 */
	public void setModified_at(Date modified_at) {
		this.modified_at = modified_at;
	}
	/**
	 * @return the role_id
	 */
	public Long getRole_id() {
		return role_id;
	}
	/**
	 * @param role_id the role_id to set
	 */
	public void setRole_id(Long role_id) {
		this.role_id = role_id;
	}
	/**
	 * 
	 */
	public AdminUser() {
		super();
	}
	/**
	 * @param id
	 * @param username
	 * @param password
	 * @param first_name
	 * @param last_name
	 * @param last_login
	 * @param created_at
	 * @param modified_at
	 * @param role_id
	 */
	public AdminUser(Long id, String username, String password, String first_name, String last_name, Date last_login,
			Date created_at, Date modified_at, Long role_id) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.last_login = last_login;
		this.created_at = created_at;
		this.modified_at = modified_at;
		this.role_id = role_id;
	}
	@Override
	public String toString() {
		return "AdminUser [id=" + id + ", username=" + username + ", password=" + password + ", first_name="
				+ first_name + ", last_name=" + last_name + ", last_login=" + last_login + ", created_at=" + created_at
				+ ", modified_at=" + modified_at + ", role_id=" + role_id + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(created_at, first_name, id, last_login, last_name, modified_at, password, role_id,
				username);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AdminUser other = (AdminUser) obj;
		return Objects.equals(created_at, other.created_at) && Objects.equals(first_name, other.first_name)
				&& Objects.equals(id, other.id) && Objects.equals(last_login, other.last_login)
				&& Objects.equals(last_name, other.last_name) && Objects.equals(modified_at, other.modified_at)
				&& Objects.equals(password, other.password) && Objects.equals(role_id, other.role_id)
				&& Objects.equals(username, other.username);
	}
	
	
	
	
	

}

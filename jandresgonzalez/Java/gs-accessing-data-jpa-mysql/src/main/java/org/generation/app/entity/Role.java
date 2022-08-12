package org.generation.app.entity;

import javax.persistence.*;
import lombok.*;

@Data
@Entity
@Table
public class Role {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="role_id")
	private Long roleId;
	@Column(name="role_type")
	private String tipoRol;
	@Column(name="description")
	private String descripcion;
	/**
	 * @param roleId
	 * @param tipoRol
	 * @param descripcion
	 */
	public Role(Long roleId, String tipoRol, String descripcion) {
		super();
		this.roleId = roleId;
		this.tipoRol = tipoRol;
		this.descripcion = descripcion;
	}
	
	public Role() {}

	/**
	 * @return the roleId
	 */
	public Long getRoleId() {
		return roleId;
	}

	/**
	 * @param roleId the roleId to set
	 */
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	/**
	 * @return the tipoRol
	 */
	public String getTipoRol() {
		return tipoRol;
	}

	/**
	 * @param tipoRol the tipoRol to set
	 */
	public void setTipoRol(String tipoRol) {
		this.tipoRol = tipoRol;
	}

	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}

	/**
	 * @param descripcion the descripcion to set
	 */
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@Override
	public String toString() {
		return "Role [roleId=" + roleId + ", tipoRol=" + tipoRol + ", descripcion=" + descripcion + "]";
	}
	
	
}

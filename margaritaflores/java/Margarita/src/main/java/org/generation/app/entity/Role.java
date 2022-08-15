package org.generation.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role {

		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="role_id")
		private long role_id;
		@Column(name="role_type")
		private String roleType;
		@Column(name="description")
		private String description;
		public long getRole_id() {
			return role_id;
		}
		public void setRole_id(long role_id) {
			this.role_id = role_id;
		}
		public String getRoleType() {
			return roleType;
		}
		public void setRoleType(String roleType) {
			this.roleType = roleType;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
}

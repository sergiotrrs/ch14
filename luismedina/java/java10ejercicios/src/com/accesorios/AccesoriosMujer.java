package com.accesorios;

public class AccesoriosMujer {
	private String tacon;
	private int tallaTacon;
	private String vestido;
	private String tallaVestido;

	
	
	public AccesoriosMujer(String tacon, int tallaTacon, String vestido, String tallaVestido) {
		this.tacon = tacon;
		this.tallaTacon = tallaTacon;
		this.vestido = vestido;
		this.tallaVestido = tallaVestido;
	}



	public String getTacon() {
		return tacon;
	}



	public void setTacon(String tacon) {
		this.tacon = tacon;
	}



	public int getTallaTacon() {
		return tallaTacon;
	}



	public void setTallaTacon(int tallaTacon) {
		this.tallaTacon = tallaTacon;
	}



	public String getVestido() {
		return vestido;
	}



	public void setVestido(String vestido) {
		this.vestido = vestido;
	}



	public String getTallaVestido() {
		return tallaVestido;
	}



	public void setTallaVestido(String tallaVestido) {
		this.tallaVestido = tallaVestido;
	}
	
	
}

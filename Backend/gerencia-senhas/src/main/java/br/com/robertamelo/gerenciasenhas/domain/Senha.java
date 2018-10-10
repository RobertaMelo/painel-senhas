package br.com.robertamelo.gerenciasenhas.domain;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.robertamelo.gerenciasenhas.enums.TipoSenha;

@Entity
public class Senha implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String tipo;
	private boolean chamada;
	
	public Senha() {
		super();
	}
	
	public Senha(Long id, TipoSenha tipo, boolean chamada) {
		this.id = id;
		this.tipo = Objects.isNull(tipo) ? null : tipo.getIdentificador();
		this.chamada = chamada;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public TipoSenha getTipo() {
		return TipoSenha.toEnum(tipo);
	}
	
	public void setTipo(TipoSenha tipo) {
		this.tipo = tipo.getIdentificador();
	}
	
	public boolean isChamada() {
		return chamada;
	}
	
	public void setChamada(boolean chamada) {
		this.chamada = chamada;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Senha other = (Senha) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return tipo + id;
	}
	
}

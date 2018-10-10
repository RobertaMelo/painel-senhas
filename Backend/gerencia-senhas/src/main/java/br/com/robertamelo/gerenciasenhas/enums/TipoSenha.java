package br.com.robertamelo.gerenciasenhas.enums;

import java.util.Objects;

public enum TipoSenha {
	
	NORMAL("N"),
	PREFERENCIAL("P");
	
	private String identificador;
	
	private TipoSenha (String identificador) {
		this.identificador = identificador;
	}
	
	public String getIdentificador() {
		return identificador;
	}
	
	public static TipoSenha toEnum(String identificador) {
		if (Objects.isNull(identificador) || identificador.isEmpty()) {
			return null;
		}
		
		for (TipoSenha tipoSenha : TipoSenha.values()) {
			if (identificador.equals(tipoSenha.getIdentificador())) {
				return tipoSenha;
			}
		}
		
		throw new IllegalArgumentException("Identificador inválido: " + identificador);
	}
	
}

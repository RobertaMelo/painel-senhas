package br.com.robertamelo.gerenciasenhas.services;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.robertamelo.gerenciasenhas.domain.Senha;
import br.com.robertamelo.gerenciasenhas.enums.TipoSenha;
import br.com.robertamelo.gerenciasenhas.repositories.SenhaRepository;

@Service
public class SenhaService {
	
	private static Long ultimaSenhaChamada;
	private static Long senhaAtualChamada;
	
	@Autowired
	private SenhaRepository senhaRepository;
	
	public List<Senha> findAll() {
		return senhaRepository.findAll();
	}
	
	public Senha geraNovaSenhaNormal() {
		final Senha senhaNormal = new Senha(null, TipoSenha.NORMAL, false);
		return senhaRepository.save(senhaNormal);
	}
	
	public Senha geraNovaSenhaPreferencial() {
		final Senha senhaNormal = new Senha(null, TipoSenha.PREFERENCIAL, false);
		return senhaRepository.save(senhaNormal);
	}
	
	public Senha chamaProximaSenha() {
		Senha senha = senhaRepository.findFirstByChamadaFalseOrderByTipoDescIdAsc();
		if (Objects.isNull(senha)) {
			return senha;
		}
		
		senha.setChamada(true);
		senha = senhaRepository.save(senha);
		
		ultimaSenhaChamada = senhaAtualChamada;
		senhaAtualChamada = senha.getId();

		return senha;
	}
	
	public Senha getProximaSenhaAChamar() {
		final Senha senha = senhaRepository.findFirstByChamadaFalseOrderByTipoDescIdAsc();
		return Objects.nonNull(senha) ? senha : null;
	}
	
	public Senha getSenhaAtual() {
		if (Objects.isNull(senhaAtualChamada)) {
			return null;
		}
		
		final Optional<Senha> senha = senhaRepository.findById(senhaAtualChamada);
		return senha.isPresent() ? senha.get() : null;
	}
	
	public Senha getUltimaSenhaChamada() {
		if (Objects.isNull(ultimaSenhaChamada)) {
			return null;
		}
		
		final Optional<Senha> senha = senhaRepository.findById(ultimaSenhaChamada);
		return senha.isPresent() ? senha.get() : null;
	}
	
	public void printSenhas() {
		System.out.println("Última: " + getUltimaSenhaChamada() + " - Atual: " + getSenhaAtual() + " - Próxima: " + getProximaSenhaAChamar());
	}
	
	public void zeraSenhas() {
		senhaRepository.deleteAll();
	}
}

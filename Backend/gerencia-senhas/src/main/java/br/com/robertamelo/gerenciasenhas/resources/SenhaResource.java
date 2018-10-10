package br.com.robertamelo.gerenciasenhas.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.robertamelo.gerenciasenhas.domain.Senha;
import br.com.robertamelo.gerenciasenhas.services.SenhaService;

@RestController
@RequestMapping("/senhas")
public class SenhaResource {
	
	@Autowired
	private SenhaService senhaService;
	
	@GetMapping("/gera-nova-senha-normal")
	public ResponseEntity<Senha> novaSenhaNormal() {
		return ResponseEntity.ok(senhaService.geraNovaSenhaNormal());
	}
	
	@GetMapping("/gera-nova-senha-preferencial")
	public ResponseEntity<Senha> novaSenhaPreferencial() {
		return ResponseEntity.ok(senhaService.geraNovaSenhaPreferencial());
	}
	
	@GetMapping("/senha-anterior")
	public ResponseEntity<Senha> senhaAnterior() {
		return ResponseEntity.ok(senhaService.getUltimaSenhaChamada());
	}
	
	@GetMapping("/senha-atual")
	public ResponseEntity<Senha> senhaAtual() {
		return ResponseEntity.ok(senhaService.getSenhaAtual());
	}

	@GetMapping("/proxima-senha")
	public ResponseEntity<Senha> proximaSenha() {
		return ResponseEntity.ok(senhaService.getProximaSenhaAChamar());
	}
	
	@GetMapping("/chama-proxima-senha")
	public ResponseEntity<Senha> chamaProximaSenha() {
		return ResponseEntity.ok(senhaService.chamaProximaSenha());
	}
	
	@GetMapping("/zerar-senhas")
	public ResponseEntity<Void> zerarSenhas() {
		senhaService.zeraSenhas();
		return ResponseEntity.noContent().build();
	}
	
}

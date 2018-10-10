package br.com.robertamelo.gerenciasenhas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.robertamelo.gerenciasenhas.domain.Senha;

@Repository
public interface SenhaRepository extends JpaRepository<Senha, Long> {

	Senha findFirstByChamadaFalseOrderByTipoDescIdAsc();
	
}

package br.com.osf.repository;

import br.com.osf.model.Repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReposRepository extends JpaRepository<Repos, Long> {
	
}
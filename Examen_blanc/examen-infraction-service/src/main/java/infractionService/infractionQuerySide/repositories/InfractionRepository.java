package infractionService.infractionQuerySide.repositories;

import infractionService.infractionQuerySide.entities.Infraction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InfractionRepository extends JpaRepository<Infraction,String> {

}

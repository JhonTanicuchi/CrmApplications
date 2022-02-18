package CRM4RTONOCTURNOA.CRM.repository;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import CRM4RTONOCTURNOA.CRM.entity.Campania;

public interface CampaniaRepository extends CrudRepository<Campania, Long>{
    List<Campania> findAll();
}


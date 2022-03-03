package CRM4RTONOCTURNOA.CRM.repository;

import CRM4RTONOCTURNOA.CRM.entity.EtapaPersona;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EtapaPersonaRepository extends CrudRepository<EtapaPersona,Long> {
    List<EtapaPersona> findByEtapaId(Long etapaId);
}

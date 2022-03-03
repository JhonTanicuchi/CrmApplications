package CRM4RTONOCTURNOA.CRM.repository;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Etapa;

import java.util.List;

public interface EtapaRepository extends CrudRepository<Etapa, Long> {

    List<Etapa> findAll();


    List<Etapa> findBySeguimientoId(long idSeguimiento);

}

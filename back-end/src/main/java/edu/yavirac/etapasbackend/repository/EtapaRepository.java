package edu.yavirac.etapasbackend.repository;
import org.springframework.data.repository.CrudRepository;
import edu.yavirac.etapasbackend.entity.Etapa;
import java.util.List;

public interface EtapaRepository extends CrudRepository<Etapa, Long>{

    List<Etapa> findAll();
    
}

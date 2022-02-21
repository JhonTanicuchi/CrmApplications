package CRM4RTONOCTURNOA.CRM.repository;

import CRM4RTONOCTURNOA.CRM.entity.Persona;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonaRepository  extends CrudRepository<Persona,Long>{
    List<Persona> findAll();
}

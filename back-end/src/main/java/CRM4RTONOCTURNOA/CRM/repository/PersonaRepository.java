package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Persona;

public interface PersonaRepository  extends CrudRepository<Persona,Long>{
    List<Persona> findAll();
}

package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Actividad;

public interface ActividadRepository extends CrudRepository<Actividad, Long>{

 //se va necesitar una lista dela entidad actividad
    List<Actividad>findAll();
    
}

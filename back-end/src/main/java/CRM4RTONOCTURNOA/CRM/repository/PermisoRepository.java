package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Permiso;

public interface PermisoRepository extends CrudRepository<Permiso,Long> {
    List<Permiso> findAll();

}

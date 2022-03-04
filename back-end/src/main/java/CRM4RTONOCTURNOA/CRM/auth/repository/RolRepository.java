package CRM4RTONOCTURNOA.CRM.auth.repository;

import java.util.List;
import CRM4RTONOCTURNOA.CRM.auth.entity.Rol;
import org.springframework.data.repository.CrudRepository;

public interface RolRepository extends CrudRepository<Rol, Long> {

    List<Rol> findAll();
}

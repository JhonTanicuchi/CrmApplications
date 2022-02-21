package CRM4RTONOCTURNOA.CRM.repository;

 
import java.util.List;
 
import org.springframework.data.repository.CrudRepository;
 
import CRM4RTONOCTURNOA.CRM.entity.Rol;
 
public interface RolRepository extends CrudRepository<Rol, Long> {
    
    List<Rol> findAll();
}


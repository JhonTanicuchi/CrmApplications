package CRM4RTONOCTURNOA.CRM.auth.repository;

import java.util.List;
import CRM4RTONOCTURNOA.CRM.auth.entity.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    List<Usuario> findAll();

    Usuario findByUsername(String username);
}
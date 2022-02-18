package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    List<Usuario> findAll();
    
}

package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Categoria;

public interface CategoriaRepository extends CrudRepository <Categoria, Long> {

    List<Categoria> findAll();
    
}

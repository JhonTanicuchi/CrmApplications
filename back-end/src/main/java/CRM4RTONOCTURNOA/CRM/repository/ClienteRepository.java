package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Cliente;

public interface ClienteRepository  extends CrudRepository<Cliente, Long>{
    List<Cliente>findAll();

    List<Cliente>findByNombreLikeIgnoreCase(String termino);
}

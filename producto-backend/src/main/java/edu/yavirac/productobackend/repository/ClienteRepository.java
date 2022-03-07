package edu.yavirac.productobackend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import edu.yavirac.productobackend.entity.Cliente;

public interface ClienteRepository extends CrudRepository <Cliente ,Long> {
    
    List<Cliente> findByNombreLikeIgnoreCase(String termino);
}

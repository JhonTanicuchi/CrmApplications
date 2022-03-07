package edu.yavirac.productobackend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import edu.yavirac.productobackend.entity.Producto;

public interface ProductoRepository extends CrudRepository<Producto,Long> {
    
    List<Producto> findAll();
    List<Producto> findByNombreLikeIgnoreCase(String termino);
  
}

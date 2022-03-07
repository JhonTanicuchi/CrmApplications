package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.entity.Producto;

public interface ProductoRepository extends CrudRepository<Producto, Long>{

    List<Producto>findByNombreLikeIgnoreCase(String termino);
}
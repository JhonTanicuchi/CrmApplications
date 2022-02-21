package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import CRM4RTONOCTURNOA.CRM.entity.Cotizacion;

public interface CotizacionRepository extends CrudRepository<Cotizacion,Long> {
    
    List<Cotizacion> findAll();

}


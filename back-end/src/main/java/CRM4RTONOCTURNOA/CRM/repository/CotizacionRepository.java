package eduyavirac.cotizacionbackend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import eduyavirac.cotizacionbackend.entity.Cotizacion;

public interface CotizacionRepository extends CrudRepository<Cotizacion,Long> {
    
    List<Cotizacion> findAll();

}


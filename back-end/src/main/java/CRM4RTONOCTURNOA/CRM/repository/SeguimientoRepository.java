package CRM4RTONOCTURNOA.CRM.repository;

import CRM4RTONOCTURNOA.CRM.entity.Seguimiento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SeguimientoRepository extends CrudRepository<Seguimiento, Long> {
    List<Seguimiento> findAll();
    List<Seguimiento> findSeguimientoByEstado(  Boolean estado);
}

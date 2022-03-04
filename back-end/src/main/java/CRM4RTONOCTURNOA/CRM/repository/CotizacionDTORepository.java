package CRM4RTONOCTURNOA.CRM.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CRM4RTONOCTURNOA.CRM.dto.CotizacionDTO;

public interface CotizacionDTORepository  extends CrudRepository <CotizacionDTO, Long>{

    List<CotizacionDTO> findByCotizacionId(long id);
    
}

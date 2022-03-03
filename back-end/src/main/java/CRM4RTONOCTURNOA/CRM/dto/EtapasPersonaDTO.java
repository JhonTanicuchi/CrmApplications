package CRM4RTONOCTURNOA.CRM.dto;

import CRM4RTONOCTURNOA.CRM.entity.EtapaPersona;
import CRM4RTONOCTURNOA.CRM.entity.Persona;
import lombok.Data;

import java.util.List;

@Data
public class EtapasPersonaDTO {
    private Long etapaId;
    private String nombreEtapa;
    List<EtapaPersonaDTO> etapaPersonaDTO;
}

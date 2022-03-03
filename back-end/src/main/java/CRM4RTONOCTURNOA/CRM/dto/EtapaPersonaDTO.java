package CRM4RTONOCTURNOA.CRM.dto;

import CRM4RTONOCTURNOA.CRM.entity.Persona;
import lombok.Data;

import java.util.List;

@Data
public class EtapaPersonaDTO {
    private Long etapaId;
    private String nombreEtapa;
    List<Persona> personas;
}

package CRM4RTONOCTURNOA.CRM.dto;

import lombok.Data;

@Data
public class EtapaPersonaDTO {
    private Long etapaPersonaId;
    private Long etapaId;
    private String nombreEtapa;
    private Long personaId;
    private String nombreCompleto;
    private String observacion;
}

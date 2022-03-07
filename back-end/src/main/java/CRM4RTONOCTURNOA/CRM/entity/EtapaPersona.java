package CRM4RTONOCTURNOA.CRM.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("seguimientos\".\"etapa_persona")
public class EtapaPersona {

    @Id
    @Column("etapa_persona_id")
    private Long etapaPersonaId;
    @Column("etapa_id")
    private Long etapaId;
    @Column("persona_id")
    private Long personaId;
    private String observacion;
}

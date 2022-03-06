package CRM4RTONOCTURNOA.CRM.auth.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("administracion\".\"usuarios_personas")
public class UsuarioPersona {

    @Id
    @Column("usuario_persona_id")
    private long usuarioPersonaId;
    @Column("usuario_id")
    private long usuarioId;
    @Column("persona_id")
    private long personaId;

}

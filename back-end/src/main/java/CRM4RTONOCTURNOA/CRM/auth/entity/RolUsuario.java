package CRM4RTONOCTURNOA.CRM.auth.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("administracion\".\"roles_usuarios")
public class RolUsuario {

    @Id
    @Column("rol_usuario_id")
    private long rolUsuarioId;
    @Column("rol_id")
    private long rolId;
    @Column("usuario_id")
    private long usuarioId;

}

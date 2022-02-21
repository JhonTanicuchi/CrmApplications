package CRM4RTONOCTURNOA.CRM.entity;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("administracion\".\"usuario")
public class Usuario {

    @Id
    @Column("usuario_id")
    private long usuarioId;

    private String username;

    private String password;

    @Column("roll_id")
    private long rollId;

    @Column("permiso_id")
    private long permisoId;

    @Column("empleado_id")
    private long empleadoId;

    private boolean estado;

    @MappedCollection(idColumn = "usuario_id")
    Set<Permiso> permiso = new HashSet<>();

}


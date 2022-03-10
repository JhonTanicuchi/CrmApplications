package CRM4RTONOCTURNOA.CRM.auth.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("administracion\".\"permisos_roles")
public class PermisoRol {

    @Id
    @Column("permiso_rol_id")
    private long permisoRolId;
    @Column("permiso_id")
    private long permisoId;
    @Column("rol_id")
    private long rolId;

}

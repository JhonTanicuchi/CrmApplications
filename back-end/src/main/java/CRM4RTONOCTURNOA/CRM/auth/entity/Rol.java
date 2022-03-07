package CRM4RTONOCTURNOA.CRM.auth.entity;

import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("administracion\".\"roles")
public class Rol {

    @Id
    @Column("rol_id")
    private long rolId;
    private String nombre;
    @MappedCollection(idColumn = "rol_id")
    private Set<PermisoRol> permisos = new HashSet<>();

}


package CRM4RTONOCTURNOA.CRM.auth.entity;

import java.sql.Timestamp;

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
    @Column("fecha_creacion")
    private String fechaCreacion;
    @Column("fecha_modificacion")
    private String fechaModificacion;
    private Boolean estado;
    @MappedCollection(idColumn = "rol_id")
    private Set<PermisoRol> permisos = new HashSet<>();

}


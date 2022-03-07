package CRM4RTONOCTURNOA.CRM.auth.entity;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("administracion\".\"permisos")
public class Permiso {
    @Id
    @Column("permiso_id")
    private long permisoId;
    private String nombre;
    @Column("fecha_creacion")
    private Timestamp fechaCreacion;
    @Column("fecha_modificacion")
    private Timestamp fechaModicicacion;
    private Boolean estado;
}

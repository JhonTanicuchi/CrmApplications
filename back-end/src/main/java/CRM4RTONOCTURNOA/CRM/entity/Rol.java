package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("roles")
public class Rol {

    @Id
    @Column("rol_id")
    private long rolId;

    @Column("nombre_rol")
    private String nombreRol;

    @Column("tipo_rol")
    private String tipoRol;
    private Boolean estado;

}

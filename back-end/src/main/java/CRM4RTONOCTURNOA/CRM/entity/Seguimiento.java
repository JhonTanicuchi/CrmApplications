package CRM4RTONOCTURNOA.CRM.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Date;

@Data
@Table("seguimientos\".\"seguimiento")
public class Seguimiento {
    @Id
    @Column("id_seguimiento")
    private Long seguimientoId;
    private String nombre;
    private String descripcion;
    @Column("fecha_creacion")
    private Date fechaCreacion;
    @Column("creado_por")
    private String creadoPor;
    private Boolean estado;
}

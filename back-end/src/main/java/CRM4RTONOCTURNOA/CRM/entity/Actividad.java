package CRM4RTONOCTURNOA.CRM.entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;
@Data
@Table("seguimientos\".\"actividades") //nombre de la tabla en la BD
public class Actividad {

    @Id
    @Column("actividad_id") //Nombre de la columna en BD
    private long actividadId;
    private String nombre; 
    private String descripcion;
    private Boolean estado;
    
}

package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;  
import org.springframework.data.relational.core.mapping.Column;  
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data; 
@Data
@Table("seguimientos\".\"etapas")

public class Etapa {
    @Column("etapas_id")
    @Id
    private long etapasId;  
    private String  nombre; 
    private String  descripcion;
    private Boolean  estado;
    
}

package edu.yavirac.etapasbackend.entity;
import org.springframework.data.annotation.Id;  
import org.springframework.data.relational.core.mapping.Column;  
import org.springframework.data.relational.core.mapping.Table;   

import lombok.Data;  

@Data  
@Table("seguimientos\".\"etapas")

public class Etapa {
    @Id
    @Column("etapas_id")  
    
    private long etapasId;  
    private String  nombre; 
    private String  descripcion;
    private Boolean  estado;  
}

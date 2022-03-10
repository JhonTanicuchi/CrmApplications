package CRM4RTONOCTURNOA.CRM.entity;
import org.springframework.data.annotation.Id;  
import org.springframework.data.relational.core.mapping.Column;  
import org.springframework.data.relational.core.mapping.Table;   

import lombok.Data;  

@Data  //nos va a permitir al momento de ejecutar reconocer todos los campos de forma automatica permitiendo que el codigo se vea corto y no largo
@Table("seguimientos\".\"etapas")

public class Etapa {
    @Column("etapas_id")  //mapiamos para que reconozca con la base datos
    @Id
    private long etapasId;  //long tipo de dato definitivo pk en java que crea
    private String  nombre;
    private String  descripcion;
    private Boolean  estado;
    @Column("id_seguimiento")
    private long  seguimientoId;

}

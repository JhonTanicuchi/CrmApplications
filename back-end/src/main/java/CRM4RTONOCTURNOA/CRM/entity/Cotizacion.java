package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("cotizacion\".\"cotizacion")

public class Cotizacion {
    
    @Id
    @Column("id_cotizacion")
    private long idcotizacion;
    @Column("id_cliente")
    private long idcliente;
    private String nombre;
    private String identificacion;
    private String direccion;
    private String telefono;
    private String observacion;
    private String fecha;
}

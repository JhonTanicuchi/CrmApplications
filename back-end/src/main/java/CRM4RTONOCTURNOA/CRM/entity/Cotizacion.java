package CRM4RTONOCTURNOA.CRM.entity;




import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;



@Data
@Table("reporte\".\"cotizaciones")
public class Cotizacion {

    @Id
    @Column("cotizacion_id")
    private long cotizacionId;

    private String nro;

    private Timestamp fecha;

    @Column("cliente_id")
    private long clienteId;

    private String observacion;

    @MappedCollection(idColumn = "cotizacion_id")
    Set<DetalleCotizacion> detalleCotizacion = new HashSet<>();

    
}

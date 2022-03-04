package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("reporte\".\"detalles_cotizacion")
public class DetalleCotizacion {

    @Id
    @Column("detalle_cotizacion_id")
    private long detalleCotizacionId;

    @Column("cotizacion_id")
    private long cotizacionId;

    @Column("producto_id")
    private long productoId;    

    private Double cantidad;
    private Double precio;

}

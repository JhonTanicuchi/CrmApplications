package edu.yavirac.productobackend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("Cotizacion\".\"detalles_cotisacion")
public class DetalleCotisacion {
    @Id
    @Column("detalle_cotisacion_id")
    private long detalleCotisacionId;

    @Column("cotisacion_id")
    private long cotisacionId;

    @Column("produto_id")
    private long produtoId;


    private Double cantidad;
    private Double precio;
 
}

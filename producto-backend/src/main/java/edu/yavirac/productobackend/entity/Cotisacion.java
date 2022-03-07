package edu.yavirac.productobackend.entity;


import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("Cotizacion\".\"cotisaciones")
public class Cotisacion {
    @Id
    @Column("cotisacion_id")
    private long cotisacionId;
    private String nro;
    private LocalTime fecha;

    @Column("cliente_id")
    private long clienteId;

    private String observacion;



    @MappedCollection(idColumn = "cotisacion_id")
    Set<DetalleCotisacion> detalleCotisacion= new HashSet<>();
    
}

package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("reporte\".\"productos")
public class Producto {
    
    @Id
    @Column("producto_id")
    private long productoId;
    private String nombre;
    private Double precio;
    @Column("categoria_id")
    private long categoriaId;
}

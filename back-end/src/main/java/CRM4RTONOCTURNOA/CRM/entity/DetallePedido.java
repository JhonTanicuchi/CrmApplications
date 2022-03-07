package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("pedidos\".\"detalles_pedido")
public class DetallePedido {

    @Id
    @Column("detalle_pedido_id")
    private long detallePedidoId;
    @Column("pedido_id")
    private long pedidoId;
    @Column("producto_id")
    private long productoId;
    private Double cantidad;
    private Double precio;
    
}

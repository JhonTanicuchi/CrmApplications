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
@Table("pedidos\".\"pedidos")
public class Pedido {

    @Id
    @Column("pedido_id")
    private long pedidoId;
    private String nro;
    private Timestamp fecha;
    @Column("cliente_id")
    private long clienteId;
    private String observacion;
    
    //Raiz
   @MappedCollection(idColumn = "pedido_id")
    Set<DetallePedido> detallePedido = new HashSet<>();
}

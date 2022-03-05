package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import lombok.Data;

@Data
@Table("public\".\"clientes")
public class Cliente{

    @Id
    @Column("cliente_id")
    private long clienteId;
    private String nombre;
    private String identificacion;
}
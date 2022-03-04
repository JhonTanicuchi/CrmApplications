package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("categorias")
public class Categoria {

    @Id
    @Column("categoria_id")
    private long categoriaId;
    private String nombre;
    
}


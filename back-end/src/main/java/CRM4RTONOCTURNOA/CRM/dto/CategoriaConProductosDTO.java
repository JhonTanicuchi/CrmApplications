package CRM4RTONOCTURNOA.CRM.dto;

import java.util.List;

import CRM4RTONOCTURNOA.CRM.entity.Producto;
import lombok.Data;

@Data
public class CategoriaConProductosDTO {
    

    private long categoriaId;
    private String nombre;
    List<Producto> productos;

}

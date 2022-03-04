package CRM4RTONOCTURNOA.CRM.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CRM4RTONOCTURNOA.CRM.dto.CategoriaConProductosDTO;
import CRM4RTONOCTURNOA.CRM.entity.Categoria;
import CRM4RTONOCTURNOA.CRM.service.CategoriaService;
import CRM4RTONOCTURNOA.CRM.service.ProductoService;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/categoria")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;
    @Autowired
    ProductoService productoService;
    
    @GetMapping("/categoriasConProductos")
    public List<CategoriaConProductosDTO> gCategoriaConProductosDTOs()
    {
       
        List<CategoriaConProductosDTO> categoriasConProductosDTOs = new ArrayList<>();
        
        List<Categoria> categorias = categoriaService.findAll();

        

        for (Categoria categoriaActual : categorias)
        {
            CategoriaConProductosDTO categoriaConProducto = new CategoriaConProductosDTO();
            categoriaConProducto.setNombre(categoriaActual.getNombre());
            categoriaConProducto.setCategoriaId(categoriaActual.getCategoriaId());
            categoriaConProducto.setProductos(productoService.findByCategoriaId(categoriaActual.getCategoriaId()));
            categoriasConProductosDTOs.add(categoriaConProducto);
        }
        

        return categoriasConProductosDTOs;

    }
    
}

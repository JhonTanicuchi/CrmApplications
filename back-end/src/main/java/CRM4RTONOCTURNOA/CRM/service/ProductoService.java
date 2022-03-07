package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import CRM4RTONOCTURNOA.CRM.entity.Producto;
import CRM4RTONOCTURNOA.CRM.repository.ProductoRepository;

@Service
public class ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    public List<Producto>findByName(String termino)
    {
        return productoRepository.findByNombreLikeIgnoreCase(termino);
    }
    
}
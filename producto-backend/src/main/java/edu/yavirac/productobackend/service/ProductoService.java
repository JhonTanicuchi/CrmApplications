package edu.yavirac.productobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.yavirac.productobackend.entity.Producto;
import edu.yavirac.productobackend.repository.ProductoRepository;

@Service
public class ProductoService {
    @Autowired
    ProductoRepository productoRepository;

    // create y update
    public Producto save(Producto producto) {
        return productoRepository.save(producto);
    }
    // read

    public Producto finById(Long id) {
        return productoRepository.findById(id).get();
    }

    // delete
    public void deleteById(Long id) {
        productoRepository.deleteById(id);
    }

    // product all
    public List<Producto> findAll() {

        return productoRepository.findAll();
    }

    public List<Producto> FindName(String termino){

        return productoRepository.findByNombreLikeIgnoreCase(termino);
    }
    


}

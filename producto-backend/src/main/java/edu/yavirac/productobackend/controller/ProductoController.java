package edu.yavirac.productobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import edu.yavirac.productobackend.entity.Producto;
import edu.yavirac.productobackend.service.ProductoService;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/producto")
public class ProductoController {

    @Autowired
    ProductoService productoService;

    // create
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Producto save(@RequestBody Producto producto) {
        
        return productoService.save(producto);
    }

    // Read
    @GetMapping("/{id}")

    public Producto frindById(@PathVariable Long id) {
        return productoService.finById(id);
    }
    // update

    @PutMapping("/update")
    public Producto update(@RequestBody Producto producto) {
   
        return productoService.save(producto);
    }

    // delete

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        productoService.deleteById(id);
    }
    @GetMapping("/findAll")
    public List<Producto> findAll(){
        return productoService.findAll();
    }

    //

   @GetMapping("/findByName/{termino}")
    public List<Producto> findByName(@PathVariable String termino){
        return productoService.FindName("%"+termino+"%");
    }

}

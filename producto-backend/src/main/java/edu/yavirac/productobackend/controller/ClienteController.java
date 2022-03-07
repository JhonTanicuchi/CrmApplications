package edu.yavirac.productobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.yavirac.productobackend.entity.Cliente;
import edu.yavirac.productobackend.service.ClienteService;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/cliente")
public class ClienteController {
    
    @Autowired
    ClienteService clienteService;

    @GetMapping("/findByName/{termino}")
    public List<Cliente> findByName(@PathVariable String termino){
return clienteService.findName("%"+termino+"%");
    }
}

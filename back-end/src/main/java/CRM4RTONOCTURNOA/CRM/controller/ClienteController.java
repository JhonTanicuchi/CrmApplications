package CRM4RTONOCTURNOA.CRM.controller;

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

import CRM4RTONOCTURNOA.CRM.entity.Cliente;
import CRM4RTONOCTURNOA.CRM.service.ClienteService;


@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/cliente")
public class ClienteController {
    
    @Autowired
    ClienteService clienteService;

    //Create
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente save(@RequestBody Cliente cliente)
    {
        System.out.println("Reciviendo save");
        return clienteService.save(cliente);
    }
    //Read
    @GetMapping("/{id}")
    public Cliente findById(@PathVariable Long id)
    {
        return clienteService.findById(id);
    }
    //Update
    @PutMapping("/update")

    public Cliente update(@RequestBody Cliente cliente)
    {
        return clienteService.save(cliente);
    }
    //Delete
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        clienteService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Cliente>findAll()
    {
        return clienteService.findAll();
    }

    @GetMapping("/findByName/{termino}")
    public List<Cliente> findByName(@PathVariable String termino)
    {
        return clienteService.findByName("%"+termino+"%");
    }
}
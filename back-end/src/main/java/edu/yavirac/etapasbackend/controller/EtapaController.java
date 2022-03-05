package edu.yavirac.etapasbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;


import edu.yavirac.etapasbackend.entity.Etapa;
import edu.yavirac.etapasbackend.service.EtapaService;

@RestController
@CrossOrigin({"http://localhost:4200"})  
@RequestMapping("/api/etapa")
public class EtapaController {

    @Autowired
    EtapaService etapaService;

    //Create y update
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Etapa save(@RequestBody Etapa etapa)
    {
        System.out.println("recibiendo save");
        return etapaService.save(etapa);

    }
    //Read  
    @GetMapping("/{id}")
    public Etapa findById(@PathVariable Long id)  
    {
        return etapaService.findByid(id);   
    }
    //Update
    @PutMapping("/update")  
    public Etapa update(@RequestBody Etapa etapa)
    {
        return etapaService.save(etapa);
    }
    //Delete
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        etapaService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Etapa> findAll()
    {
        return etapaService.findAll();  
    }
    
}

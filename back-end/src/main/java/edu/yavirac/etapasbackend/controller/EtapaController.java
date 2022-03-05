package edu.yavirac.etapasbackend.controller;

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

import edu.yavirac.etapasbackend.entity.Etapa;
import edu.yavirac.etapasbackend.service.EtapaService;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("/api/etapa")

public class EtapaController {

    @Autowired
    EtapaService etapaService;

    // Create
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Etapa save(@RequestBody Etapa cotizacion) {
        // System.out.println("Recibe save");
        return etapaService.save(cotizacion);
    }

    // Read
    @GetMapping("/{id}")
    public Etapa findById(@PathVariable Long id) {
        return etapaService.findById(id);
    }

    // update
    @PutMapping("/update")
    public Etapa update(@RequestBody Etapa cotizacion) {
        return etapaService.save(cotizacion);
    }

    // delete
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        etapaService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Etapa> findAll() {
        return etapaService.findAll();
    }
}
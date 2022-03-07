package edu.yavirac.productobackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.yavirac.productobackend.entity.Cotisacion;
import edu.yavirac.productobackend.service.CotisacionService;

@RestController
@RequestMapping("/api/cotisacion")
@CrossOrigin({"http://localhost:4200"})
public class CotisacionController {

    @Autowired
    CotisacionService cotisacionService;

    @PostMapping("/save")
    private Cotisacion save(@RequestBody Cotisacion cotisacion){
        return cotisacionService.save(cotisacion);
    }
    
}

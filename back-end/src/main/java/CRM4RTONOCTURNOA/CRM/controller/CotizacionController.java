package CRM4RTONOCTURNOA.CRM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
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

import CRM4RTONOCTURNOA.CRM.entity.Cotizacion;
import CRM4RTONOCTURNOA.CRM.service.CotizacionService;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/cotizacion" )

public class CotizacionController {
    
    @Autowired
    CotizacionService cotizacionService;

    //Create
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cotizacion save(@RequestBody Cotizacion cotizacion)
    {
        //System.out.println("Recibe save");
        return cotizacionService.save(cotizacion);
    }

    //Read 
    @GetMapping("/{id}")
    public Cotizacion findById(@PathVariable Long id )
    {
        return cotizacionService.findById(id);
    }

    //update
    @PutMapping("/update")
    public Cotizacion update(@RequestBody Cotizacion cotizacion)
    {
        return cotizacionService.save(cotizacion);
    }

    //delete
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        cotizacionService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Cotizacion> findAll()
    {
        return cotizacionService.findAll();
    }
}

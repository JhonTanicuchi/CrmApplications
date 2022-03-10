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


import CRM4RTONOCTURNOA.CRM.entity.Campania;
import CRM4RTONOCTURNOA.CRM.service.CampaniaService;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/campania")
public class CampaniaController {
    @Autowired
    CampaniaService campaniaService;

    @PreAuthorize("hasAuthority('crear_campaña')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Campania save(@RequestBody Campania cliente) {
        return campaniaService.save(cliente);
        
    }
    //Read
    @PreAuthorize("hasAuthority('leer_campaña')")
    @GetMapping("/{id}")
    public Campania findById(@PathVariable Long id){
        return campaniaService.findById(id);
    }
    //UpDate
    @PreAuthorize("hasAuthority('actualizar_campaña')")
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public Campania update(@RequestBody Campania cliente) {
       return campaniaService.save(cliente);
    }
    //Delete   
    @PreAuthorize("hasAuthority('eliminar_campaña')")
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        campaniaService.deleteById(id);
    }

    @PreAuthorize("hasAuthority('leer_campaña')")
    @GetMapping("/findAll")
    public List<Campania> findAll(){
        return campaniaService.findAll();
    }
    
}

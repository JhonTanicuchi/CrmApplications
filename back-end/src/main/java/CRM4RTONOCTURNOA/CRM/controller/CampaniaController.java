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

import CRM4RTONOCTURNOA.CRM.service.CampaniaService;
import CRM4RTONOCTURNOA.CRM.entity.Campania;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/campania")
public class CampaniaController {
    @Autowired
    CampaniaService campaniaService;

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Campania save(@RequestBody Campania cliente) {
        return campaniaService.save(cliente);
        
    }
    //Read
    @GetMapping("/{id}")
    public Campania findById(@PathVariable Long id){
        return campaniaService.findById(id);
    }
    //UpDate
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public Campania update(@RequestBody Campania cliente) {
       return campaniaService.save(cliente);
    }
    //Delete    
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        campaniaService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Campania> findAll(){
        return campaniaService.findAll();
    }
    
}


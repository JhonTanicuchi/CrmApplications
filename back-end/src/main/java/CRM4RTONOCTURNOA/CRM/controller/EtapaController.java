package CRM4RTONOCTURNOA.CRM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CRM4RTONOCTURNOA.CRM.entity.Etapa;
import CRM4RTONOCTURNOA.CRM.service.EtapaService;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@CrossOrigin({"http://localhost:4200"})  //permite decirle las rutas a ls que va a dar acceso
@RequestMapping("/api/etapa")
public class EtapaController {

    @Autowired
    EtapaService etapaService;

    //Create y update
    @PreAuthorize("hasAuthority('crear_etapa')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Etapa save(@RequestBody Etapa etapa)
    {
        System.out.println("recibiendo save");
        return etapaService.save(etapa);

    }
    //Read  
    @PreAuthorize("hasAuthority('leer_etapa')")
    @GetMapping("/{id}")
    public Etapa findById(@PathVariable Long id)  //PathVariable ayuda al id q se solicite lo mapee de tipo long
    {
        return etapaService.findByid(id);   
    }
    //Update
    @PreAuthorize("hasAuthority('actualizar_etapa')")
    @PutMapping("/update")  //actualizaciones retorna codigo 200
    public Etapa update(@RequestBody Etapa etapa)
    {
        return etapaService.save(etapa);
    }
    //Delete
    @PreAuthorize("hasAuthority('eliminar_etapa')")
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        etapaService.deleteById(id);
    }

    @PreAuthorize("hasAuthority('leer_etapa')")
    @GetMapping("/findAll")
    public List<Etapa> findAll()
    {
        return etapaService.findAll();  //llama al etapa para servicio
    }

    @PreAuthorize("hasAuthority('leer_etapa')")
    @GetMapping("/etapaPorSeguimiento/{id}")
    public  List<Etapa> findBySeguimientoId(@PathVariable Long id) {
        return etapaService.findBySeguimientoId(id);

    }
}

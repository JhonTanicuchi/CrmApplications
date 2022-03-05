package CRM4RTONOCTURNOA.CRM.auth.controller;

 
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
 
import CRM4RTONOCTURNOA.CRM.auth.entity.Rol;
import CRM4RTONOCTURNOA.CRM.auth.service.RolService;
 

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/rol")
public class RolController {
 
    @Autowired
    RolService rolService;
 
    //Create
    @PreAuthorize("hasAuthority('CREAR_ROLES')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Rol save(@RequestBody Rol rol)
    {
        return rolService.save(rol);
    }
 
    //Read
    @PreAuthorize("hasAuthority('LEER_ROLES')")
    @GetMapping("/{id}")
    public Rol findById(@PathVariable Long id)
    {
        return rolService.findById(id);
    }
    //Update
    @PreAuthorize("hasAuthority('ACTUALIZAR_ROLES')")
    @PutMapping("/update")
    public Rol update(@RequestBody Rol rol)
    {
        return rolService.save(rol);
    }
   
    //Delete
    @PreAuthorize("hasAuthority('ELIMINAR_ROLES')")
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        rolService.deleteById(id);
    }
 

    @PreAuthorize("hasAuthority('LEER_ROLES')")
    @GetMapping("/findAll")
    public List<Rol> findAll()
    {
        return rolService.findAll();
    }
}

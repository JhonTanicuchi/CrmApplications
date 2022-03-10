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

import CRM4RTONOCTURNOA.CRM.auth.entity.Permiso;
import CRM4RTONOCTURNOA.CRM.auth.service.PermisoService;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("/api/permiso")
public class PermisoControler {

    @Autowired
    PermisoService permisoService;

    // Create
    @PreAuthorize("hasAuthority('crear_permiso')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Permiso save(@RequestBody Permiso permiso) {
        return permisoService.save(permiso);
    }

    // Read
    @PreAuthorize("hasAuthority('leer_permiso')")
    @GetMapping("/{id}")
    public Permiso findById(@PathVariable Long id) {
        return permisoService.findById(id);
    }

    // Update
    @PreAuthorize("hasAuthority('actualizar_permiso')")
    @PutMapping("/update")
    public Permiso update(@RequestBody Permiso permiso) {
        return permisoService.save(permiso);
    }

    // Delete
    @PreAuthorize("hasAuthority('eliminar_permiso')")
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        permisoService.deleteById(id);
    }


    @PreAuthorize("hasAuthority('leer_permiso')")
    @GetMapping("/findAll")
    public List<Permiso> findAll() {
        return permisoService.findAll();
    }

    @PreAuthorize("hasAuthority('leer_permiso')")
    @GetMapping("/findByRolId/{id}")
    public List<Permiso> findByRolId(@PathVariable Long id) {
        return permisoService.findByRolId(id);
    }
}

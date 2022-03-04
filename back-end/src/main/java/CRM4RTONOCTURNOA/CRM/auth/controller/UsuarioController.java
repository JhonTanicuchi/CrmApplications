package CRM4RTONOCTURNOA.CRM.auth.controller;

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
<<<<<<<< HEAD:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/PermisoControler.java

import CRM4RTONOCTURNOA.CRM.entity.Permiso;
import CRM4RTONOCTURNOA.CRM.service.PermisoService;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("/api/permiso")
public class PermisoControler {
========
import CRM4RTONOCTURNOA.CRM.auth.entity.Usuario;
import CRM4RTONOCTURNOA.CRM.auth.service.UsuarioService;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("/api/usuario")
public class UsuarioController {
>>>>>>>> JT-Usuarios:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/UsuarioController.java

    @Autowired
    PermisoService permisoService;

    // Create
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
<<<<<<<< HEAD:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/PermisoControler.java
    public Permiso save(@RequestBody Permiso permiso) {
        return permisoService.save(permiso);
========
    public Usuario save(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
>>>>>>>> JT-Usuarios:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/UsuarioController.java
    }

    // Read
    @GetMapping("/{id}")
<<<<<<<< HEAD:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/PermisoControler.java
    public Permiso findById(@PathVariable Long id) {
        return permisoService.findById(id);
========
    public Usuario findById(@PathVariable Long id) {
        return usuarioService.findById(id);
>>>>>>>> JT-Usuarios:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/UsuarioController.java
    }

    // Update
    @PutMapping("/update")
<<<<<<<< HEAD:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/PermisoControler.java
    public Permiso update(@RequestBody Permiso permiso) {
        return permisoService.save(permiso);
========
    public Usuario update(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
>>>>>>>> JT-Usuarios:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/UsuarioController.java
    }

    // Delete
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
<<<<<<<< HEAD:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/PermisoControler.java
        permisoService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Permiso> findAll() {
        return permisoService.findAll();
    }

 

========
        usuarioService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Usuario> findAll() {
        return usuarioService.findAll();
    }
>>>>>>>> JT-Usuarios:back-end/src/main/java/CRM4RTONOCTURNOA/CRM/auth/controller/UsuarioController.java
}

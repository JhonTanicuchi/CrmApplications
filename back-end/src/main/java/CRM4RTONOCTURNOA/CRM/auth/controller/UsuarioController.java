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
import CRM4RTONOCTURNOA.CRM.auth.entity.Usuario;
import CRM4RTONOCTURNOA.CRM.auth.service.UsuarioService;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    // Create
    @PreAuthorize("hasAuthority('crear_usuario')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario save(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    // Read
    @PreAuthorize("hasAuthority('leer_usuario')")
    @GetMapping("/{id}")
    public Usuario findById(@PathVariable Long id) {
        return usuarioService.findById(id);
    }

    // Update
    @PreAuthorize("hasAuthority('actualizar_usuario')")
    @PutMapping("/update")
    public Usuario update(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    // Delete
    @PreAuthorize("hasAuthority('eliminar_usuario')")
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        usuarioService.deleteById(id);
    }

    @PreAuthorize("hasAuthority('leer_usuario')")
    @GetMapping("/findAll")
    public List<Usuario> findAll() {
        return usuarioService.findAll();
    }
}

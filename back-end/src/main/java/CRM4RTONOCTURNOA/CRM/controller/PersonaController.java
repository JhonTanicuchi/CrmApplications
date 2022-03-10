package CRM4RTONOCTURNOA.CRM.controller;

import CRM4RTONOCTURNOA.CRM.entity.Persona;
import CRM4RTONOCTURNOA.CRM.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("api/persona")
public class PersonaController {

    @Autowired
    PersonaService personaService;

    // create
    @PreAuthorize("hasAuthority('crear_persona')")
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Persona createPersona(@RequestBody Persona persona) {
        return personaService.savePersona(persona);
    }

    // buscar todos
    @PreAuthorize("hasAuthority('leer_persona')")
    @GetMapping("/allPersonas")
    @ResponseStatus(HttpStatus.OK)
    public List<Persona> findAll() {
        return personaService.findPersona();
    }

    // id _persona
    @PreAuthorize("hasAuthority('leer_persona')")
    @GetMapping("/findId/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Persona buscarId(@PathVariable Long id) {
        return personaService.findByIdPersona(id);
    }

    // update
    @PreAuthorize("hasAuthority('actualizar_persona')")
    @PutMapping("/updatePersona")
    @ResponseStatus(HttpStatus.OK)
    public Persona updaPersona(@RequestBody Persona persona) {
        return personaService.updatePersona(persona);
    }

    //delete
    @PreAuthorize("hasAuthority('eliminar_persona')")
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deletePersona(@PathVariable Long id) {
        personaService.deletePersona(id);
    }

}

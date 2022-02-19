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

import CRM4RTONOCTURNOA.CRM.entity.Persona;
import CRM4RTONOCTURNOA.CRM.service.PersonaService;

@RestController
@CrossOrigin({ "http://localhost:4200" })
@RequestMapping("api/persona")
public class PersonaController {

    @Autowired
    PersonaService personaService;

    // create
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Persona createPersona(@RequestBody Persona persona) {
        return personaService.savePersona(persona);
    }

    // buscar todos
    @GetMapping("/allPersonas")
    @ResponseStatus(HttpStatus.OK)
    public List<Persona> findAll() {
        return personaService.findPersona();
    }

    // id _persona
    @GetMapping("/findId/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Persona buscarId(@PathVariable Long id) {
        return personaService.findByIdPersona(id);
    }

    // update
    @PutMapping("/updatePersona")
    @ResponseStatus(HttpStatus.OK)
    public Persona updaPersona(@RequestBody Persona persona) {
        return personaService.updatePersona(persona);
    }

    //delete
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deletePersona(@PathVariable Long id) {
        personaService.deletePersona(id);
    }

}

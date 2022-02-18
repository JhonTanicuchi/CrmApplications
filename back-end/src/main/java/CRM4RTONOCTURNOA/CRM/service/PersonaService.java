package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Persona;
import CRM4RTONOCTURNOA.CRM.repository.PersonaRepository;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository personaRepository;

    //guardar
    public Persona savePersona(Persona persona) {
        return personaRepository.save(persona);
    }
//listar
    public List<Persona> findPersona() {
        return personaRepository.findAll();
    }

    // id
    public Persona findByIdPersona(Long id) {
        return personaRepository.findById(id).get();
    }

    //actualizar
    public Persona updatePersona(Persona persona){
return personaRepository.save(persona);
    }

    //eliminar
    public void deletePersona(Long id ){
        personaRepository.deleteById(id);
    }
}

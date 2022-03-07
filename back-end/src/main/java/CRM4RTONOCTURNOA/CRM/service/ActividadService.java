package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Actividad;
import CRM4RTONOCTURNOA.CRM.repository.ActividadRepository;

@Service
public class ActividadService { //Aqui se va a publicar los metodos del Crud
    @Autowired  
    ActividadRepository actividadRepository;

    //Create y Update - se va a finir metodos publicos
    public Actividad save(Actividad actividad)
    {
        return actividadRepository.save(actividad);
    }

    //Read
    public Actividad findById(Long id)
    {
        return actividadRepository.findById(id).get();
    }

    //Delete

    public void deleteById(Long id)
    {
        actividadRepository.deleteById(id);
    }

    //findAll
    public List<Actividad> findAll()
  {
    return actividadRepository.findAll();
  }

  
 

    
}

package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Etapa;
import CRM4RTONOCTURNOA.CRM.repository.EtapaRepository;

@Service
public class EtapaService {

    @Autowired  //anotacion permite inyectar clases aqui => EtapaRepository y no instanciarlas
    EtapaRepository etapaRepository;

    //Create y update
    public Etapa save(Etapa etapa) //Metodo
    {   
        return etapaRepository.save(etapa);
    } 
    //Read  
    public Etapa findByid(Long id) //Metodo
    {   
        return etapaRepository.findById(id).get();
    } 
    //Delete
    public void deleteById(Long id) //Metodo
    {   
         etapaRepository.deleteById(id);
    } 
    
    public List<Etapa> findAll() //una lista sin parametros de entrada
    {
        return etapaRepository.findAll();  //parametros de salida
    }

    public List<Etapa> findBySeguimientoId(Long id){
        return  etapaRepository.findBySeguimientoId(id);
    }
}

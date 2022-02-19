package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import CRM4RTONOCTURNOA.CRM.entity.Campania;
import CRM4RTONOCTURNOA.CRM.repository.CampaniaRepository;

@Service
public class CampaniaService {
    @Autowired
    CampaniaRepository campaniaRepository;
    //Create y Update
    public Campania save(Campania campania){
        return campaniaRepository.save(campania);
    }
    //Read
    public Campania findById(Long id){
        return campaniaRepository.findById(id).get();
    }
    //Delete
    public void deleteById(Long id){
        campaniaRepository.deleteById(id);
    }
    //findAll
    public List<Campania> findAll(){
        return campaniaRepository.findAll();
    }
}

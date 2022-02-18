package CRM4RTONOCTURNOA.CRM.service;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import CRM4RTONOCTURNOA.CRM.entity.Rol;
import CRM4RTONOCTURNOA.CRM.repository.RolRepository;
 
@Service
public class RolService {
 
    @Autowired
    RolRepository clientRepository;
 
    // Create y Update
    public Rol save(Rol rol) {
        return clientRepository.save(rol);
    }
 
    // Read
    public Rol findById(Long id) {
        return clientRepository.findById(id).get();
    }
 
    // Delete
    public void deleteById(Long id) {
        clientRepository.deleteById(id);
    }
 
    public List<Rol> findAll() {
        return clientRepository.findAll();
    }
 
}
 


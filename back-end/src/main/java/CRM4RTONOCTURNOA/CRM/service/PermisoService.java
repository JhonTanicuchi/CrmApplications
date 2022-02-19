package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Permiso;
import CRM4RTONOCTURNOA.CRM.repository.PermisoRepository;

@Service
public class PermisoService {
    @Autowired
    PermisoRepository permisoRepository;

    // Create y Update
    public Permiso save(Permiso permiso) {
        return permisoRepository.save(permiso);
    }

    // Read
    public Permiso findById(Long id) {
        return permisoRepository.findById(id).get();
    }

    // Delete
    public void deleteById(Long id) {
        permisoRepository.deleteById(id);
    }

    public List<Permiso> findAll() {
        return permisoRepository.findAll();
    }

   

  

}

package CRM4RTONOCTURNOA.CRM.auth.service;

import java.util.List;
import CRM4RTONOCTURNOA.CRM.auth.entity.Permiso;
import CRM4RTONOCTURNOA.CRM.auth.repository.PermisoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PermisoService {

    @Autowired
    PermisoRepository permisoRepository;

    public Permiso save(Permiso permiso) {
        return permisoRepository.save(permiso);
    }

    public List<Permiso> findAll() {
        return permisoRepository.findAll();
    }

    public List<Permiso> findByRolId(long rolId) {
        return permisoRepository.findByRolId(rolId);
    }

   

    // Read
    public Permiso findById(Long id) {
        return permisoRepository.findById(id).get();
    }

    // Delete
    public void deleteById(Long id) {
        permisoRepository.deleteById(id);
    }

}

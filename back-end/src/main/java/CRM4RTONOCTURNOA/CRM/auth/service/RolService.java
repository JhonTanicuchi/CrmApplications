package CRM4RTONOCTURNOA.CRM.auth.service;

import java.util.ArrayList;
import java.util.List;
import CRM4RTONOCTURNOA.CRM.auth.entity.Permiso;
import CRM4RTONOCTURNOA.CRM.auth.entity.Rol;
import CRM4RTONOCTURNOA.CRM.auth.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {

    @Autowired
    RolRepository rolRepository;
    @Autowired
    PermisoService permisoService;

    public List<Rol> findAll() {
        return rolRepository.findAll();
    }

    public Rol save(Rol rol) {
        return rolRepository.save(rol);
    }

    public Rol findById(long id) {
        return rolRepository.findById(id).get();
    }

    public List<String> getPermisos(long rolId) {
        List<String> nombrePermisos = new ArrayList<>();
        List<Permiso> permisos = permisoService.findByRolId(rolId);
        for (Permiso permiso : permisos) {
            nombrePermisos.add(permiso.getNombre());
        }
        return nombrePermisos;
    }

    // Delete
    public void deleteById(Long id) {
        rolRepository.deleteById(id);
    }

   
}

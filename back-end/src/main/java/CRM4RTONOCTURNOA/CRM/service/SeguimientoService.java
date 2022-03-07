package CRM4RTONOCTURNOA.CRM.service;

import CRM4RTONOCTURNOA.CRM.entity.Seguimiento;
import CRM4RTONOCTURNOA.CRM.repository.SeguimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeguimientoService {
    @Autowired
    SeguimientoRepository seguimientoRepository;

    //findAll

    public List<Seguimiento> findAllSeguimientos(){
        return  seguimientoRepository.findSeguimientoByEstado(true);
    }

    public  Seguimiento findById(Long id){
        return seguimientoRepository.findById(id).get();
    }

    public Seguimiento saveSeguimiento(Seguimiento seguimiento){
        return seguimientoRepository.save(seguimiento);
    }

    public Seguimiento updateSeguimiento(Seguimiento seguimiento){
        return  seguimientoRepository.save(seguimiento);
    }

    public void deleteByIdSeguimiento(Long id){
        seguimientoRepository.deleteById(id);
    }

}

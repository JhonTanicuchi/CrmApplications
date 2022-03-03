package CRM4RTONOCTURNOA.CRM.service;

import CRM4RTONOCTURNOA.CRM.entity.EtapaPersona;
import CRM4RTONOCTURNOA.CRM.repository.EtapaPersonaRepository;
import CRM4RTONOCTURNOA.CRM.repository.EtapaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtapaPersonaService {

    @Autowired  //anotacion permite inyectar clases aqui => EtapaRepository y no instanciarlas
    EtapaPersonaRepository etapaPersonaRepository;

    public List<EtapaPersona> findByIdEtapa (Long idEtapa){
        return  etapaPersonaRepository.findByEtapaId(idEtapa);
    }

    public EtapaPersona save (EtapaPersona etapaPersona){
        return  etapaPersonaRepository.save(etapaPersona);
    }

    public  EtapaPersona findById (long id){
        return  etapaPersonaRepository.findById(id).get();
    }
}

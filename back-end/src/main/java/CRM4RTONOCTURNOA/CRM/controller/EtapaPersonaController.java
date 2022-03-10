package CRM4RTONOCTURNOA.CRM.controller;

import CRM4RTONOCTURNOA.CRM.dto.EtapaPersonaDTO;
import CRM4RTONOCTURNOA.CRM.dto.EtapasPersonaDTO;
import CRM4RTONOCTURNOA.CRM.entity.Etapa;
import CRM4RTONOCTURNOA.CRM.entity.EtapaPersona;
import CRM4RTONOCTURNOA.CRM.entity.Persona;
import CRM4RTONOCTURNOA.CRM.service.EtapaPersonaService;
import CRM4RTONOCTURNOA.CRM.service.EtapaService;
import CRM4RTONOCTURNOA.CRM.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin({"http://localhost:4200"})
@RequestMapping("/api/etapaPersona")
public class EtapaPersonaController {

    @Autowired
    EtapaService etapaService;
    @Autowired
    PersonaService personaService;
    @Autowired
    EtapaPersonaService etapaPersonaService;


    @PostMapping("/save")
    public EtapaPersona saveEtapaPersona(@RequestBody EtapaPersona etapaPersona){
        return  etapaPersonaService.save(etapaPersona);
    }

    @GetMapping("/etapaSeguimiento/{id}")
    public EtapaPersonaDTO getEtapaPersonaDTO (@PathVariable Long id){
        EtapaPersonaDTO etapaPersonaDTO = new EtapaPersonaDTO();

        EtapaPersona etapaPersona = etapaPersonaService.findById(id);

        Etapa etapa = etapaService.findByid(etapaPersona.getEtapaId());
        Persona persona = personaService.findByIdPersona(etapaPersona.getPersonaId());
        etapaPersonaDTO.setEtapaPersonaId(etapaPersona.getEtapaPersonaId());
        etapaPersonaDTO.setPersonaId(persona.getPersonaId());
        etapaPersonaDTO.setNombreCompleto(persona.getNombre() + ' ' + persona.getApellido());
        etapaPersonaDTO.setEtapaId(etapa.getEtapasId());
        etapaPersonaDTO.setNombreEtapa(etapa.getNombre());
        etapaPersonaDTO.setObservacion(etapaPersona.getObservacion()== null ?  "Sin observaciòn" : etapaPersona.getObservacion());

        return etapaPersonaDTO;

    }

    @GetMapping("/getEtapaSeguimiento/{id}")
    public List<EtapasPersonaDTO> getEtapaPersona (@PathVariable Long id){
        List<Etapa> etapaSeguimiento = etapaService.findBySeguimientoId(id);
        List<EtapasPersonaDTO> etapaPersonaDTOS = new ArrayList<>();

        for (Etapa etapaActual : etapaSeguimiento){

            List<EtapaPersonaDTO> etapaPersonaDTOS1 = new ArrayList<>();

            List<EtapaPersona> etapaPersonas = etapaPersonaService.findByIdEtapa(etapaActual.getEtapasId());

            EtapasPersonaDTO etapaPersonaDTO = new EtapasPersonaDTO();

            etapaPersonaDTO.setEtapaId(etapaActual.getEtapasId());
            etapaPersonaDTO.setNombreEtapa(etapaActual.getNombre());

            for (EtapaPersona etapaPersonasActual: etapaPersonas){

                etapaPersonaDTOS1.add(getEtapaPersonaDTO(etapaPersonasActual.getEtapaPersonaId()));
    etapaPersonaDTO.setEtapaPersonaDTO(etapaPersonaDTOS1);
            }

            etapaPersonaDTOS.add(etapaPersonaDTO);

        }

        return etapaPersonaDTOS;
    }

    @PutMapping("/updateEtapaPersona")
    public EtapaPersona updateEtapaPersona (@RequestBody EtapaPersona etapaPersona){
        EtapaPersona etapaPersonaDB = etapaPersonaService.findById(etapaPersona.getEtapaPersonaId());
        etapaPersonaDB.setEtapaId(etapaPersona.getEtapaId());
        return etapaPersonaService.save(etapaPersonaDB);
    }
}

package CRM4RTONOCTURNOA.CRM.controller;

import CRM4RTONOCTURNOA.CRM.dto.EtapaPersonaDTO;
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
@CrossOrigin({"http://localhost:4200"})  //permite decirle las rutas a ls que va a dar acceso
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

    @GetMapping("/getEtapaSeguimiento/{id}")
    public List<EtapaPersonaDTO> getEtapaPersona (@PathVariable Long id){
        List<Etapa> etapaSeguimiento = etapaService.findBySeguimientoId(id);
        List<EtapaPersonaDTO> etapaPersonaDTOS = new ArrayList<>();

        for (Etapa etapaActual : etapaSeguimiento){
            List<Persona> personaPorCategorias = new ArrayList<>();

            List<EtapaPersona> etapaPersonas = etapaPersonaService.findByIdEtapa(etapaActual.getEtapasId());
            EtapaPersonaDTO etapaPersonaDTO = new EtapaPersonaDTO();

            for (EtapaPersona etapaPersonasActual: etapaPersonas){

                personaPorCategorias.add(personaService.findByIdPersona(etapaPersonasActual.getPersonaId()));
                etapaPersonaDTO.setEtapaId(etapaActual.getEtapasId());
                etapaPersonaDTO.setNombreEtapa(etapaActual.getNombre());
                etapaPersonaDTO.setPersonas(personaPorCategorias);
            }
            etapaPersonaDTOS.add(etapaPersonaDTO);

        }

        return etapaPersonaDTOS;
    }

    @PutMapping("/updateEtapaPersona")
    public EtapaPersona updateEtapaPersona (@RequestBody EtapaPersona etapaPersona){
        EtapaPersona etapaPersonaDB = etapaPersonaService.findById(etapaPersona.getPersonaId());
        etapaPersonaDB.setEtapaId(etapaPersona.getEtapaId());
        return etapaPersonaService.save(etapaPersonaDB);
    }
}

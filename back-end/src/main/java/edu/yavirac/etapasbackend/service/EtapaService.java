package edu.yavirac.etapasbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.yavirac.etapasbackend.entity.Etapa;
import edu.yavirac.etapasbackend.repository.EtapaRepository;

@Service
public class EtapaService {

    @Autowired
    EtapaRepository etapaRepository;

    // Create y Update
    public Etapa save(Etapa cotizacion) {
        return etapaRepository.save(cotizacion);
    }

    // Read
    public Etapa findById(Long id) {
        return etapaRepository.findById(id).get();
    }

    // Delete
    public void deleteById(Long id) {
        etapaRepository.deleteById(id);
    }

    public List<Etapa> findAll() {
        return etapaRepository.findAll();
    }

}
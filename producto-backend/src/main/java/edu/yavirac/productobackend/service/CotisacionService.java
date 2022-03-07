package edu.yavirac.productobackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.yavirac.productobackend.entity.Cotisacion;
import edu.yavirac.productobackend.repository.CotisacionRepository;

@Service
public class CotisacionService{
    @Autowired
    CotisacionRepository cotisacionRepository;
    
    public Cotisacion save(Cotisacion cotisacion){

        return cotisacionRepository.save(cotisacion);
    }
    
}

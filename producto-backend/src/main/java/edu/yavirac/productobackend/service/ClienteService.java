package edu.yavirac.productobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.yavirac.productobackend.entity.Cliente;
import edu.yavirac.productobackend.repository.ClienteRepository;

@Service
public class ClienteService {
    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> findName(String termino){
        return clienteRepository.findByNombreLikeIgnoreCase(termino);
    }
}

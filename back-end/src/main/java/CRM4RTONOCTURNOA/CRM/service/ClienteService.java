package CRM4RTONOCTURNOA.CRM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Cliente;
import CRM4RTONOCTURNOA.CRM.repository.ClienteRepository;

@Service
public class ClienteService {
    
    @Autowired
    ClienteRepository clienteRepository;

    //Create-Update
    public Cliente save(Cliente cliente)
    {
        return clienteRepository.save(cliente);
    }
    //Read
    public Cliente findById(Long id)
    {
        return clienteRepository.findById(id).get();
    }
    //Delete
    public void deleteById(Long id)
    {
        clienteRepository.deleteById(id);
    }
    
}

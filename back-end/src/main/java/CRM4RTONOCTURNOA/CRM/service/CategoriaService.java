package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Categoria;
import CRM4RTONOCTURNOA.CRM.repository.CategoriaRepository;

@Service
public class CategoriaService {
    
    @Autowired
    CategoriaRepository categoriaRepository;


    public List<Categoria> findAll()
    {
        return categoriaRepository.findAll();
    }
}

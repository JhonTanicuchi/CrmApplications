package CRM4RTONOCTURNOA.CRM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CRM4RTONOCTURNOA.CRM.entity.Usuario;
import CRM4RTONOCTURNOA.CRM.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    //Create y Update
    public Usuario save(Usuario usuario)
    {
      return usuarioRepository.save(usuario);
    }
    //Read
    public Usuario findById(Long id)
    {
        return usuarioRepository.findById(id).get();
    }

    //Delete
    public void deleteById(Long id)
    {
        usuarioRepository.deleteById(id);
    }

    public List<Usuario> findAll()
    {
        return usuarioRepository.findAll();
    }
    
}

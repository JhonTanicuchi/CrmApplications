package CRM4RTONOCTURNOA.CRM.auth.service;

import java.util.ArrayList;
import java.util.List;
import CRM4RTONOCTURNOA.CRM.auth.entity.RolUsuario;
import CRM4RTONOCTURNOA.CRM.auth.entity.Usuario;
import CRM4RTONOCTURNOA.CRM.auth.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    RolService rolService;
    @Autowired
    PermisoService permisoService;

    public Usuario save(Usuario usuario) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    // Read
    public Usuario findById(Long id) {
        return usuarioRepository.findById(id).get();
    }

    // Delete
    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = this.getUsuarioConAuthoritiesPorUsername(username);
        return usuario;
    }

    public Usuario getUsuarioConAuthoritiesPorUsername(String username) {
        Usuario usuario = usuarioRepository.findByUsername(username);
        List<GrantedAuthority> authorities = new ArrayList<>();

        for (RolUsuario rolUsuario : usuario.getRoles()) {
            List<String> permisos = rolService.getPermisos(rolUsuario.getRolId());
            for (String nombrePermiso : permisos) {
                authorities.add(new SimpleGrantedAuthority(nombrePermiso));
            }
        }
        usuario.setAuthorities(authorities);
        return usuario;
    }
}
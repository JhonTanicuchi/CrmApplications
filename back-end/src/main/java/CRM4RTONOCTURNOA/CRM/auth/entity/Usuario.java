package CRM4RTONOCTURNOA.CRM.auth.entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.data.annotation.Transient;
import lombok.Data;

@Data
@Table("administracion\".\"usuarios")
public class Usuario implements UserDetails {

    @Id
    @Column("usuario_id")
    private long usuarioId;
    private String nombre;
    private String username;
    private String password;
    private boolean estado;
    @Column("fecha_creacion")
    private String fechaCreacion;
    @Column("fecha_modificacion")
    private String fechaModificacion;

    @MappedCollection(idColumn = "usuario_id")
    private Set<UsuarioPersona> persona = new HashSet<>();

    @MappedCollection(idColumn = "usuario_id")
    private Set<RolUsuario> roles = new HashSet<>();

    @Transient
    Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return this.estado;
    }

}

package CRM4RTONOCTURNOA.CRM.entity;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import CRM4RTONOCTURNOA.CRM.auth.entity.UsuarioPersona;

@Data
@Table("persona\".\"persona")

public class Persona {
    @Id
    @Column("persona_id")
    private Long personaId;
    private String nombre;
    private String apellido;
    @Column("identificacion")
    private String cedula;
    private String correo;
    @Column("contacto")
    private String celular;

    @MappedCollection(idColumn = "persona_id")
    private Set<UsuarioPersona> usuario = new HashSet<>();



}

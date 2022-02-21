package CRM4RTONOCTURNOA.CRM.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

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



}

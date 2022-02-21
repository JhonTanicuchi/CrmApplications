package CRM4RTONOCTURNOA.CRM.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

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

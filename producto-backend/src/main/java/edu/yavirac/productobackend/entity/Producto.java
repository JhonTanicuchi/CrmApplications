package edu.yavirac.productobackend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;
//nos ayuda a mapear un objeto con una respectiva  tabla 
@Data
@Table("productos")
public class Producto {
    
//id, categoria, nombre, codigo, fecha_caducidad

@Id
@Column("producto_id")
private long productoId; 
private String categoria;
private String nombre;
private String codigo;
private Integer precio;
}

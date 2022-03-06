CREATE SEQUENCE IF NOT EXISTS administracion.usuario_usuario_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;
CREATE SEQUENCE IF NOT EXISTS administracion.roles_usuarios_rol_usuario_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE IF NOT EXISTS administracion.rol_rol_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE IF NOT EXISTS administracion.permisos_roles_permiso_rol_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE IF NOT EXISTS administracion.permisos_permiso_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS administracion.usuarios
(
    usuario_id integer NOT NULL DEFAULT nextval('administracion.usuario_usuario_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    username character varying UNIQUE COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    estado boolean NOT NULL DEFAULT true,
    CONSTRAINT usuario_pkey PRIMARY KEY (usuario_id),
);

CREATE TABLE IF NOT EXISTS administracion.roles
(
    rol_id integer NOT NULL DEFAULT nextval('administracion.rol_rol_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    CONSTRAINT rol_pkey PRIMARY KEY (rol_id),
    CONSTRAINT u_nombre UNIQUE (nombre)
);

CREATE TABLE IF NOT EXISTS administracion.permisos
(
    permiso_id integer NOT NULL DEFAULT nextval('administracion.permisos_permiso_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    CONSTRAINT permisos_pkey PRIMARY KEY (permiso_id)
);


CREATE TABLE IF NOT EXISTS administracion.permisos_roles
(
    permiso_rol_id integer NOT NULL DEFAULT nextval('administracion.permisos_roles_permiso_rol_id_seq'::regclass),
    permiso_id integer NOT NULL,
    rol_id integer NOT NULL,
    CONSTRAINT permisos_roles_pkey PRIMARY KEY (permiso_rol_id),
    CONSTRAINT fk_permiso FOREIGN KEY (permiso_id)
        REFERENCES administracion.permisos (permiso_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_rol FOREIGN KEY (rol_id)
        REFERENCES administracion.roles (rol_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS administracion.roles_usuarios
(
    rol_usuario_id integer NOT NULL DEFAULT nextval('administracion.roles_usuarios_rol_usuario_id_seq'::regclass),
    rol_id integer NOT NULL,
    usuario_id integer NOT NULL,
    CONSTRAINT roles_usuarios_pkey PRIMARY KEY (rol_usuario_id),
    CONSTRAINT fk_rol FOREIGN KEY (rol_id)
        REFERENCES administracion.roles (rol_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
        REFERENCES administracion.usuarios (usuario_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_USUARIO');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_USUARIO');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_USUARIO');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_USUARIO');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_ROL');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_ROL');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_ROL');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_ROL');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_PERMISO');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_PERMISO');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_PERMISO');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_PERMISO');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_PERSONA');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_PERSONA');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_PERSONA');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_PERSONA');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_CAMPAÑA');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_CAMPAÑA');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_CAMPAÑA');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_CAMPAÑA');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_SEGUIMIENTO');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_SEGUIMIENTO');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_SEGUIMIENTO');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_SEGUIMIENTO');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_ETAPA');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_ETAPA');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_ETAPA');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_ETAPA');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_ACTIVIDADES');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_ACTIVIDADES');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_ACTIVIDADES');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_ACTIVIDADES');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_COTIZACION');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_COTIZACION');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_COTIZACION');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_COTIZACION');

INSERT INTO administracion.permisos (nombre) VALUES ('CREAR_PEDIDO');
INSERT INTO administracion.permisos (nombre) VALUES ('LEER_PEDIDO');
INSERT INTO administracion.permisos (nombre) VALUES ('ACTUALIZAR_PEDIDO');
INSERT INTO administracion.permisos (nombre) VALUES ('ELIMINAR_PEDIDO');

INSERT INTO administracion.roles (nombre) VALUES ('ADMINISTRADOR');
INSERT INTO administracion.roles (nombre) VALUES ('SUPERVISOR');
INSERT INTO administracion.roles (nombre) VALUES ('ASESOR');
INSERT INTO administracion.roles (nombre) VALUES ('GERENTE');

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_USUARIO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_USUARIO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_USUARIO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_USUARIO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_ROL'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_ROL'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_ROL'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_ROL'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_PERMISO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_PERMISO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_PERMISO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_PERMISO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_PERSONA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_PERSONA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_PERSONA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_PERSONA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_CAMPAÑA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_CAMPAÑA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_CAMPAÑA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_CAMPAÑA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_SEGUIMIENTO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_SEGUIMIENTO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_SEGUIMIENTO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_SEGUIMIENTO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_ETAPA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_ETAPA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_ETAPA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_ETAPA'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_ACTIVIDADES'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_ACTIVIDADES'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_ACTIVIDADES'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_ACTIVIDADES'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_COTIZACION'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_COTIZACION'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_COTIZACION'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_COTIZACION'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CREAR_PEDIDO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'LEER_PEDIDO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ACTUALIZAR_PEDIDO'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'ELIMINAR_PEDIDO'));


INSERT INTO administracion.usuarios (nombre, username, password, estado) VALUES ('Administrador', 'admin', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', true);


INSERT INTO administracion.roles_usuarios (usuario_id, rol_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where username = 'admin'), (SELECT rol_id FROM administracion.roles where nombre = 'ADMINISTRADOR'));

-------------------------------------------------------------------------------------------------------------------

CREATE SEQUENCE IF NOT EXISTS persona.persona_persona_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;


CREATE TABLE IF NOT EXISTS persona.persona
(
    persona_id integer NOT NULL DEFAULT nextval('persona.persona_persona_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    apellido character varying COLLATE pg_catalog."default" NOT NULL,
    identificacion character varying COLLATE pg_catalog."default" NOT NULL,
    correo character varying COLLATE pg_catalog."default" NOT NULL,
    contacto character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT persona_pkey PRIMARY KEY (persona_id)
)

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('admin', 'admin', 'admin', 'admin', 'admin');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Jeysson ', 'Molina', '0000000000', 'jac.molina@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Jennifer', 'Herrera', '0000000000', 'jmm.herrera@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Angie', 'Pacas', '0000000000', 'aer.pacas@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Sebastian', 'Naranjo', '0000000000', 'wsm.naranjo@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Kevin', 'Pillajo', '0000000000', 'khm.pillajo@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Ricardo', 'Yaguachi', '0000000000', 'rmj.yaguachi@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Jhon', 'Tanicuchi', '0000000000', 'jav.tanicuhi@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Daniela', 'Torres', '0000000000', 'diq.torres@yavirac.edu.ec', '0000000000');

INSERT INTO persona.persona (nombre, apellido, identificacion, correo, contacto) VALUES ('Jonathan', 'Zambrano', '0000000000', 'jrr.zambrano@yavirac.edu.ec', '0000000000');

-------------------------------------------------------------------------------------------------------------------

CREATE SEQUENCE IF NOT EXISTS dministracion.usuarios_personas_usuario_persona_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS administracion.usuarios_personas
(
    usuario_persona_id integer NOT NULL DEFAULT nextval('administracion.usuarios_personas_usuario_persona_id_seq'::regclass),
    usuario_id integer NOT NULL,
    persona_id integer NOT NULL,
    CONSTRAINT usuarios_personas_pkey PRIMARY KEY (usuario_persona_id),
    CONSTRAINT persona_fk FOREIGN KEY (persona_id)
        REFERENCES persona.persona (persona_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT usuario_fk FOREIGN KEY (usuario_id)
        REFERENCES administracion.usuarios (usuario_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

INSERT INTO administracion.usuarios_personas (usuario_id, persona_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where usuario_id = 5), (SELECT persona_id FROM persona.persona where persona_id = 1));
CREATE SCHEMA IF NOT EXISTS administracion
    AUTHORIZATION postgres;


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

CREATE SEQUENCE IF NOT EXISTS administracion.usuarios_personas_usuario_persona_id_seq
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
    fecha_creacion character varying COLLATE pg_catalog."default",
    fecha_modificacion character varying COLLATE pg_catalog."default",
    CONSTRAINT usuario_pkey PRIMARY KEY (usuario_id)
);

CREATE TABLE IF NOT EXISTS administracion.roles
(
    rol_id integer NOT NULL DEFAULT nextval('administracion.rol_rol_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    fecha_creacion character varying COLLATE pg_catalog."default",
    fecha_modificacion character varying COLLATE pg_catalog."default",
    estado boolean NOT NULL DEFAULT true,
    CONSTRAINT rol_pkey PRIMARY KEY (rol_id),
    CONSTRAINT u_nombre UNIQUE (nombre)
);

CREATE TABLE IF NOT EXISTS administracion.permisos
(
    permiso_id integer NOT NULL DEFAULT nextval('administracion.permisos_permiso_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    fecha_creacion character varying COLLATE pg_catalog."default",
    fecha_modificacion character varying COLLATE pg_catalog."default",
    estado boolean NOT NULL DEFAULT true,
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
);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_usuario','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_usuario','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_usuario','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_usuario','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_rol','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_rol','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_rol','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_rol','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_permiso','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_permiso','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_permiso','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_permiso','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_persona','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_persona','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_persona','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_persona','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_campaña','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_campaña','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_campaña','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_campaña','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_seguimiento','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_seguimiento','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_seguimiento','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_seguimiento','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_etapa','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_etapa','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_etapa','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_etapa','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_actividades','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_actividades','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_actividades','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_actividades','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_cotizacion','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_cotizacion','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_cotizacion','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_cotizacion','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('crear_pedido','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('leer_pedido','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('actualizar_pedido','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.permisos (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('eliminar_pedido','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.roles (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('administrador','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.roles (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('supervisor','2021-3-18 20:21:2','2021-3-18 20:21:2',true);
INSERT INTO administracion.roles (nombre,fecha_creacion,fecha_modificacion,estado) VALUES ('empleado','2021-3-18 20:21:2','2021-3-18 20:21:2',true);

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_usuario'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_usuario'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_usuario'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_usuario'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_rol'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_rol'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_rol'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_rol'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_permiso'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_permiso'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_permiso'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_permiso'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_persona'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_persona'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_persona'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_persona'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_campaña'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_campaña'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_campaña'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_campaña'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_seguimiento'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_seguimiento'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_seguimiento'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_seguimiento'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_etapa'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_etapa'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_etapa'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_etapa'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_actividades'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_actividades'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_actividades'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_actividades'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_cotizacion'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_cotizacion'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_cotizacion'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_cotizacion'));

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'crear_pedido'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'leer_pedido'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'actualizar_pedido'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'administrador'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'eliminar_pedido'));


INSERT INTO administracion.usuarios (nombre, username, password, estado,fecha_creacion,fecha_modificacion) VALUES ('Administrador', 'admin', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', true,'2021-3-18 20:21:2','2021-3-18 20:21:2');

INSERT INTO administracion.roles_usuarios (usuario_id, rol_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where username = 'admin'), (SELECT rol_id FROM administracion.roles where nombre = 'administrador'));


INSERT INTO administracion.usuarios_personas (usuario_id, persona_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where usuario_id = 1), (SELECT persona_id FROM persona.persona where persona_id = 1));



------------------------------------------------------------------------------------------------------------------

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


INSERT INTO administracion.usuarios_personas (usuario_id, persona_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where usuario_id = 1), (SELECT persona_id FROM persona.persona where persona_id = 1));




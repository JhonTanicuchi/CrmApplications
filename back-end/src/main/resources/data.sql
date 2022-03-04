CREATE SEQUENCE IF NOT EXISTS administracion.usuario_usuario_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY usuarios.usuario_id;
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
    usuario_id integer NOT NULL DEFAULT nextval('usuario_usuario_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    username character varying COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    activo boolean NOT NULL DEFAULT true,
    CONSTRAINT usuario_pkey PRIMARY KEY (usuario_id)
);

CREATE TABLE IF NOT EXISTS administracion.roles
(
    rol_id integer NOT NULL DEFAULT nextval('rol_rol_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    CONSTRAINT rol_pkey PRIMARY KEY (rol_id),
    CONSTRAINT u_nombre UNIQUE (nombre)
);

CREATE TABLE IF NOT EXISTS administracion.permisos
(
    permiso_id integer NOT NULL DEFAULT nextval('permisos_permiso_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    CONSTRAINT permisos_pkey PRIMARY KEY (permiso_id)
);


CREATE TABLE IF NOT EXISTS administracion.permisos_roles
(
    permiso_rol_id integer NOT NULL DEFAULT nextval('permisos_roles_permiso_rol_id_seq'::regclass),
    permiso_id integer NOT NULL,
    rol_id integer NOT NULL,
    CONSTRAINT permisos_roles_pkey PRIMARY KEY (permiso_rol_id),
    CONSTRAINT fk_permiso FOREIGN KEY (permiso_id)
        REFERENCES administracion.permisos (permiso_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_rol FOREIGN KEY (rol_id)
        REFERENCES administracion.roles (rol_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


CREATE TABLE IF NOT EXISTS administracion.roles_usuarios
(
    rol_usuario_id integer NOT NULL DEFAULT nextval('roles_usuarios_rol_usuario_id_seq'::regclass),
    rol_id integer NOT NULL,
    usuario_id integer NOT NULL,
    CONSTRAINT roles_usuarios_pkey PRIMARY KEY (rol_usuario_id),
    CONSTRAINT fk_rol FOREIGN KEY (rol_id)
        REFERENCES administracion.roles (rol_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
        REFERENCES administracion.usuarios (usuario_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

INSERT INTO administracion.permisos (nombre) VALUES ('CLIENTE_CREAR');
INSERT INTO administracion.permisos (nombre) VALUES ('CLIENTE_LEER');
INSERT INTO administracion.permisos (nombre) VALUES ('CLIENTE_ACTUALIZAR');
INSERT INTO administracion.permisos (nombre) VALUES ('CLIENTE_ELIMINAR');

INSERT INTO administracion.roles (nombre) VALUES ('ROLE_ADMIN');
INSERT INTO administracion.roles (nombre) VALUES ('ROLE_ASESOR');
INSERT INTO administracion.roles (nombre) VALUES ('ROLE_CLIENTE');

INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ADMIN'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_CREAR'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ADMIN'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_LEER'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ADMIN'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_ACTUALIZAR'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ADMIN'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_ELIMINAR'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ASESOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_CREAR'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ASESOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_LEER'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ASESOR'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_ACTUALIZAR'));
INSERT INTO administracion.permisos_roles (rol_id, permiso_id) VALUES ((SELECT rol_id FROM administracion.roles where nombre = 'ROLE_CLIENTE'), (SELECT permiso_id FROM administracion.permisos WHERE nombre = 'CLIENTE_LEER'));

INSERT INTO administracion.usuarios (nombre, username, password, activo) VALUES ('Freddy Heredia', 'fheredia', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', true);
INSERT INTO administracion.usuarios (nombre, username, password, activo) VALUES ('Juan Perez', 'jperez', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', true);
INSERT INTO administracion.usuarios (nombre, username, password, activo) VALUES ('Admin CRM', 'admin', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', true);

INSERT INTO administracion.roles_usuarios (usuario_id, rol_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where username = 'fheredia'), (SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ASESOR'));
INSERT INTO administracion.roles_usuarios (usuario_id, rol_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where username = 'jperez'), (SELECT rol_id FROM administracion.roles where nombre = 'ROLE_CLIENTE'));
INSERT INTO administracion.roles_usuarios (usuario_id, rol_id) VALUES ((SELECT usuario_id FROM administracion.usuarios where username = 'admin'), (SELECT rol_id FROM administracion.roles where nombre = 'ROLE_ADMIN'));

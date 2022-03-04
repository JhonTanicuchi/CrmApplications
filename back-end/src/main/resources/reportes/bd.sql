select * from reporte.v_cotizacion

create or replace view reporte.v_cotizacion as
select cot.cotizacion_id, cot.nro, cot.fecha, 
cli.nombre as nombre_cliente, cli.identificacion,
prod.nombre as nombre_producto, dcot.cantidad, dcot.precio, cot.nro as numero_cotizacion,
dcot.cantidad*dcot.precio as subtotal
from reporte.cotizaciones cot
join reporte.clientes cli on (cot.cliente_id = cli.cliente_id)
join reporte.detalles_cotizacion dcot on(cot.cotizacion_id = dcot.cotizacion_id)
join reporte.productos prod on (dcot.producto_id = prod.producto_id)
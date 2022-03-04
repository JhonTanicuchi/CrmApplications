package CRM4RTONOCTURNOA.CRM.service;


import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import CRM4RTONOCTURNOA.CRM.dto.CotizacionDTO;
import CRM4RTONOCTURNOA.CRM.entity.Cotizacion;
import CRM4RTONOCTURNOA.CRM.repository.CotizacionDTORepository;
import CRM4RTONOCTURNOA.CRM.repository.CotizacionRepository;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class CotizacionService {

    @Autowired
    CotizacionRepository cotizacionRepository;
    @Autowired
    CotizacionDTORepository cotizacionDTORepository;

    public Cotizacion save(Cotizacion cotizacion)
    {
        return cotizacionRepository.save(cotizacion);
    }

    public JasperPrint getPdf(long cotizacionId)
    {
        List<CotizacionDTO> datosCotizacion =  cotizacionDTORepository.findByCotizacionId(cotizacionId);
        if (datosCotizacion.isEmpty())
            return null;

        Map<String, Object> parametros = new HashMap<>();
        parametros.put("nro", datosCotizacion.get(0).getNro());
        parametros.put("fecha", datosCotizacion.get(0).getFecha());
        parametros.put("nombreCliente", datosCotizacion.get(0).getNombreCliente());
        parametros.put("identificacion", datosCotizacion.get(0).getIdentificacion());
        parametros.put("CotizacionDetalle", new JRBeanCollectionDataSource(datosCotizacion));

        JasperPrint reporte = null;
        try {
            reporte = JasperFillManager.fillReport(
                JasperCompileManager.compileReport(ResourceUtils.getFile("classpath:reportes/test.jrxml").getAbsolutePath()),
                    parametros,
                    new JREmptyDataSource()
                );
        } catch (FileNotFoundException | JRException e) {
            e.printStackTrace();
        }

        return reporte;

    }

   
    
}

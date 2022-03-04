package CRM4RTONOCTURNOA.CRM.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CRM4RTONOCTURNOA.CRM.entity.Cotizacion;
import CRM4RTONOCTURNOA.CRM.service.CotizacionService;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperPrint;

@RestController
@RequestMapping("/api/cotizacionReporte/")
@CrossOrigin({"http://localhost:4200"})
public class CotizacionController {

    @Autowired
    CotizacionService cotizacionService;
    
    @PostMapping("save")
    private Cotizacion save(@RequestBody Cotizacion cotizacion)
    {
        return cotizacionService.save(cotizacion);
    }

   
    @GetMapping("cotizacionPDF/{id}")
    public ResponseEntity<byte[]> getPdf(@PathVariable long id) throws JRException
    {
        JasperPrint reporte = cotizacionService.getPdf(id);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("filename", "ReporteCotizacion.pdf");
        
        
        return new ResponseEntity<byte[]>(JasperExportManager.exportReportToPdf(reporte), headers, HttpStatus.OK);

    }

    
}

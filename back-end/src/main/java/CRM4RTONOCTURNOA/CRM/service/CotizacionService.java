package eduyavirac.cotizacionbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eduyavirac.cotizacionbackend.entity.Cotizacion;
import eduyavirac.cotizacionbackend.repository.CotizacionRepository;

@Service
public class CotizacionService {

    @Autowired
    CotizacionRepository cotizacionRepository;

    //Create y Update
    public Cotizacion save(Cotizacion cotizacion)
    {
        return cotizacionRepository.save(cotizacion);
    }

    //Read
    public Cotizacion findById(Long id)
    {
        return cotizacionRepository.findById(id).get();
    }

    //Delete
    public void deleteById(Long id)
    {
        cotizacionRepository.deleteById(id);
    }

    public List<Cotizacion> findAll()
    {
        return cotizacionRepository.findAll();
    }


}

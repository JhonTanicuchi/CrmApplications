package CRM4RTONOCTURNOA.CRM.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import CRM4RTONOCTURNOA.CRM.entity.Pedido;
import CRM4RTONOCTURNOA.CRM.repository.PedidoRepository;

@Service
public class PedidoService {

    @Autowired
    PedidoRepository pedidoRepository;
    
    public Pedido save(Pedido pedido)
    {
       return pedidoRepository.save(pedido);
    }
}

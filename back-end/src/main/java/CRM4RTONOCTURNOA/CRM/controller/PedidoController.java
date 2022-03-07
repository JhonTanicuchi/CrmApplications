package CRM4RTONOCTURNOA.CRM.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CRM4RTONOCTURNOA.CRM.entity.Pedido;
import CRM4RTONOCTURNOA.CRM.service.PedidoService;

@RestController
@RequestMapping("/api/pedido/")
@CrossOrigin({"http://localhost:4200"})
public class PedidoController {
    
    @Autowired
    PedidoService pedidoService;

    @PostMapping("save")
    private Pedido save(@RequestBody Pedido pedido)
    {
        return pedidoService.save(pedido);
    }
}
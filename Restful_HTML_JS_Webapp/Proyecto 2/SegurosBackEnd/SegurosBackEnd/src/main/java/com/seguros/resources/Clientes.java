/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.seguros.resources;

/**
 *
 * @author Faxe
 */
import jakarta.annotation.security.PermitAll;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.core.MediaType;
import com.seguros.logic.*;
import jakarta.ws.rs.core.Response;

@Path("/clientes")
@PermitAll
public class Clientes {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addCliente(Cliente cliente) {
        try {
            if (!Service.instance().duplicado(cliente.getUsuario())) {
                Service.instance().addCliente(cliente);
                return Response.ok("Cliente agregado correctamente").build();
            } else {
                return Response.status(Response.Status.BAD_REQUEST).entity("El cliente ya existe").build();
            }
        } catch (Exception ex) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Error al agregar el cliente").build();
        }
    }
}

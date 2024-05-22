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
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;
import java.util.List;


@Path("/usuarios")
@PermitAll
public class Usuarios {

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(Usuario usuario) {
        Usuario resultado = Service.instance().login(usuario);
        if (resultado != null) {
            return Response.ok(resultado).build();
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Nombre de usuario o contraseña incorrectos").build();
        }
    }
    
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<Usuario> find(@DefaultValue("") @QueryParam("name") String name) { 
        return Service.instance().getUsuarios();
    }
    
}

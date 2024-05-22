package com.seguros.data;

import com.seguros.logic.*;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Faxe
 */

public class AdministradorDao {
RelDatabase db;

    public AdministradorDao(RelDatabase db){
        this.db= db;
    }   

    public void create(Administrador a) throws Exception {
        String sql = "insert into " +
                "Administrador " +
                "(usuarioAdmin, claveAdmin) " +
                "values(?,?)";
        PreparedStatement stm = db.prepareStatement(sql);
        stm.setString(1, a.getUsuario());
        stm.setString(2, a.getContraseña());

        int cont = db.executeUpdate(stm);
        if (cont == 0) {
            throw new Exception("Ya existe");
        }
    }

    public Administrador read(String usuario, String clave) throws Exception {
        String sql = "select " +
                "* " +
                "from  Administrador a " +
                "where a.usuarioAdmin=? and a.claveAdmin=?";
        PreparedStatement stm = db.prepareStatement(sql);
        stm.setString(1, usuario);
        stm.setString(2, clave);
        ResultSet rs = db.executeQuery(stm);
        if (rs.next()) {
            return from(rs,"a");
        } else {
            throw new Exception("ADMINISTRADOR NO EXISTE");
        }
    }

    public List<Administrador> findByusuario(String usuario) throws Exception {
        List<Administrador> resultado = new ArrayList<Administrador>();
        String sql = "select * " +
                "from " +
                "Administrador a " +
                "where a.usuarioAdmin=?";
        PreparedStatement stm = db.prepareStatement(sql);
        stm.setString(1, usuario );
        ResultSet rs = db.executeQuery(stm);
        while (rs.next()) {
            resultado.add(from(rs, "a"));
        }
        return resultado;
    }

    public Administrador from(ResultSet rs, String alias) throws Exception {
        Administrador a = new Administrador(rs.getString(alias + ".usuarioAdmin"), rs.getString(alias + ".claveAdmin"));
        return a;
    }
    
    public List<Administrador> getAdmins() throws Exception {
        List<Administrador> admins = new ArrayList<>();
        String sql = "SELECT * FROM Administrador";
        PreparedStatement stm = db.prepareStatement(sql);
        ResultSet rs = db.executeQuery(stm);

        while (rs.next()) {
            Administrador admin = from(rs, "a");
            admins.add(admin);
        }
        return admins;
    }
    
    public boolean exists(String usuarioAdmin) throws SQLException {
        String sql = "SELECT COUNT(*) AS count FROM Administrador WHERE usuarioAdmin = ?";
        PreparedStatement stm = db.prepareStatement(sql);
        stm.setString(1, usuarioAdmin);
        ResultSet rs = db.executeQuery(stm);

        if (rs.next()) {
            int count = rs.getInt("count");
            return count > 0;
        }

        return false;
    }

}

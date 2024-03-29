package CRM4RTONOCTURNOA.CRM.auth.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import CRM4RTONOCTURNOA.CRM.auth.entity.Usuario;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    private JWTUtil jwtUtil;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, JWTUtil jwtUtil) {
        setAuthenticationFailureHandler(new JWTAuthenticationFailureHandler());
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
            HttpServletResponse res) throws AuthenticationException {

        if (req.getHeader("Authorization") == null || req.getHeader("Authorization").isEmpty())
            throw new AuthenticationCredentialsNotFoundException("Credenciales no encontradas");
        String header = req.getHeader("Authorization").replace("Basic ", "");

        byte[] decodedBytes = Base64.getDecoder().decode(header);
        header = new String(decodedBytes);

        String[] credenciales = header.split(":");
        if (credenciales.length <= 1)
            throw new AuthenticationCredentialsNotFoundException("Credenciales no encontradas");

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(credenciales[0],
                credenciales[1], new ArrayList<>());

        Authentication auth = authenticationManager.authenticate(authToken);
        return auth;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
            HttpServletResponse res,
            FilterChain chain,
            Authentication auth) throws IOException, ServletException {

        String nombre = ((Usuario) auth.getPrincipal()).getNombre();
        String username = ((Usuario) auth.getPrincipal()).getUsername();
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        String role = "";
        for (GrantedAuthority authority : authorities) {
            role = authority.getAuthority();
        }
        String token = jwtUtil.generateToken(nombre, username, role);
        res.addHeader("Authorization", "Bearer " + token);
        res.addHeader("Access-Control-Expose-Headers", "Authorization");
    }

    private class JWTAuthenticationFailureHandler implements AuthenticationFailureHandler {

        @Override
        public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                AuthenticationException exception)
                throws IOException, ServletException {
            response.setStatus(401);
            response.setContentType("application/json");
            exception.getLocalizedMessage();
            response.getWriter().append(json());

        }

        private String json() {
            long date = new Date().getTime();
            return "{\"timestamp\": " + date + ", "
                    + "\"status\": 401, "
                    + "\"error\": \"No autorizado\", "
                    + "\"message\": \"Nombre de usuario o contraseña inválidas\", "
                    + "\"path\": \"/login\"}";
        }
    }
}

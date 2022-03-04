package CRM4RTONOCTURNOA.CRM.auth.security;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import CRM4RTONOCTURNOA.CRM.auth.entity.Usuario;
import CRM4RTONOCTURNOA.CRM.auth.service.UsuarioService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private UsuarioService usuarioService;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, UsuarioService usuarioService) {
        super(authenticationManager);
        this.usuarioService = usuarioService;
        // TODO Auto-generated constructor stub
    }

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager,
            AuthenticationEntryPoint authenticationEntryPoint) {
        super(authenticationManager, authenticationEntryPoint);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        String header = request.getHeader(JWTUtil.TOKEN_HEADER);
        // Filtra aquellos sin token (tal vez acceso sin autorización)
        if (header == null || !header.startsWith(JWTUtil.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }
        UsernamePasswordAuthenticationToken authentication = getAuthentication(header);
        // Establece la información de autenticación del usuario y jwtToken genera
        // UsernamePasswordAuthenticationToken
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String header) {
        String token = header.replace(JWTUtil.TOKEN_PREFIX, "");
        String username = JWTUtil.getUsername(token);

        Usuario usuario = usuarioService.getUsuarioConAuthoritiesPorUsername(username);

        if (username != null) {
            return new UsernamePasswordAuthenticationToken(username, null, usuario.getAuthorities());
        }
        return null;
    }
}

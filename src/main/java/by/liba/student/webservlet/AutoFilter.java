package by.liba.student.webservlet;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class AutoFilter implements Filter{
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException{
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse respons = (HttpServletResponse) response;
		HttpSession session = req.getSession();
		if (session.getAttribute("user") == null && 
				!req.getRequestURI().contains("/login")&&
			!req.getRequestURI().contains(req.getContextPath() + "/css/")){
			respons.sendRedirect(req.getContextPath() + "/login");
		} else{
			chain.doFilter(request, response);
		}
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}

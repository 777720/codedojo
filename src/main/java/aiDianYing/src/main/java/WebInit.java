import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration.Dynamic;
import javax.servlet.ServletException;

import org.h2.server.web.WebServlet;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class WebInit extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return null;
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] { WebConfig.class };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }

  	@Override
    public void onStartup(ServletContext container) throws ServletException {
      	super.onStartup(container);
        Dynamic registration = container.addServlet("H2Console", new WebServlet());
      	registration.setInitParameter("webAllowOthers", "");
        registration.setLoadOnStartup(1);
        registration.addMapping("/db/*");
    }

}

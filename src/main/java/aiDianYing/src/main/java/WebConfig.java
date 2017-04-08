import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

//-------------step 4
import javax.sql.DataSource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.init.DataSourceInitializer;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.core.io.ClassPathResource;


import org.springframework.jdbc.core.JdbcTemplate;

@EnableWebMvc
@ComponentScan("com.itbegin")
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        FreeMarkerViewResolver viewResolver = new FreeMarkerViewResolver();
        viewResolver.setPrefix("");
        viewResolver.setSuffix(".ftl");
        viewResolver.setContentType("text/html;charset=UTF-8");
      	registry.viewResolver(viewResolver);
        registry.freeMarker();
    }

    @Bean
    public FreeMarkerConfigurer freeMarkerConfigurer() {
        FreeMarkerConfigurer configurer = new FreeMarkerConfigurer();
        configurer.setTemplateLoaderPath("/WEB-INF/template/");
      	configurer.setDefaultEncoding("UTF-8");
        return configurer;
    }

    @Override
  	public void addResourceHandlers(ResourceHandlerRegistry registry) {
    		registry.addResourceHandler("/images/**")
      	    .addResourceLocations("/images/");
  	}
//-------------step 5
//数据库连接配置
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.h2.Driver");
        dataSource.setUrl("jdbc:h2:/tmp/movie");
        dataSource.setUsername("sa");
        dataSource.setPassword("sa");

      	return dataSource;
    }

		// 数据库初始化配置
  	@Bean
    public DataSourceInitializer dataSourceInitializer(DataSource dataSource)
    {
      DataSourceInitializer dataSourceInitializer = new DataSourceInitializer();
      dataSourceInitializer.setDataSource(dataSource);
      ResourceDatabasePopulator databasePopulator = new ResourceDatabasePopulator();
      databasePopulator.setSqlScriptEncoding("UTF-8");
      databasePopulator.addScript(new ClassPathResource("create.sql"));//需要在resource下新建create.sql文件
      databasePopulator.addScript(new ClassPathResource("init-db.sql"));//需要在resource下新建init-db.sql和create.sql文件
      dataSourceInitializer.setDatabasePopulator(databasePopulator);
      return dataSourceInitializer;
    }
//--------6
  	// JdbcTemplate配置
  	@Bean
  	public JdbcTemplate jdbcTemplate() {
      JdbcTemplate jdbcTemplate = new JdbcTemplate();
      jdbcTemplate.setDataSource(dataSource());

      return jdbcTemplate;
    }

}

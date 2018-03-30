package se.jensen.login.config;

import java.util.Arrays;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import se.jensen.login.filter.CustomGenericFilter;
import se.jensen.login.service.LoginDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	 @Autowired
	  private LoginDetailsService loginDetailsService; 
	 
	 @Autowired
	  private AuthenticationEntryPoint authenticationEntryPoint;
	 
	 
  @Override
  protected void configure(HttpSecurity http) throws Exception {
   
	http//.cors().and()
      .csrf().disable()
      .authorizeRequests()
        .antMatchers(HttpMethod.GET, "/users").authenticated()
        .antMatchers(HttpMethod.GET, "/users/*").authenticated()
        .antMatchers(HttpMethod.PUT, "/users").authenticated()
        .antMatchers(HttpMethod.DELETE, "/users").authenticated()
        .anyRequest().permitAll();
       /* .and()
        .httpBasic()
        .authenticationEntryPoint(authenticationEntryPoint);
        
    http.addFilterAfter(new CustomGenericFilter(),
            BasicAuthenticationFilter.class); 
      */      
      
  }
  
  
  @Override
  protected void configure(AuthenticationManagerBuilder auth)
    throws Exception {
      auth.authenticationProvider(authenticationProvider());
  }
   
  @Bean
  public DaoAuthenticationProvider authenticationProvider() {
      DaoAuthenticationProvider authProvider
        = new DaoAuthenticationProvider();
      authProvider.setUserDetailsService(loginDetailsService);
      authProvider.setPasswordEncoder(encoder());
      return authProvider;
  }
   
  @Bean
  public PasswordEncoder encoder() {
      return new BCryptPasswordEncoder(12);
  }
  
  @Bean
  public TokenStore tokenStore() {
      return new InMemoryTokenStore();
  }
  
  @Bean
  public FilterRegistrationBean corsFilter() {
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      CorsConfiguration config = new CorsConfiguration();
      config.setAllowCredentials(true);
      config.addAllowedOrigin("*");
      config.addAllowedHeader("*");
      config.addAllowedMethod("*");
      source.registerCorsConfiguration("/**", config);
      FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
      bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
      return bean;
  }
	
}
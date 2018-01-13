package se.jensen.login.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import se.jensen.login.service.LoginDetailsService;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	 @Autowired
	  private LoginDetailsService loginDetailsService; 
	 
	 
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf().disable()
      .authorizeRequests()
        .antMatchers(HttpMethod.GET, "/users").authenticated()
        .antMatchers(HttpMethod.GET, "/users/*").authenticated()
        .antMatchers(HttpMethod.PUT, "/users").authenticated()
        .antMatchers(HttpMethod.DELETE, "/users").authenticated()
        .anyRequest().permitAll()
        .and()
      .httpBasic().and()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
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
      return new BCryptPasswordEncoder(11);
  }
	
}
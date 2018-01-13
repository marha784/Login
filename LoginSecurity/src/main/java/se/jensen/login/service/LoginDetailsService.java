package se.jensen.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import se.jensen.login.domain.User;
import se.jensen.login.domain.UserPrinciple;
import se.jensen.login.domain.UserRepository;

@Service
public class LoginDetailsService implements UserDetailsService {
	
	@Autowired
    private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username){
		
		User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        
        return new UserPrinciple(user); 
	}
	
	

}

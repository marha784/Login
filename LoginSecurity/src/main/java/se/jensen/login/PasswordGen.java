package se.jensen.login;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordGen {
	
	
	public static void main(String[]args) {
		String password = "1234"; 
	    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(); 
	    String encodedPassword = passwordEncoder.encode(password);  
	    System.out.print(encodedPassword);

	}

}

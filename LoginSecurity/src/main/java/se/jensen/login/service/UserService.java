package se.jensen.login.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import se.jensen.login.domain.Role;
import se.jensen.login.domain.User;
import se.jensen.login.domain.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getAllUsers() {
		List<User> users = new ArrayList<User>();
		userRepository.findAll().forEach(users::add);
		return users;
	}

	public User getUser(int id) {
		return userRepository.findOne(id);

	}

	public void addUser(User user) {
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(11); 
	    String encodedPassword = passwordEncoder.encode(user.getPassword());
	    Role role = new Role();
	    role.setRole("USER");
	    Set<Role> roles = new HashSet<Role>();
	    roles.add(role);
	    User encodedUser = new User(user.getUsername(),encodedPassword, roles); 
		userRepository.save(encodedUser);
	}

	public void updateUser(User user) {
		userRepository.save(user);
	}

	public void deleteUser(Integer id) {
		userRepository.delete(id);
	}

}

package se.jensen.login.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import se.jensen.login.domain.User;
import se.jensen.login.domain.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository; 
	
	public List<User> getAllUsers(){	
		List<User> users = new ArrayList<User>(); 
		userRepository.findAll().forEach(users::add);
		return users; 
	}
	
	public User getUser(int id) {
		return userRepository.findOne(id);
		
	}
	
	public void  addUser(User user) {
		userRepository.save(user); 	
	}
	
	public void updateUser(User user) {
		userRepository.save(user); 	
	}
	
	public void deleteUser(Integer id ) {
		userRepository.delete(id);
	}
	
	
	

}

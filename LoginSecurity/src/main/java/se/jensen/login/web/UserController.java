package se.jensen.login.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import se.jensen.login.domain.User;
import se.jensen.login.service.UserService;


@RestController
public class UserController {

	@Autowired
	UserService userService;
	
    
	@RequestMapping("/users")
	@ResponseBody
	public List<User> getUsers() {
		return userService.getAllUsers();
	}

	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable int id) {
		return userService.getUser(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/users")
	public @ResponseBody ResponseEntity<String> addUser(@RequestBody User user) {
		userService.addUser(user);
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "application/json");
		return new ResponseEntity<String>(responseHeaders, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/users")
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/users/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
	}

}

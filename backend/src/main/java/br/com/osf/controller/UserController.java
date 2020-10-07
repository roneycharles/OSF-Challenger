package br.com.osf.controller;


import br.com.osf.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import br.com.osf.model.User;
import br.com.osf.services.UserServices;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserServices userServices;
	
	@RequestMapping(method=RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User> findAll() {
		return userServices.findAll();
	}	
	
	@RequestMapping(value="/{name}",
			method=RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public UserDTO findByName(@PathVariable("name") String name) {
		return userServices.findByName(name);
	}	
	
	@RequestMapping(method=RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public User create(@RequestBody User user) {
		return userServices.create(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public User update(@RequestBody User user) {
		return userServices.update(user);
	}
	
	@RequestMapping(value="/{id}",
			method=RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id) {
		userServices.delete(id);
	}	
	
}
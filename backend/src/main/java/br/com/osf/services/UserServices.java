package br.com.osf.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import br.com.osf.exception.ResourceNotFoundException;
import br.com.osf.model.Repos;
import br.com.osf.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.osf.model.User;

@Service
public class UserServices {

	@Autowired
	UserRepository userRepository;

	public User create(User user) {
		userRepository.save(user);

		return user;
	}
	
	public User update(User user) {
		userRepository.save(user);

		return user;
	}	
	
	public void delete(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist"));
		userRepository.delete(user);
		
	}
	
	public User findByName(String nickName) {
		User user = userRepository.findByNickName(nickName);

		return user;
	}

	public List<User> findAll() {
		return userRepository.findAll() ;
	}
}

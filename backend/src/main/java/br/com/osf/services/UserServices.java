package br.com.osf.services;

import java.util.List;

import br.com.osf.dto.UserDTO;
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
	
	public UserDTO findByName(String nickName) {
		User user = userRepository.findByNickName(nickName);
		List <Repos> repos = user.getRepos();

		int countStars = 0;
		int countForks = 0;
		int countIssues = 0;

		for(Repos r : repos){
        	countStars = countStars + r.getStars();
        	countForks = countForks + r.getForks();
        	countIssues = countIssues + r.getIssues();
    	}
		
		System.out.println(countForks);
		System.out.println(countIssues);
		System.out.println(countStars);

		UserDTO userDTO = new UserDTO();

		userDTO.setCountForks(countForks);
		userDTO.setCountIssues(countIssues);
		userDTO.setCountStars(countStars);

		userDTO.setFullName(user.getFullName());
		userDTO.setId(user.getId());
		userDTO.setNickName(user.getNickName());
		userDTO.setRepos(user.getRepos());

		return userDTO;
	}

	public List<User> findAll() {
		return userRepository.findAll() ;
	}
}

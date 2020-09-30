package br.com.osf.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import br.com.osf.model.Repos;
import org.springframework.stereotype.Service;

import br.com.osf.model.User;

@Service
public class UserServices {

	private final AtomicLong counter = new AtomicLong();
	
	public User create(User user) { return user; }
	
	public User update(User user) {
		return user;
	}	
	
	public void delete(String id) {
		
	}
	
	public User findByName(String nick) {
		List<Repos> listRepos = new ArrayList<Repos>();
		Repos repos = new Repos();
		repos.setForks(1);
		repos.setId(counter.incrementAndGet());
		repos.setIssues(5);
		repos.setStars(9);
		repos.setName("java-code");
		Repos repos1 = new Repos();
		repos1.setForks(1);
		repos1.setId(counter.incrementAndGet());
		repos1.setIssues(5);
		repos1.setStars(9);
		repos1.setName("java-code");
		listRepos.add(repos);
		listRepos.add(repos1);
		User user = new User();
		user.setId(counter.incrementAndGet());
		user.setFullName("Leandro Costa");
		user.setNickName("Leandro");
		user.setRepos(listRepos);
		return user;
	}
	
	public List<User> findAll() {
		List<User> users = new ArrayList<User>();
		for (int i = 0; i < 8; i++) {
			User user = mockUser(i);
			users.add(user);
		}
		return users;
	}

	private User mockUser(int i) {
		List<Repos> listRepos = new ArrayList<Repos>();
		Repos repos = new Repos();
		repos.setForks(1);
		repos.setId(counter.incrementAndGet());
		repos.setIssues(5);
		repos.setStars(9);
		repos.setName("java-code");

		User user = new User();
		user.setId(counter.incrementAndGet());
		user.setFullName("Person name" + i);
		user.setNickName("Last name" + i);
		user.setId(counter.incrementAndGet());
		user.setRepos(listRepos);
		return user;
	}

}

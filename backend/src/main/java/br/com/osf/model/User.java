package br.com.osf.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "users")
public class User implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "fullName", nullable = false)
	private String fullName;

	@Column(name = "nick", nullable = false)
	private String nickName;

	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	private List<Repos> repos;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Repos> getRepos() {
		return repos;
	}

	public void setRepos(List<Repos> repos) {
		this.repos = repos;
	}
}
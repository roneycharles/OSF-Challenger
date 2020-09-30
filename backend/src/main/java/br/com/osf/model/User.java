package br.com.osf.model;

import java.io.Serializable;
import java.util.List;

public class User implements Serializable{

	private static final long serialVersionUID = 1L;

	private long id;
	private String fullName;
	private String nickName;
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
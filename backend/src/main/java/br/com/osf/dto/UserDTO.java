package br.com.osf.dto;

import br.com.osf.model.Repos;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.io.Serializable;
import java.util.List;

@JsonPropertyOrder({"id","fullName","nickName"})
public class UserDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
    @JsonProperty("id")
	private long id;

    @JsonProperty("fullName")
	private String fullName;

    @JsonProperty("nickName")
	private String nickName;

    @JsonProperty("Repos")
    private List<Repos> repos;

    @JsonProperty("countStars")
	private int countStars;

    @JsonProperty("countForks")
    private int countForks;

    @JsonProperty("countIssues")
    private int countIssues;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public List<Repos> getRepos() {
        return repos;
    }

    public void setRepos(List<Repos> repos) {
        this.repos = repos;
    }

    public int getCountStars() {
        return countStars;
    }

    public void setCountStars(int countStars) {
        this.countStars = countStars;
    }

    public int getCountForks() {
        return countForks;
    }

    public void setCountForks(int countForks) {
        this.countForks = countForks;
    }

    public int getCountIssues() {
        return countIssues;
    }

    public void setCountIssues(int countIssues) {
        this.countIssues = countIssues;
    }
}

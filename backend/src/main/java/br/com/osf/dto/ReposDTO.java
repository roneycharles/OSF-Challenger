package br.com.osf.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.io.Serializable;

@JsonPropertyOrder({"id", "name", "stars", "issues", "forks"})
public class ReposDTO implements Serializable {
	
    private static final long serialVersionUID = 1L;

    @JsonProperty("id")
    private long id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("stars")
    private int stars;

    @JsonProperty("issues")
    private int issues;

    @JsonProperty("forks")
    private int forks;

    public long getId() {
    	return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public int getIssues() {
        return issues;
    }

    public void setIssues(int issues) {
        this.issues = issues;
    }

    public int getForks() {
        return forks;
    }

    public void setForks(int forks) {
        this.forks = forks;
    }
}

package br.com.osf.controller;

import br.com.osf.model.Repos;
import br.com.osf.services.RepoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/repos")
public class ReposController {
    @Autowired
    private RepoServices repoServices;

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Repos create(@RequestBody Repos repos) {
        return repoServices.create(repos);
    }
}

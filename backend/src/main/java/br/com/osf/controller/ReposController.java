package br.com.osf.controller;

import br.com.osf.model.Repos;
import br.com.osf.services.RepoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/repos")
public class ReposController {
	
    @Autowired
    private RepoServices repoServices;

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Repos create(@RequestBody Repos repos) {
        return repoServices.create(repos);
    }

    @RequestMapping(method=RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Repos update(@RequestBody Repos repos) {
        return repoServices.update(repos);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        repoServices.delete(id);
    }
}

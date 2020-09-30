package br.com.osf.services;

import br.com.osf.model.Repos;
import br.com.osf.repository.ReposRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RepoServices {

    @Autowired
    ReposRepository reposRepository;

    public Repos create(Repos repos) {
        reposRepository.save(repos);

        return repos;
    }
}

package br.com.osf.services;

import br.com.osf.exception.ResourceNotFoundException;
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

    public Repos update(Repos r) {
        reposRepository.save(r);

        return r;
    }

    public void delete(Long id) {
        Repos repos = reposRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not exist"));
        reposRepository.delete(repos);
    }
}

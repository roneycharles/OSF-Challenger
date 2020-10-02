package br.com.osf.repository;

import br.com.osf.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select * from users u where lower(u.nick) like lower(concat(?1, '%'))", nativeQuery = true)
    User findByNickName(String nickName);
}

package com.example.demo.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.SignUp;

public interface SignUpRepo extends CrudRepository<SignUp,Integer>{
	@Query("select cre.password from SignUp cre where cre.username=?1")
	Iterable<SignUp> findAllUsernamePassword( String username);
	SignUp findByUsername(String username);
}
package com.ieg.traveler.repository;

import com.ieg.traveler.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User getById(int id);

    User getByUserName(String userName);
    
}

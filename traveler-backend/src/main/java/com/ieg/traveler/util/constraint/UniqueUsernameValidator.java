package com.ieg.traveler.util.constraint;

import com.ieg.traveler.model.user.User;
import com.ieg.traveler.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isValid(String userName, ConstraintValidatorContext context) {
        User user = userRepository.getByUserName(userName);
        if (user != null){
            return false;
        }
        return true;
    }
}

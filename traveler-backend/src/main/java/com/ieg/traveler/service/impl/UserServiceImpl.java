package com.ieg.traveler.service.impl;

import com.ieg.traveler.model.user.User;
import com.ieg.traveler.repository.UserRepository;
import com.ieg.traveler.service.UserService;
import com.ieg.traveler.util.response.DataResponse;
import com.ieg.traveler.util.response.Response;
import com.ieg.traveler.util.response.SuccessDataResponse;
import com.ieg.traveler.util.response.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        super();
        this.userRepository = userRepository;
    }

    @Override
    public Response add(User user) {
        this.userRepository.save(user);
        return new SuccessResponse("User has added");
    }

    @Override
    public Response update(User user) {
        this.userRepository.save(user);
        return new SuccessResponse("User has updated.");
    }

    @Override
    public Response delete(int id) {
        this.userRepository.deleteById(id);
        return new SuccessResponse("User has deleted.");
    }

    @Override
    public DataResponse<List<User>> getAll() {
        return new SuccessDataResponse<>(this.userRepository.findAll());
    }

    @Override
    public DataResponse<User> getById(int id) {
        return new SuccessDataResponse<>(this.userRepository.getById(id));
    }

    @Override
    public DataResponse<User> getUserByUserName(String userName) {
        return new SuccessDataResponse<>(this.userRepository.getUserByUserName(userName));
    }
}
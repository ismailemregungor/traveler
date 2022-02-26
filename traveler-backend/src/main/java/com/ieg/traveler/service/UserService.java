package com.ieg.traveler.service;

import com.ieg.traveler.model.user.User;
import com.ieg.traveler.util.response.DataResponse;
import com.ieg.traveler.util.response.Response;
import java.util.List;

public interface UserService {

     Response add(User user);

     Response update(User user);

     Response delete(int id);

     DataResponse<List<User>> getAll();

     DataResponse<User> getById(int id);

     DataResponse<User> getByUserName(String userName);
}

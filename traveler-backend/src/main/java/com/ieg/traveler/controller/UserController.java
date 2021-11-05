package com.ieg.traveler.controller;

import com.ieg.traveler.model.user.User;
import com.ieg.traveler.service.UserService;
import com.ieg.traveler.util.response.DataResponse;
import com.ieg.traveler.util.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/1.0/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    @PostMapping("/add")
    public Response add(@RequestBody User user) {
        return this.userService.add(user);
    }

    @PostMapping("/update")
    public Response update(@RequestBody User user) {
        return this.userService.update(user);
    }

    @PostMapping("/delete")
    public Response delete(@RequestParam("id") int id) {
        return this.userService.delete(id);
    }

    @GetMapping("/getAll")
    public DataResponse<List<User>> getAll() {
        return this.userService.getAll();
    }

    @GetMapping("/getById")
    public DataResponse<User> getById(@RequestParam("id") int id) {
        return this.userService.getById(id);
    }

    @GetMapping("/getUserByUserName")
    public DataResponse<User> getUserByEmail(@RequestParam("user_name") String userName) {
        return this.userService.getUserByUserName(userName);
    }
}

package com.ieg.traveler.controller;

import com.ieg.traveler.model.user.User;
import com.ieg.traveler.service.UserService;
import com.ieg.traveler.util.response.ApiError;
import com.ieg.traveler.util.response.DataResponse;
import com.ieg.traveler.util.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/1.0/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/add")
    public Response add(@Valid @RequestBody User user) {
        return this.userService.add(user);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError handleValidationException(MethodArgumentNotValidException methodArgumentNotValidException){
        ApiError apiError = new ApiError(400, "Validation Error", "/api/1.0/users");
        Map<String, String> validationErrors = new HashMap<>();
        for(FieldError fieldError : methodArgumentNotValidException.getBindingResult().getFieldErrors()){
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        apiError.setValidationErrors(validationErrors);
        return apiError;
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

    @GetMapping("/getByUserName")
    public DataResponse<User> getUserByEmail(@RequestParam("user_name") String userName) {
        return this.userService.getByUserName(userName);
    }
}
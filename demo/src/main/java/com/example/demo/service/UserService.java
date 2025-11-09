package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;



@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user){
        return userRepository.save(user);
    }

    public User login(String email, String password){
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)){
            return user;
        }
        throw new RuntimeException("Invalid Credentials");
    }
}

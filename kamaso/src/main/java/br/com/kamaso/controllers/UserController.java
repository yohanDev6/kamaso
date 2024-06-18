package br.com.kamaso.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.kamaso.models.user.User;
import br.com.kamaso.models.user.UserRepository;


@RestController("/user")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody User user){
        try {
            userRepository.save(user);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public User read(@PathVariable Long id){
        try {
            User user = userRepository.getReferenceById(id);
            System.out.println(user.getName());
            return user;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}

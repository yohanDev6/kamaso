package br.com.kamaso.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.kamaso.models.user.User;
import br.com.kamaso.models.user.UserDTO;
import br.com.kamaso.models.user.UserRepository;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("user/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody User user){
        String hasIncosistency = user.hasInconsistency();
        if(hasIncosistency != null) {
            return new ResponseEntity<>(hasIncosistency, HttpStatus.BAD_REQUEST);
        }
        try {
            userRepository.save(user);
            return new ResponseEntity<>("User saved successfully", HttpStatus.OK);
        } catch (DataIntegrityViolationException dive) {
            return new ResponseEntity<>("Username or email already exists: " + dive.getMessage(), HttpStatus.CONFLICT);
        } catch (IllegalArgumentException ae) {
            return new ResponseEntity<>("Illegal argument: " + ae.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error ocurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> readById(@PathVariable Long id) {
        if (id <= 0) {
            return new ResponseEntity<>("Invalid id", HttpStatus.BAD_REQUEST);
        }
        try {
            User user = userRepository.getReferenceById(id);
            UserDTO udto = new UserDTO(user);
            return new ResponseEntity<>(udto, HttpStatus.OK);
        } catch (EntityNotFoundException enf) {
            return new ResponseEntity<>("Entity not found: " + enf.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error ocurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<?> read(){
        try {
            List<User> users = userRepository.findAll();
            return new ResponseEntity<>(UserDTO.toDTO(users), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error ocurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody User modifiedUser){
        try {
            User user = userRepository.getReferenceById(modifiedUser.getId());
            user.setName(modifiedUser.getName());
            user.setUsername(modifiedUser.getUsername());
            user.setEmail(modifiedUser.getEmail());
            user.setVerified(modifiedUser.getVerified());
            userRepository.save(user);
            return new ResponseEntity<>("User modified successfully", HttpStatus.OK);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>("Illegal argument: " + iae.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error ocurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>("Illegal argument: " + iae.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("An unexpected error ocurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

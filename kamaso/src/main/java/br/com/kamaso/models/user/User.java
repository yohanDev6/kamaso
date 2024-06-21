package br.com.kamaso.models.user;

import java.util.regex.Pattern;

import org.springframework.security.crypto.bcrypt.BCrypt;

import java.time.LocalDateTime;
import java.util.regex.Matcher;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name, username, email, password;
    private boolean verified, blocked;
    private LocalDateTime createdAt;

    public User(){
        verified = false;
        blocked = false;
        createdAt = LocalDateTime.now();
    }

    // create user
    public User(String name, String username, String email, String password){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // get user
    public User(long id, String name, String username, String email, String password, boolean verified, boolean blocked){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.verified = verified;
        this.blocked = blocked;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getVerified(){
        return verified;
    }
    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public boolean getBlocked(){
        return blocked;
    }
    public void setBlocked(boolean blocked) {
        this.blocked = blocked;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String hasInconsistency() {
        String msg = null;
    
        // Regex for validating email
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern emailPattern = Pattern.compile(emailRegex);
        Matcher emailMatcher = emailPattern.matcher(email.trim());
    
        // Regex for validating password
        String passwordRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$";
        Pattern passwordPattern = Pattern.compile(passwordRegex);
        Matcher passwordMatcher = passwordPattern.matcher(password);
    
        if (name.trim().isEmpty() || username.trim().isEmpty()) {
            msg = "Name and username are required";
        } else if (email.trim().isEmpty()) {
            msg = "Email is required";
        } else if (!emailMatcher.matches()) {
            msg = "Invalid email format";
        } else if (password.isEmpty() || password.length() < 8) {
            msg = "Password is required, it must have at least 8 characters";
        } else if (!passwordMatcher.matches()) {
            msg = "Password must have at least one digit, one uppercase letter, one lowercase letter, one special character, and no whitespace";
        } else {
            password = BCrypt.hashpw(password, BCrypt.gensalt());
        }
    
        return msg;
    }
}

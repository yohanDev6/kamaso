package br.com.kamaso.models.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name, username, email, password;
    private boolean verified, blocked;

    public User(){

    }

    // create user
    public User(String name, String username, String email, String password, boolean verified, boolean blocked){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.verified = verified;
        this.blocked = blocked;
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
}

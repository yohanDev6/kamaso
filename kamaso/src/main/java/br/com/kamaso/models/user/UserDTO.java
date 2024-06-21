package br.com.kamaso.models.user;

import java.time.LocalDateTime;
import java.util.ArrayList;

import java.util.List;

public record UserDTO(
    long id,
    String name,
    String username,
    String email,
    boolean verified,
    boolean blocked,
    LocalDateTime createdAt) {
    
        public UserDTO(User user) {
            this(
                user.getId(),
                user.getName(),
                user.getUsername(),
                user.getEmail(),
                user.getVerified(),
                user.getBlocked(),
                user.getCreatedAt()
            );
        }

        public static ArrayList<UserDTO> toDTO(List<User> users){
            ArrayList<UserDTO> usersDTO = new ArrayList<>();
            for(User user : users){
                UserDTO udto = new UserDTO(user);
                usersDTO.add(udto);
            }
            return usersDTO;
        }
}

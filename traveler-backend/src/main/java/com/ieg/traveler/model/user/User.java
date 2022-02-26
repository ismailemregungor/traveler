package com.ieg.traveler.model.user;

import com.ieg.traveler.util.constraint.UniqueUsername;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Size(min = 2, max = 255)
    @NotNull(message = "{traveler.constraints.displayName.NotNull.message}")
    @Column(name = "display_name")
    private String displayName;

    @UniqueUsername
    @Size(min = 4, max = 255)
    @NotNull(message = "{traveler.constraints.userName.NotNull.message}")
    @Column(name = "user_name")
    private String userName;

    @Size(min = 6, max = 255)
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{traveler.constraints.password.Pattern.message}")
    @NotNull(message = "{traveler.constraints.password.NotNull.message}")
    @Column(name = "password")
    private String password;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return AuthorityUtils.createAuthorityList( "Role_user");
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

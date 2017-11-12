package com.wvs.anteair.login.model;


import com.wvs.anteair.settings.validators.PasswordsEqualConstraint;
import com.wvs.anteair.settings.validators.UniqueUsername;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

/**
 * The Account class is an entity model object. An Account describes the
 * security credentials and authentication flags that permit access to
 * application functionality.
 */

@PasswordsEqualConstraint.List({ 
    @PasswordsEqualConstraint(
      field = "password", 
      fieldMatch = "confirmPassword", 
      message = "Passwords do not match!"
    )
})
@Entity
@Table(name="user_m")
public class Account {

    @Id
    @GeneratedValue
    @Column(name="user_id")
    private Long id;

    @NotNull
    @UniqueUsername(message="Username already exists")
    @Size(min = 8, max = 255, message = "Username have to be grater than 8 characters")
    @Column(unique = true)
    private String username;

    @NotNull
    @Size(min = 8, max = 255, message = "Password have to be grater than 8 characters")
    private String password;
    
    @NotNull
    private String email;
    private String name;
    
    @Size(min=10,max=10, message ="Mobile number should be 10 digits")
    private String mobile;
    
    @NotNull
    private boolean enabled = true;
    
    @NotNull
    private boolean approval = false;

    @NotNull
    private boolean credentialsexpired = false;

    @NotNull
    private boolean expired = false;

    @NotNull
    private boolean locked = false;
    
    @NotNull
    @Transient
    @Size(min = 8, max = 255, message = "Password have to be grater than 8 characters")
    private String confirmPassword;
    
    

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "role_id"))
    private Set<Role> roles;
    
    

    public Account() {

    }

    public Account(Account account){
        this.id = account.getId();
        this.username = account.getUsername();
        this.password = account.getPassword();
        this.enabled = account.isEnabled();
        this.credentialsexpired = account.isCredentialsexpired();
        this.locked = account.isExpired();
        this.roles = account.getRoles();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isCredentialsexpired() {
        return credentialsexpired;
    }

    public void setCredentialsexpired(boolean credentialsexpired) {
        this.credentialsexpired = credentialsexpired;
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public boolean isApproval() {
		return approval;
	}

	public void setApproval(boolean approval) {
		this.approval = approval;
	}

	

	
	
	
	
	
    
    

}

package com.wvs.anteair.login.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * The Role class is an entity model object. A Role describes a privilege level
 * within the application. A Role is used to authorize an Account to access a
 * set of application resources.
 *
 * @author Matt Warman
 */
@Entity
@Table(name="roles_m")
public class Role {

    @Id
    @Column(name="role_id")
    private Integer id;

    @Column(name="role_name")
    @NotNull
    private String code;

    @Column(name="is_active", columnDefinition = "boolean default true")
	private Boolean is_active = true;
    
    @Column(name = "time_stamp")
	private  Timestamp time_stamp=new Timestamp((new java.util.Date()).getTime()); 
    
    @Column(name="ip_address")
	private String ip_address;
    
    @Column(name="remarks")
	private String remarks;

    public Role() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

	public Boolean getIs_active() {
		return is_active;
	}

	public void setIs_active(Boolean is_active) {
		this.is_active = is_active;
	}

	public Timestamp getTime_stamp() {
		return time_stamp;
	}

	public void setTime_stamp(Timestamp time_stamp) {
		this.time_stamp = time_stamp;
	}

	public String getIp_address() {
		return ip_address;
	}

	public void setIp_address(String ip_address) {
		this.ip_address = ip_address;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
    
    

   

}

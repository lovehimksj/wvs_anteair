package com.wvs.anteair.settings.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.BeanWrapperImpl;

import com.wvs.anteair.login.model.Account;

public class PasswordsEqualConstraintValidator implements ConstraintValidator<PasswordsEqualConstraint, Object>{

	 private String field;
	    private String fieldMatch;
	 
	    public void initialize(PasswordsEqualConstraint constraintAnnotation) {
	        this.field = constraintAnnotation.field();
	        this.fieldMatch = constraintAnnotation.fieldMatch();
	    }

	@Override
	public boolean isValid(Object account, ConstraintValidatorContext context) {
		 Object fieldValue = new BeanWrapperImpl(account).getPropertyValue(field);
		 Object fieldMatchValue = new BeanWrapperImpl(account).getPropertyValue(fieldMatch);
		return fieldValue.toString().equals(fieldMatchValue.toString());
	}

}

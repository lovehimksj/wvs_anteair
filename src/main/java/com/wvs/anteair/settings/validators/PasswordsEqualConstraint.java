package com.wvs.anteair.settings.validators;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy={PasswordsEqualConstraintValidator.class})
@Documented
public @interface PasswordsEqualConstraint {
	String message() default "Fields values don't match!";
	Class<?>[] groups() default {};
	Class<? extends Payload>[] payload() default {};
    String field();
 
    String fieldMatch();
 
    @Target({ ElementType.TYPE })
    @Retention(RetentionPolicy.RUNTIME)
    @interface List {
    	PasswordsEqualConstraint[] value();
    }
}

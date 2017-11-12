package com.wvs.anteair.settings.errors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

/**
 * This is an exception that let us return a json with
 * all the validations errors
 */
public class InvalidRequestException extends RuntimeException {

    private Errors errors;
    private Collection<String> messages;
   

    /**
     * Contructor that get the message and the errors object
     * @param message - a custom message as string
     * @param errors - the Errors that we have
     */
    public InvalidRequestException(Errors errors) {
        super();
    	List<FieldError> error=errors.getFieldErrors();
    	List<String> messages=new ArrayList<>();
    	for(FieldError e:error)
    		messages.add("@"+e.getField().toUpperCase()+":"+e.getDefaultMessage());
        this.errors = errors;
        this.messages=messages;
        getMessage();
    }

    public Errors getErrors() { return errors; }
    
    
    @Override
    public String getMessage(){
        String msg;

        if(this.messages!=null && !this.messages.isEmpty()){
           msg=null;
            for(String message : this.messages){
                msg=message;
            }

        }else msg= super.getMessage();

        return msg;
    }

}

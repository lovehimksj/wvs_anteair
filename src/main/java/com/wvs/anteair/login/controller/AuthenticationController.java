package com.wvs.anteair.login.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.AuthorizationServerTokenServices;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import com.wvs.anteair.login.model.Account;
import com.wvs.anteair.login.service.AccountService;
import com.wvs.anteair.settings.email.SmtpMailSender;
import com.wvs.anteair.settings.errors.InvalidRequestException;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * This controller is responsible to manage the authentication
 * system. Login - Register - Forgot password - Account Confirmation
 */
@RestController
public class AuthenticationController extends BaseController{

    @Autowired
    private AuthenticationManager authenticationManager;
    
   
    @Autowired
    private AuthorizationServerTokenServices tokenServices;

    @Autowired
    private AccountService accountService;

    @Autowired
    private SmtpMailSender smtpMailSender;

    @RequestMapping(value="/api/sample", method= RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Account> sampleGet(HttpServletResponse response,HttpServletRequest request){
    	System.out.println("get method");
        return new ResponseEntity<Account>(accountService.findByUsername(request.getParameter("username")), HttpStatus.CREATED);
    }
    
    @RequestMapping(value="/api/sample", method= RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Account> sample(HttpServletResponse response,OAuth2Authentication authentication){
    	/*Map<String,Object> additionalInfo =tokenServices.getAccessToken(authentication).getAdditionalInformation();
    	System.out.println(additionalInfo.values());*/
        return new ResponseEntity<Account>(accountService.findByUsername("papidakos"), HttpStatus.CREATED);
    }

    /**
     * Create a new user account
     * @param account user account
     * @return created account as json
     */
    @RequestMapping(value="/register", method= RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@Valid @RequestBody Account account, BindingResult errors){

        // Check if account is unique
        if(errors.hasErrors()){
        	
        	/*List<FieldError> error=errors.getFieldErrors();
        	List<String> message=new ArrayList<>();
        	for(FieldError e:error)
        		message.add("@"+e.getField().toUpperCase()+":"+e.getDefaultMessage());*/
            throw new InvalidRequestException(errors);
        }

        if(accountService.createNewAccount(account)!=null)
        return new ResponseEntity<String>("", HttpStatus.CREATED);
        else
        	return new ResponseEntity<String>("", HttpStatus.CONFLICT);
    }

    @RequestMapping(value="/forgot-password", method=RequestMethod.GET)
    public ResponseEntity<String> forgotPassword() throws MessagingException {
        String response = "{success: true}";
        smtpMailSender.send("prakash.gimt@gmail.com", "Password forgot", "Forgot password url");
        return new ResponseEntity<String>(response, HttpStatus.OK);
    }

}

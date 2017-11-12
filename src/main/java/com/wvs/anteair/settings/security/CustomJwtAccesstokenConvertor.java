package com.wvs.anteair.settings.security;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;

import com.wvs.anteair.login.model.Account;
import com.wvs.anteair.login.repository.AccountRepository;

public class CustomJwtAccesstokenConvertor extends JwtAccessTokenConverter {
   
	@Autowired
	HttpServletResponse response;
	@Autowired
	AccountRepository accountRepository;
	
	
	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken,OAuth2Authentication authentication){
		DefaultOAuth2AccessToken customAccessToken = new DefaultOAuth2AccessToken(accessToken);

		OAuth2AccessToken enhancedToken=super.enhance(customAccessToken, authentication);
		User user=(User)authentication.getPrincipal();		
		Account account=accountRepository.findByUsername(user.getUsername());
		final Map<String, Object> additionalInfo = new HashMap<>();
		additionalInfo.put("customInfo", "some_stuff_here");
        additionalInfo.put("auhorities", user.getAuthorities());
        ((DefaultOAuth2AccessToken)enhancedToken).setAdditionalInformation(additionalInfo);
         response.setHeader("access_token", enhancedToken.getValue());
         response.setHeader("token_type",enhancedToken.getTokenType());
         response.setHeader("refresh_token", enhancedToken.getRefreshToken().toString());         
         response.setHeader("is_approved", Boolean.toString(account.isApproval()));
		return enhancedToken;	
	}
}

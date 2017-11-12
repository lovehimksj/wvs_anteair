package com.wvs.anteair.settings.security;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;



public class CustomTokenEnhancer extends JwtAccessTokenConverter implements TokenEnhancer {

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
		DefaultOAuth2AccessToken customAccessToken = new DefaultOAuth2AccessToken(accessToken);

		OAuth2AccessToken enhancedToken=super.enhance(customAccessToken, authentication);
		User user=(User)authentication.getPrincipal();
		final Map<String, Object> additionalInfo = new HashMap<>();
		additionalInfo.put("customInfo", "some_stuff_here");
        additionalInfo.put("authorities", user.getAuthorities());
        ((DefaultOAuth2AccessToken)enhancedToken).setAdditionalInformation(additionalInfo);
		return accessToken;
	}

}

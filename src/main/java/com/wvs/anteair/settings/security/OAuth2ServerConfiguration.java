package com.wvs.anteair.settings.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.code.AuthorizationCodeServices;
import org.springframework.security.oauth2.provider.code.JdbcAuthorizationCodeServices;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;
import org.springframework.security.web.csrf.CsrfFilter;

@Configuration
public class OAuth2ServerConfiguration {

    private static final String RESOURCE_ID = "restservice";

    @Configuration
    @EnableResourceServer
    protected static class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

       

        @Autowired
        private TokenStore tokenStore;

        @Override
        public void configure(ResourceServerSecurityConfigurer resources) {
            // @formatter:off
            resources
                    .resourceId(RESOURCE_ID).tokenStore(tokenStore);
            // @formatter:on
        }

        @Override
        public void configure(HttpSecurity http) throws Exception {
            // @formatter:off
            http
                    .csrf().disable()
                    .authorizeRequests()
                    .antMatchers("/api/**").authenticated();

        
            // @formatter:on
        }

    }



    @Configuration
    @EnableAuthorizationServer
    protected static class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

        @Autowired
        private JwtAccessTokenConverter jwtAccessTokenConverter;

        @Autowired
        private TokenStore tokenStore;

        @Autowired
        @Qualifier("authenticationManagerBean")
        private AuthenticationManager authenticationManager;

        @Autowired
        CustomUserDetailsService userDetailsService;
        
        /*@Autowired
        private DataSource dataSource;*/
        
        @Autowired
        WebSecurityConfiguration webSecurityConfiguration;

        @Override
        public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        	 // @formatter:off
            endpoints
                    .tokenStore(tokenStore)
                    .authenticationManager(authenticationManager)
                    .accessTokenConverter(webSecurityConfiguration.jwtAccessTokenConverter())
                    .userDetailsService(userDetailsService);
                    //.tokenEnhancer(webSecurityConfiguration.tokenEnhancer());
            // @formatter:on
        	
        	/*endpoints.userDetailsService(userDetailsService) 
        	.authorizationCodeServices(webSecurityConfiguration.authorizationCodeServices())
        	.authenticationManager(this.authenticationManager)
        	.tokenStore(webSecurityConfiguration.tokenStore()).approvalStoreDisabled();*/
            
        }

        @Override
        public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
            // @formatter:off
            clients
                    .inMemory()
                    //.jdbc(dataSource)
                    .withClient("clientapp")
                    .authorizedGrantTypes("password","refresh_token")
                    .authorities("USER")
                    .scopes("read", "write")
                    .resourceIds(RESOURCE_ID)
                    .secret("123456")
                    .accessTokenValiditySeconds(600)
                    .refreshTokenValiditySeconds(120);
            // @formatter:on
        }
        
        
        

    }
    
    

}

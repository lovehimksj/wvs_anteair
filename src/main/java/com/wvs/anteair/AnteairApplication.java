package com.wvs.anteair;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.guava.GuavaCacheManager;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AnteairApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnteairApplication.class, args);
	}
	
	
	 /**
     * Create a CacheManager implementation class to be used by Spring where
     * <code>@Cacheable</code> annotations are applied.
     *
     * @return A CacheManager instance.
     */
    @Bean
    public CacheManager cacheManager() {

        GuavaCacheManager cacheManager = new GuavaCacheManager("com.wvs.anteair");

        return cacheManager;
    }
}

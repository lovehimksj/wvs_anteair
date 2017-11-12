package com.wvs.anteair.settings.configuration;


import org.springframework.boot.builder.SpringApplicationBuilder;
/*import org.springframework.boot.web.support.SpringBootServletInitializer;*/
import org.springframework.boot.context.web.SpringBootServletInitializer;

import com.wvs.anteair.AnteairApplication;

public class WebInitializer extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(AnteairApplication.class);
    }

}
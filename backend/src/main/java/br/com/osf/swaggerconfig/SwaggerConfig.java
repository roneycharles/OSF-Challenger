package br.com.osf.swaggerconfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
    @Bean
    public Docket api() {
    	return new Docket(DocumentationType.SWAGGER_2)
    			.select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo());
    }
    
    private ApiInfo apiInfo() {
        return new ApiInfo("RestFul API With Spring Boot 2.1.3", 
        		"Some description about your API",
                "V1", "terms Of Service Url",
                    new Contact("Roney Charles",
                                "https://www.linkedin.com/in/roneycharles/",
                                "roneycharles@edu.unifor.br"), "License Of API", "License of URL", Collections.emptyList());
    }
}

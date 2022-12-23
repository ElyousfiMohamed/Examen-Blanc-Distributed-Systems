package com.example.examen_blanc.immatriculationCommandSide;

import com.thoughtworks.xstream.XStream;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ImmatriculationCommandSideApplication {

    public static void main(String[] args) {
        SpringApplication.run(ImmatriculationCommandSideApplication.class, args);
    }

    @Bean
    public XStream xStream() {
        XStream xStream = new XStream();

        xStream.allowTypesByWildcard(new String[] { "com.example.**" });
        return xStream;
    }
}

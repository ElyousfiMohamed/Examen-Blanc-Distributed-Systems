package com.example.examen_blanc.infractionCommandSide;

import com.thoughtworks.xstream.XStream;
import org.axonframework.commandhandling.CommandBus;
import org.axonframework.commandhandling.SimpleCommandBus;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InfractionCommandSideApplication {

    public static void main(String[] args) {
        SpringApplication.run(InfractionCommandSideApplication.class, args);
    }
    @Bean
    public XStream xStream() {
        XStream xStream = new XStream();

        xStream.allowTypesByWildcard(new String[] { "com.example.**" });
        return xStream;
    }
    @Bean
    public CommandBus commandBus() {
        return SimpleCommandBus.builder().build();
    }
}

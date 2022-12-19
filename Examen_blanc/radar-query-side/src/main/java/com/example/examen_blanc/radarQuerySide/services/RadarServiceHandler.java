package com.example.examen_blanc.radarQuerySide.services;

import com.example.examen_blanc.commonApi.events.RadarCreatedEvent;
import com.example.examen_blanc.commonApi.events.RadarUpdatedEvent;
import com.example.examen_blanc.radarQuerySide.entities.Radar;
import com.example.examen_blanc.radarQuerySide.repositories.RadarRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.axonframework.eventhandling.EventHandler;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class RadarServiceHandler {
    private RadarRepository radarRepository;

    @EventHandler
    public void on(RadarCreatedEvent event){
        log.info("**************************");
        log.info("RadarCreatedEvent received");
        radarRepository.save(new Radar(event.getId(),event.getVitesseMax(),
                event.getLongtitude(),event.getLatitude()));
    }

    @EventHandler
    public void on(RadarUpdatedEvent event){
        log.info("**************************");
        log.info("RadarUpdatedEvent received");
        Radar radar = radarRepository.findById(event.getId()).get();
        radar.setVitesseMax(event.getVitesseMax());
        radar.setLongtitude(event.getLongtitude());
        radar.setLatitude(event.getLatitude());
        radarRepository.save(radar);
    }
}

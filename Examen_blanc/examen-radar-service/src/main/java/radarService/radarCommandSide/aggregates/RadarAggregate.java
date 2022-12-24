package radarService.radarCommandSide.aggregates;

import com.example.examen_blanc.commonApi.commands.CreateRadarCommand;
import com.example.examen_blanc.commonApi.commands.UpdateRadarCommand;
import com.example.examen_blanc.commonApi.events.RadarCreatedEvent;
import com.example.examen_blanc.commonApi.events.RadarUpdatedEvent;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;

@Aggregate
public class RadarAggregate {
    @AggregateIdentifier
    private String id;
    private double vitesseMax;
    private double longtitude;
    private double latitude;

    public RadarAggregate() {
    }

    @CommandHandler
    public RadarAggregate(CreateRadarCommand command) {
        if (command.getVitesseMax() < 0) {
            throw new RuntimeException("Vitesse max must be positive");
        }

        AggregateLifecycle.apply(new RadarCreatedEvent(
                command.getId(),
                command.getVitesseMax(),
                command.getLongtitude(),
                command.getLatitude()
        ));
    }

    @EventSourcingHandler
    public void on(RadarCreatedEvent event) {
        this.id = event.getId();
        this.vitesseMax = event.getVitesseMax();
        this.longtitude = event.getLongtitude();
        this.latitude = event.getLatitude();
    }

    @CommandHandler
    public void handle(UpdateRadarCommand command) {
        AggregateLifecycle.apply(new RadarUpdatedEvent(
                command.getId(),
                command.getVitesseMax(),
                command.getLongtitude(),
                command.getLatitude()
        ));
    }

    @EventSourcingHandler
    public void on(RadarUpdatedEvent event) {
        this.vitesseMax = event.getVitesseMax();
        this.longtitude = event.getLongtitude();
        this.latitude = event.getLatitude();
    }
}

package com.example.examen_blanc.infractionQuerySide.repositories;

import com.example.examen_blanc.infractionQuerySide.entities.Infraction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InfractionRepository extends JpaRepository<Infraction,String> {

}

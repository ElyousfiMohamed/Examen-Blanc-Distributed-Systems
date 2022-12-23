package com.example.examen_blanc.immatriculationQuerySide.repositories;

import com.example.examen_blanc.immatriculationQuerySide.entities.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiculeRepository extends JpaRepository<Vehicule, String> {
}


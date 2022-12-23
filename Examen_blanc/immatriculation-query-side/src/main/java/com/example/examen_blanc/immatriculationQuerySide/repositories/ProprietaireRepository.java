package com.example.examen_blanc.immatriculationQuerySide.repositories;

import com.example.examen_blanc.immatriculationQuerySide.entities.Proprietaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProprietaireRepository extends JpaRepository<Proprietaire, String> {
}

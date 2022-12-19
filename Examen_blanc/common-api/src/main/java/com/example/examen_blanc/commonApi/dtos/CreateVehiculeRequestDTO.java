package com.example.examen_blanc.commonApi.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateVehiculeRequestDTO {
    private String matricule;
    private String marque;
    private String modele;
    private String proprietaireId;
}

package com.example.examen_blanc.commonApi.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateProprietaireRequestDTO {
    private String nom;
    private String prenom;
    private String adresse;
    private String telephone;
}

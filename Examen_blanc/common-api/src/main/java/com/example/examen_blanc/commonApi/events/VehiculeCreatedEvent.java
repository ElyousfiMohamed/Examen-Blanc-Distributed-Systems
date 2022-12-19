package com.example.examen_blanc.commonApi.events;

public class VehiculeCreatedEvent extends BaseEvent<String> {
    private String marque;
    private String modele;
    private String immatriculation;
    private String proprietaireId;

    public VehiculeCreatedEvent(String id, String marque, String modele, String immatriculation, String proprietaireId) {
        super(id);
        this.marque = marque;
        this.modele = modele;
        this.immatriculation = immatriculation;
        this.proprietaireId = proprietaireId;
    }

    public String getMarque() {
        return marque;
    }

    public String getModele() {
        return modele;
    }

    public String getImmatriculation() {
        return immatriculation;
    }

    public String getProprietaireId() {
        return proprietaireId;
    }
}

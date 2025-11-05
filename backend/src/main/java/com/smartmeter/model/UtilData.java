package com.smartmeter.model;

public class UtilData {
    private int nonCommunicationCount;
    private int communicationCount;
    private int inventoryCount;

    // Getters and Setters

    public int getNonCommunicationCount() {
        return nonCommunicationCount;
    }

    public void setNonCommunicationCount(int nonCommunicationCount) {
        this.nonCommunicationCount = nonCommunicationCount;
    }

    public int getCommunicationCount() {
        return communicationCount;
    }

    public void setCommunicationCount(int communicationCount) {
        this.communicationCount = communicationCount;
    }

    public int getInventoryCount() {
        return inventoryCount;
    }

    public void setInventoryCount(int inventoryCount) {
        this.inventoryCount = inventoryCount;
    }
}

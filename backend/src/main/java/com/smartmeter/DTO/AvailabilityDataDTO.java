package com.smartmeter.DTO;

import java.util.List;

public class AvailabilityDataDTO {

    private List<Object[]> meterConfig;
    private List<Object[]> loadCount;
    private List<Object[]> dailyCount;
    private List<Object[]> billingCount;

    // Getters and Setters
    public List<Object[]> getMeterConfig() {
        return meterConfig;
    }

    public void setMeterConfig(List<Object[]> meterConfig) {
        this.meterConfig = meterConfig;
    }

    public List<Object[]> getLoadCount() {
        return loadCount;
    }

    public void setLoadCount(List<Object[]> loadCount) {
        this.loadCount = loadCount;
    }

    public List<Object[]> getDailyCount() {
        return dailyCount;
    }

    public void setDailyCount(List<Object[]> dailyCount) {
        this.dailyCount = dailyCount;
    }

    public List<Object[]> getBillingCount() {
        return billingCount;
    }

    public void setBillingCount(List<Object[]> billingCount) {
        this.billingCount = billingCount;
    }
}

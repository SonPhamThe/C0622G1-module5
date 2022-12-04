package com.example.demo.dto;

import com.example.demo.model.HouseCar;

public class CardDTO {
    private int id;

    private int price;

    private String address1;
    private String address2;
    private String startDate;
    private String hourStart;
    private int count;

    private HouseCar houseCar;

    public CardDTO() {
    }

    public CardDTO(int id, int price, String address1, String address2, String startDate, String hourStart, int count, HouseCar houseCar) {
        this.id = id;
        this.price = price;
        this.address1 = address1;
        this.address2 = address2;
        this.startDate = startDate;
        this.hourStart = hourStart;
        this.count = count;
        this.houseCar = houseCar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getHourStart() {
        return hourStart;
    }

    public void setHourStart(String hourStart) {
        this.hourStart = hourStart;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public HouseCar getHouseCar() {
        return houseCar;
    }

    public void setHouseCar(HouseCar houseCar) {
        this.houseCar = houseCar;
    }
}

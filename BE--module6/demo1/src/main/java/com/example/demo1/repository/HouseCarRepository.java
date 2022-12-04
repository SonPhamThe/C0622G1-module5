package com.example.demo1.repository;

import com.example.demo1.model.HouseCar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseCarRepository extends JpaRepository<HouseCar, Integer> {
}
